import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteUrl, socialLinks } from "@/data/company";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const organizationSchema={"@context":"https://schema.org","@type":"Organization",name:"Startek (PVT) LTD",url:siteUrl,logo:`${siteUrl}/brand/startek.png`,sameAs:socialLinks.map(link=>link.href)};
const organizationSchemaJson=JSON.stringify(organizationSchema).replace(/</g,"\\u003c");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Startek | Digital, Development & Print Solutions",
  description: "Startek is a Sri Lankan technology and creative solutions company delivering digital marketing, web development, software solutions, printing, signage, packaging and physical branding.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Startek | Digital, Development & Print Solutions",
    description: "Technology, creativity and execution under one connected ecosystem.",
    type: "website",
    siteName: "Startek (PVT) LTD",
    locale: "en_LK",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Startek — Digital. Development. Print." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startek | Digital, Development & Print Solutions",
    description: "Technology, creativity and execution under one connected ecosystem.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:organizationSchemaJson}}/>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
