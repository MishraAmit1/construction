// src/app/(site)/blog/page.tsx
import { Metadata } from 'next';
import Script from 'next/script';
import BlogPage from '@/components/sections/blogPage';

export const metadata: Metadata = {
    title: 'Blog - Infrastructure Insights & Construction Updates | A&T Infracon',
    description: 'Latest insights on infrastructure development, construction technology, project updates, and industry trends from A&T Infracon. Expert perspectives on road construction, border infrastructure, and civil engineering.',
    keywords: 'infrastructure blog, construction insights, civil engineering articles, project updates, construction technology, infrastructure development news',
    openGraph: {
        title: 'Blog - A&T Infracon Insights & Updates',
        description: 'Expert insights on infrastructure development and construction',
        url: 'https://ant-silk.vercel.app/blog',
        images: [{ url: '/images/hero.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: 'https://ant-silk.vercel.app/blog' },
    robots: {
        index: true,
        follow: true,
    },
};

// Schema 1: Blog Schema
const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "A&T Infracon Blog",
    "description": "Infrastructure insights, construction updates, and industry trends",
    "url": "https://ant-silk.vercel.app/blog",
    "publisher": {
        "@type": "Organization",
        "name": "A&T Infracon Pvt. Ltd.",
        "logo": {
            "@type": "ImageObject",
            "url": "https://ant-silk.vercel.app/images/logo.png"
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
            "item": "https://ant-silk.vercel.app"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://ant-silk.vercel.app/blog"
        }
    ]
};

export default function BlogPageWrapper() {
    return (
        <>
            <Script
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BlogPage />
        </>
    );
}