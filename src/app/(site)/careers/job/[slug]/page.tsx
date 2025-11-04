// src/app/(site)/careers/job/[slug]/page.tsx
import { Metadata } from 'next'
import { getJobBySlug } from '@/lib/api/careers'  // ✅ Use slug function
import { notFound } from 'next/navigation'
import JobDetailClient from './JobDetailClient'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    try {
        const job = await getJobBySlug(slug);  // ✅ Direct slug lookup

        if (!job) {
            return { title: 'Job Not Found' };
        }

        const title = `${job.title} - ${job.departments?.name || 'Career'} | A&T Infracon`;
        const description = job.job_overview
            ? job.job_overview.substring(0, 155) + '...'
            : `Join A&T Infracon as ${job.title}.`;

        return {
            title,
            description,
            keywords: `${job.title}, ${job.departments?.name}, infrastructure jobs`,
            openGraph: {
                title,
                description,
                url: `https://ant-silk.vercel.app/careers/job/${slug}`,
                images: [{ url: '/images/Careers1.webp', width: 1200, height: 630 }],
            },
        };
    } catch (error) {
        return { title: 'Job Not Found' };
    }
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const job = await getJobBySlug(slug);  // ✅ Direct slug lookup

    if (!job) {
        notFound();
    }

    return <JobDetailClient
        jobId={job.id}
        jobSlug={slug}  // ✅ Pass slug too
        initialJob={job}
    />;
}