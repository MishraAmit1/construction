// src/app/(site)/team/page.tsx  (or leadership/page.tsx - jo bhi tera route ho)
import TeamPage from '@/components/sections/leadershipPage';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Our Leadership Team - Experienced Infrastructure Professionals',
    description: 'Meet the leadership team at A&T Infracon with decades of experience in civil engineering, road construction, and infrastructure development across challenging terrains.',
    keywords: 'A&T Infracon leadership, construction company team, civil engineering experts, infrastructure management team, experienced contractors',
    openGraph: {
        title: 'Leadership Team - A&T Infracon',
        description: 'Experienced professionals leading infrastructure excellence',
        url: 'https://ant-silk.vercel.app/team',
        images: [{ url: '/images/Careers1.webp', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://ant-silk.vercel.app/team' },
};

// Schema 1: WebPage
const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Leadership Team",
    "description": "Meet the experienced leadership team at A&T Infracon",
    "url": "https://ant-silk.vercel.app/team"
};

// Schema 2: Organization with Team Members
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "A&T Infracon Pvt. Ltd.",
    "url": "https://ant-silk.vercel.app",
    "employee": [
        {
            "@type": "Person",
            "jobTitle": "Leadership Team",
            "worksFor": {
                "@type": "Organization",
                "name": "A&T Infracon Pvt. Ltd."
            }
        }
    ],
    "description": "Experienced team of civil engineering and infrastructure professionals with 35+ years of collective expertise"
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
            "name": "Leadership",
            "item": "https://ant-silk.vercel.app/team"
        }
    ]
};

export default function LeadershipPageWrapper() {
    return (
        <>
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <TeamPage />
        </>
    );
}