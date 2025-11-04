// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

const siteConfig = {
  name: "A&T Infracon Pvt. Ltd.",
  description: "Leading Civil Engineering Contractor for Road and Building Works since 35+ years. Specializing in Border Infrastructure, CPWD Projects across Gujarat, Rajasthan, J&K and Ladakh.",
  url: "https://atinfracon.com",
  keywords: [
    "road construction company ahmedabad",
    "civil contractor gujarat",
    "border infrastructure contractor india",
    "CPWD contractor",
    "road contractor rajasthan",
    "government contractor",
    "infrastructure company gujarat",
    "NBCC contractor",
    "highway construction company"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#dc2626" },
    { media: "(prefers-color-scheme: dark)", color: "#dc2626" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "A&T Infracon - Engineering Infrastructure, Building the Future",
    template: "%s | A&T Infracon",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "A&T Infracon Pvt. Ltd." }],
  creator: "A&T Infracon",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: "https://i.postimg.cc/MZDskHTZ/Screenshot-2025-11-03-181739-1.png",
      width: 1200,
      height: 630,
      alt: "A&T Infracon - Infrastructure Company",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["https://i.postimg.cc/MZDskHTZ/Screenshot-2025-11-03-181739-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: ["/favicon-32x32.png"],
    apple: [
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon-256x256.png",
      },
    ],
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "A&T Infracon Pvt. Ltd.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "506, 5th floor, Aagam Avenue, Acher, Sabarmati",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380005",
    addressCountry: "IN"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-79357-03085",
    contactType: "customer service",
    email: "atinfracon@gmail.com",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"]
  },
  areaServed: "IN",
  foundingDate: "1989"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://hdurfgtlqgpgjjnlbctu.supabase.co" />
        <link rel="dns-prefetch" href="https://hdurfgtlqgpgjjnlbctu.supabase.co" />

        {/* Additional Favicon Support */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/favicon-128x128.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/favicon-256x256.png" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}