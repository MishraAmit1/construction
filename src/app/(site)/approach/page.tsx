// src/app/(site)/approach/page.tsx
import ApproachPage from '@/components/sections/approach';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Our Approach - Quality & Safety First | A&T Infracon',
    description: 'A&T Infracon\'s systematic approach to infrastructure: Quality engineering, safety protocols, modern technology, and sustainable practices.',
    keywords: 'construction approach, quality assurance, safety protocols, project management, sustainable construction',
    alternates: { canonical: 'https://ant-silk.vercel.app/approach' },
};

// Schema 1: WebPage
const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Approach",
    "description": "Quality-driven infrastructure development approach",
    "url": "https://ant-silk.vercel.app/approach"
};

// Schema 2: Breadcrumb
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ant-silk.vercel.app" },
        { "@type": "ListItem", "position": 2, "name": "Approach", "item": "https://ant-silk.vercel.app/approach" }
    ]
};

export default function ApproachPageWrapper() {
    return (
        <>
            <Script id="webpage-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <Script id="breadcrumb-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ApproachPage />
        </>
    );
}