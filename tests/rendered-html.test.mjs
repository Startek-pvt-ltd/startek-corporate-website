import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the production homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.match(response.headers.get("strict-transport-security") ?? "", /max-age=63072000/);
  const csp=response.headers.get("content-security-policy") ?? "";
  assert.match(csp, /default-src 'self'/);
  assert.match(csp, /frame-src https:\/\/www\.google\.com/);
  assert.match(csp, /frame-src [^;]*https:\/\/www\.tiktok\.com/);
  assert.match(csp, /frame-ancestors 'none'/);
  assert.doesNotMatch(csp, /unsafe-eval|default-src \*|script-src \*/);

  const html = await response.text();
  assert.match(html, /<title>Startek \| Digital, Development &amp; Print Solutions<\/title>/i);
  assert.match(html, /We build\./);
  assert.match(html, /Digital <i>•<\/i> Development <i>•<\/i> Print/);
  assert.match(html, /Trusted By Ambitious Brands/);
  assert.match(html, /class="marquee-track"/);
  for (const logo of ["lavinia-properties", "rice-kottu-hut", "ceylon-chef", "uae-api", "thilina-super", "yoshani-creative"]) {
    assert.match(html, new RegExp(`/clients/${logo}\\.webp`));
  }
  assert.doesNotMatch(html, /CLIENT LOGO|Logo placeholders/);
  assert.match(html, /href="https:\/\/cal\.com\/startekpvtltd\/business-consultation" target="_blank" rel="noopener noreferrer"/);
  assert.match(html, /href="https:\/\/wa\.me\/94705935320\?text=/);
  assert.match(html, /aria-label="Contact Startek on WhatsApp"/);
  assert.match(html, /href="\/insights"/);
  assert.doesNotMatch(html, /Case Studies in Preparation|Portfolio publishing in progress|Insights Publishing Soon/);
  assert.match(html, /rel="canonical" href="https:\/\/startek\.lk"/i);
  for (const path of ["digital", "web-hub", "print-hub"]) {
    assert.match(html, new RegExp(`href="/${path}" target="_blank" rel="noopener noreferrer"`));
  }
  assert.doesNotMatch(html, /codex-preview|Sample Client|Demo Project|Lorem ipsum/i);
});

test("server-renders legal pages and the custom not-found page", async () => {
  const privacy = await render("/privacy");
  const terms = await render("/terms");
  const missing = await render("/launch-check-missing");

  assert.equal(privacy.status, 200);
  assert.match(await privacy.text(), /Privacy Policy/);
  assert.equal(terms.status, 200);
  assert.match(await terms.text(), /Terms of Use/);
  assert.equal(missing.status, 404);

  const missingHtml = await missing.text();
  assert.match(missingHtml, /404 — Page Not Found/);
  assert.match(missingHtml, /Back to Startek/);
  assert.match(missingHtml, /name="robots" content="noindex, nofollow"/i);
});

test("about page renders Kevin Menuja's leadership portrait", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Kevin Menuja, Founder of Startek/);
  assert.match(html, /\/team\/kevin-menuja\.webp/);
  assert.doesNotMatch(html, /Kevin Menuja monogram/);
});

test("contact page offers Cal.com business consultation booking", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Book Business Consultation/);
  assert.match(html, /href="https:\/\/cal\.com\/startekpvtltd\/business-consultation" target="_blank" rel="noopener noreferrer"/);
  assert.match(html, /mailto:startek\.pvt\.ltd11@gmail\.com/);
  assert.match(html, /tel:\+94705935320/);
  assert.match(html, /9:00 AM – 11:00 PM/);
  assert.match(html, /title="STARTEK \(PVT\) LTD location on Google Maps"/);
  assert.match(html, /https:\/\/www\.google\.com\/maps\/embed\?pb=/);
  assert.match(html, /WhatsApp/);
  for (const [field,limit] of [["fullName",100],["email",254],["phone",32],["company",120]]) {
    assert.match(html,new RegExp(`<input(?=[^>]*name="${field}")(?=[^>]*maxlength="${limit}")[^>]*>`,`i`));
  }
  assert.match(html, /<textarea(?=[^>]*name="details")(?=[^>]*maxlength="2000")[^>]*>/i);
});

test("digital page embeds the official Startek Digital introduction video", async () => {
  const response = await render("/digital");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Inside Startek Digital/);
  assert.match(html, /Your Growth Partner in the Digital World/);
  assert.match(html, /https:\/\/www\.tiktok\.com\/player\/v1\/7594636350515596551\?/);
  assert.match(html, /title="Startek Digital agency introduction on TikTok"/);
  assert.match(html, /loading="lazy"/);
  assert.doesNotMatch(html, /www\.tiktok\.com\/embed\.js/);
});

test("insights page renders its dedicated editorial route", async () => {
  const response = await render("/insights");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Ideas for/);
  assert.match(html, /Startek Insights is being prepared for publication/);
  assert.match(html, /Digital Growth/);
  assert.match(html, /Web &amp; Technology/);
  assert.match(html, /Brand &amp; Print/);
  assert.doesNotMatch(html, /fake article|Sample Article/i);
});
