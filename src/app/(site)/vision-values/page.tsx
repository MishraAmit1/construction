// src/app/(site)/vision-values/page.tsx
import VisionValuesCommitments from '@/components/sections/vision-values';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Vision, Mission & Values - Our Commitments | A&T Infracon',
    description: 'A&T Infracon\'s vision to lead infrastructure development, mission for quality excellence, and core values of integrity, innovation, and sustainability.',
    keywords: 'company vision, mission statement, core values, corporate commitments, business principles, organizational values',
    openGraph: {
        title: 'Vision, Mission & Values - A&T Infracon',
        description: 'Leading infrastructure development with integrity and innovation',
        url: 'https://atinfracon.com/vision-values',
        images: [{ url: '/images/hero.webp', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://atinfracon.com/vision-values' },
    robots: {
        index: true,
        follow: true,
    },
};

// Schema 1: Organization with Mission
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "A&T Infracon Pvt. Ltd.",
    "url": "https://atinfracon.com",
    "slogan": "Engineering Infrastructure. Building the Future.",
    "description": "Leading infrastructure development across India's most challenging regions",
    "mission": "To lead infrastructure development by delivering robust, sustainable, and secure civil engineering solutions with excellence in quality, safety, and innovation",
    "foundingDate": "1989",
    "knowsAbout": [
        "Quality Engineering",
        "Safety Management",
        "Sustainable Infrastructure",
        "Innovation in Construction"
    ],
    "valueStatement": [
        "Integrity - Honest and transparent in all dealings",
        "Excellence - Quality-first approach using modern equipment",
        "Teamwork - 200+ professionals delivering exceptional results",
        "Sustainability - Environment-conscious construction practices"
    ]
};

// Schema 2: WebPage
const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vision, Mission & Values",
    "description": "Our vision, mission, and core values guiding infrastructure excellence",
    "url": "https://atinfracon.com/vision-values",
    "mainEntity": {
        "@type": "ItemList",
        "name": "Core Values",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Integrity",
                "description": "Honest and transparent business practices"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Excellence",
                "description": "Quality-first approach in every project"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Teamwork",
                "description": "Collaborative approach to success"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Sustainability",
                "description": "Environment-conscious construction"
            }
        ]
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
            "item": "https://atinfracon.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Vision & Values",
            "item": "https://atinfracon.com/vision-values"
        }
    ]
};

export default function Vison() {
    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <VisionValuesCommitments />
        </>
    );
}