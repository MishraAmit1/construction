// src/app/(site)/careers/page.tsx
import { Metadata } from 'next';
import Script from 'next/script';
import { Careers } from '@/components/sections/careers';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team',
  description: 'Explore exciting career opportunities at A&T Infracon. Join our team of infrastructure professionals building India\'s future. Open positions in Civil Engineering, Project Management, and Construction.',
  keywords: 'infrastructure jobs, civil engineering careers, construction jobs ahmedabad, project manager jobs, site engineer vacancy, A&T Infracon careers, CPWD jobs, infrastructure company jobs',
  openGraph: {
    title: 'Join A&T Infracon - Build Your Career in Infrastructure',
    description: 'Be part of 35+ years of infrastructure excellence. Explore career opportunities.',
    url: 'https://ant-silk.vercel.app/careers',
    images: [{ url: '/images/Careers1.webp', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at A&T Infracon',
    description: 'Join our team of infrastructure professionals',
    images: ['/images/Careers1.webp'],
  },
  alternates: { canonical: 'https://ant-silk.vercel.app/careers' },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema 1: Organization Hiring Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "A&T Infracon Pvt. Ltd.",
  "url": "https://ant-silk.vercel.app",
  "logo": "https://ant-silk.vercel.app/images/logo.png",
  "description": "Leading Civil Engineering Contractor specializing in Infrastructure Development",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "506, 5th floor, Aagam Avenue, Acher, Sabarmati",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380005",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-79357-03085",
    "contactType": "HR Department",
    "email": "atinfracon@gmail.com",
    "availableLanguage": ["English", "Hindi", "Gujarati"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/atinfracon"
  ]
};

// Schema 2: JobPosting Collection (for listing page)
const jobListingSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Careers at A&T Infracon",
  "description": "Current job openings at A&T Infracon Pvt. Ltd.",
  "url": "https://ant-silk.vercel.app/careers",
  "publisher": {
    "@type": "Organization",
    "name": "A&T Infracon Pvt. Ltd.",
    "logo": "https://ant-silk.vercel.app/images/logo.png"
  }
};

// Schema 3: Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ant-silk.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Careers",
      "item": "https://ant-silk.vercel.app/careers"
    }
  ]
};

export default function CareersPage() {
  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="joblisting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobListingSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Careers />
    </>
  );
}