// src/app/(site)/terms-of-use/page.tsx
import TermsOfUsePage from "@/components/sections/TermsOfUsePage";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Terms of Use - Website Terms & Conditions | A&T Infracon',
    description: 'Terms and conditions for using A&T Infracon website. Legal terms, user responsibilities, and website usage policies.',
    keywords: 'terms of use, terms and conditions, website terms, legal terms, user agreement, usage policy',
    openGraph: {
        title: 'Terms of Use - A&T Infracon',
        description: 'Website terms and conditions',
        url: 'https://atinfracon.com/terms-of-use',
    },
    alternates: { canonical: 'https://atinfracon.com/terms-of-use' },
    robots: {
        index: true,
        follow: true,
    },
};

// Schema 1: WebPage
const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Use",
    "description": "Website terms and conditions",
    "url": "https://atinfracon.com/terms-of-use",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
        "@type": "Organization",
        "name": "A&T Infracon Pvt. Ltd.",
        "logo": {
            "@type": "ImageObject",
            "url": "https://atinfracon.com/images/logo.png"
        }
    },
    "inLanguage": "en-IN"
};

// Schema 2: Breadcrumb
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
            "name": "Terms of Use",
            "item": "https://atinfracon.com/terms-of-use"
        }
    ]
};

export default function TermsOfUse() {
    return (
        <>
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

            <TermsOfUsePage />
        </>
    );
}