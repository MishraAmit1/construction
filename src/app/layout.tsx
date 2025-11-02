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
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "A&T Infracon - Infrastructure Company",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
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
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
    email: "atinfracon@gmail.com"
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />

        <Script
          id="organization-schema"
          type="application/ld+json"
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