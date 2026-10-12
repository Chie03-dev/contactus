import type { Metadata, Viewport } from "next";

import { site } from "@/lib/site";

import "./globals.css";

const description =
  "Transparent PHP pricing for web, mobile, and systems development in the Philippines. Fixed-scope packages with starting-at prices and plain terms.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Pricing — Web, Mobile & Systems Development (PH)",
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
    title: "Pricing — Web, Mobile & Systems Development (PH)",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Web, Mobile & Systems Development (PH)",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e14",
  colorScheme: "dark",
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
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-ink"
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
