// src/app/(site)/services/page.tsx
import { Metadata } from 'next';
import Script from 'next/script';
import ServicesPage from '@/components/sections/services';
import { serviceDetailsData } from '@/lib/data'; // ✅ IMPORT STATIC DATA

export const metadata: Metadata = {
    title: 'Infrastructure Services | Road Construction, Border Security & More | A&T Infracon',
    description: 'A&T Infracon offers comprehensive civil engineering services: road construction, border infrastructure, building contracts, and renewable energy projects. 35+ years of expertise in challenging terrains.',
    keywords: 'civil engineering services, road construction company, border infrastructure contractor, building construction, renewable energy infrastructure, A&T Infracon services',
    openGraph: {
        title: 'Our Infrastructure Services - A&T Infracon',
        description: 'Expertise in Road Construction, Border Infrastructure, and large-scale Civil Projects.',
        url: 'https://atinfracon.com/services',
    },
    alternates: { canonical: 'https://atinfracon.com/services' },
    robots: {
        index: true,
        follow: true,
    },
};

// ✅ Create OfferCatalog Schema from static data
const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "A&T Infracon Services",
    "itemListElement": Object.values(serviceDetailsData).map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "url": `https://atinfracon.com/services/${service.id}`
        }
    }))
};

// Breadcrumb Schema
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atinfracon.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://atinfracon.com/services" }
    ]
};

export default function ServicesWrapper() { // ✅ RENAMED to avoid conflict
    return (
        <>
            <Script
                id="services-catalog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ServicesPage />
        </>
    );
}