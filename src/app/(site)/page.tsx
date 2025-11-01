import { Metadata } from 'next';
import Script from 'next/script';
import { BuildingTomorrow } from '@/components/sections/building-tomorrow';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Hero } from '@/components/sections/hero';
import { getFeaturedClients } from '@/lib/api/clients';
import { InspiringProjects } from '@/components/sections/inspiring-projects';
import { Legacy } from '@/components/sections/legacy';
import MajorClients from '@/components/sections/majorClients';
import { QualityPeople } from '@/components/sections/quality-people';
import { WeBuildHistory } from '@/components/sections/we-build-history';
import { WeAre } from '@/components/WeAre';

// Homepage Metadata
export const metadata: Metadata = {
  title: 'A&T Infracon Pvt. Ltd. - Leading Infrastructure Company in Gujarat & Rajasthan',
  description: 'Premier Civil Engineering Contractor with 35+ years experience in Road Construction, Border Infrastructure, CPWD Projects across Gujarat, Rajasthan, J&K and Ladakh. ₹161+ Crore Annual Turnover.',
  keywords: [
    'infrastructure company ahmedabad',
    'road construction company gujarat',
    'civil contractor ahmedabad',
    'border infrastructure contractor',
    'CPWD contractor gujarat',
    'NBCC contractor',
    'road contractor rajasthan',
    'government contractor ahmedabad',
    'construction company sabarmati',
    'PMGSY contractor',
    'highway construction company',
    'civil engineering contractor india',
    'infrastructure development gujarat'
  ],
  openGraph: {
    title: 'A&T Infracon - Engineering Infrastructure, Building the Future',
    description: 'Leading Civil Engineering Contractor specializing in Road Construction, Border Infrastructure & Government Projects since 35+ years.',
    url: 'https://atinfracon.com',
    siteName: 'A&T Infracon Pvt. Ltd.',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'A&T Infracon - Infrastructure Construction Projects',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A&T Infracon - Leading Infrastructure Company',
    description: '35+ years of excellence in Road Construction & Border Infrastructure',
    images: ['/images/hero.png'],
  },
  alternates: {
    canonical: 'https://atinfracon.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data Schemas
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "A&T Infracon Pvt. Ltd.",
  "url": "https://atinfracon.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://atinfracon.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "A&T Infracon Pvt. Ltd.",
  "image": "https://atinfracon.com/images/logo.png",
  "@id": "https://atinfracon.com",
  "url": "https://atinfracon.com",
  "telephone": "+91-79357-03085",
  "email": "atinfracon@gmail.com",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "506, 5th floor, Aagam Avenue, Acher, Sabarmati",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380005",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.0225,
    "longitude": 72.5714
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/atinfracon"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Gujarat"
    },
    {
      "@type": "State",
      "name": "Rajasthan"
    },
    {
      "@type": "State",
      "name": "Jammu and Kashmir"
    },
    {
      "@type": "State",
      "name": "Ladakh"
    }
  ]
};

const servicesOfferedSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Infrastructure Construction",
  "provider": {
    "@type": "Organization",
    "name": "A&T Infracon Pvt. Ltd."
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Road Construction",
          "description": "Highway, PMGSY, CRF, and Border Roads Construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Border Infrastructure",
          "description": "Border Fencing, BOPs, and Security Infrastructure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Civil Contracts",
          "description": "Building Construction and Government Projects"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Renewable Energy",
          "description": "Wind and Solar Power Infrastructure"
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://atinfracon.com"
    }
  ]
};

export default async function Home() {
  const clients = await getFeaturedClients();

  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesOfferedSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Page Content */}
      <Hero />
      <InspiringProjects />
      <QualityPeople />
      <BuildingTomorrow />
      <WeAre />
      <WeBuildHistory />
      <FeaturedProjects />
      <Legacy />
      <MajorClients clients={clients} />
    </>
  );
}