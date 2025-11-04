// app/services/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { serviceDetailsData } from "@/lib/data"; // ✅ IMPORT STATIC DATA
import { atServices } from "@/lib/data";



// Get service data
async function getServiceData(slug: string) {
    // Import service details data
    const { serviceDetailsData } = await import("@/lib/data");
    return serviceDetailsData[slug];
}

interface ServiceDetailPageProps {
    params: {
        slug: string;
    };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    const { slug } = params;
    const serviceData = await getServiceData(slug);

    if (!serviceData) {
        notFound();
    }

    return <ServiceDetailClient service={serviceData} />;
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceDetailsData[slug]; // ✅ Get data from object

    if (!service) {
        return { title: 'Service Not Found' };
    }

    const title = `${service.title} Services | A&T Infracon`;
    const description = service.description || `Expert ${service.title} services by A&T Infracon.`;

    return {
        title,
        description,
        keywords: `${service.title}, civil engineering, infrastructure, ${service.capabilities[0]}`,
        openGraph: {
            title: `${service.title} | A&T Infracon`,
            description: service.tagline,
            url: `https://ant-silk.vercel.app/services/${slug}`,
            images: [{ url: service.heroImage || '/images/og-image.jpg' }],
        },
        alternates: { canonical: `https://ant-silk.vercel.app/services/${slug}` },
    };
}
// Generate static params for all services
export async function generateStaticParams() {
    return atServices.map((service) => ({
        slug: service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, ''),
    }));
}