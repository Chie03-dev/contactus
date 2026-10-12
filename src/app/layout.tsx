import type { Metadata, Viewport } from "next";
import {
  Caveat,
  IBM_Plex_Mono,
  Instrument_Serif,
  Newsreader,
} from "next/font/google";

import { site } from "@/lib/site";

import "./globals.css";

// Rate Card type system: Instrument Serif for display, Newsreader for body,
// IBM Plex Mono for data, Caveat for hand-written annotations (tape labels,
// margin notes, stamps). Loaded via next/font — no runtime CDN, no shift.
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const description =
  "Transparent PHP pricing for web, mobile, and systems development in the Philippines. Fixed-scope packages with starting-at prices and plain terms.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Rate Card — Web, Mobile & Systems Development (PH)",
  description,
  keywords: [
    "web development pricing Philippines",
    "mobile app development cost PH",
    "systems development Philippines",
    "freelance developer Philippines",
    "PHP development pricing",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: site.url,
    siteName: site.name,
    title: "Rate Card — Web, Mobile & Systems Development (PH)",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rate Card — Web, Mobile & Systems Development (PH)",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f3ea",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.name} — Web, Mobile & Systems Development`,
  description,
  url: site.url,
  areaServed: "PH",
  email: `mailto:${site.email}`,
  priceRange: "₱15,000–₱200,000+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} ${hand.variable} min-h-screen bg-paper font-body text-ink antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-ink focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.14em] focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
