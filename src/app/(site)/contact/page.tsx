// src/app/(site)/contact/page.tsx
import ContactPage from '@/components/sections/contactPage';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Contact Us -| A&T Infracon',
    description: 'Contact A&T Infracon for road & border infrastructure projects. Ahmedabad & Barmer offices. Call +91-79357-03085 or email atinfracon@gmail.com',
    keywords: 'contact A&T Infracon, construction company ahmedabad contact, infrastructure contractor contact, civil engineering enquiry, project quote request',
    openGraph: {
        title: 'Contact A&T Infracon - Infrastructure Enquiries',
        description: 'Get in touch for your next infrastructure project',
        url: 'https://ant-silk.vercel.app/contact',
        images: [{ url: '/images/contactbanner.webp', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://ant-silk.vercel.app/contact' },
};

// Schema 1: LocalBusiness (Most Important for Contact Page)
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "A&T Infracon Pvt. Ltd.",
    "image": "https://ant-silk.vercel.app/images/logo.png",
    "url": "https://ant-silk.vercel.app",
    "telephone": "+91-79357-03085",
    "email": "atinfracon@gmail.com",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
    },
    "priceRange": "₹₹₹",
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

// Schema 2: ContactPage
const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact A&T Infracon",
    "description": "Get in touch for infrastructure and construction projects",
    "url": "https://ant-silk.vercel.app/contact",
    "mainEntity": {
        "@type": "Organization",
        "name": "A&T Infracon Pvt. Ltd.",
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+91-79357-03085",
                "contactType": "customer service",
                "email": "atinfracon@gmail.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Gujarati"]
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
            "item": "https://ant-silk.vercel.app"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact Us",
            "item": "https://ant-silk.vercel.app/contact"
        }
    ]
};

export default function ContactPageWrapper() {
    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="contact-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <ContactPage />
        </>
    );
}