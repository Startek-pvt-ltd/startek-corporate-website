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

  const html = await response.text();
  assert.match(html, /<title>Startek \| Digital, Development &amp; Print Solutions<\/title>/i);
  assert.match(html, /We build\./);
  assert.match(html, /Digital <i>•<\/i> Development <i>•<\/i> Print/);
  assert.match(html, /Trusted By Ambitious Brands/);
  assert.match(html, /class="marquee-track"/);
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
