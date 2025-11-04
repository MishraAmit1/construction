// src/app/(site)/careers/department/[slug]/page.tsx
import { Metadata } from 'next';
import { getDepartmentBySlug } from '@/lib/api/careers';  // ✅ Use slug function
import { notFound } from 'next/navigation';
import DepartmentJobsClient from './DepartmentJobsClient';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    try {
        const department = await getDepartmentBySlug(slug);  // ✅ Direct slug lookup

        if (!department) {
            return { title: 'Department Not Found' };
        }

        const title = `${department.name} Jobs & Careers | A&T Infracon`;
        const description = department.description
            ? department.description.substring(0, 155) + '...'
            : `Explore ${department.name} career opportunities at A&T Infracon.`;

        return {
            title,
            description,
            keywords: `${department.name} jobs, ${department.name} careers, infrastructure jobs`,
            openGraph: {
                title,
                description,
                url: `https://ant-silk.vercel.app/careers/department/${slug}`,
                images: [{ url: '/images/Careers2.jpg', width: 1200, height: 630 }],
            },
        };
    } catch (error) {
        return { title: 'Department Not Found' };
    }
}

export default async function DepartmentJobsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const department = await getDepartmentBySlug(slug);  // ✅ Direct slug lookup

    if (!department) {
        notFound();
    }

    return <DepartmentJobsClient
        departmentId={department.id}
        departmentSlug={slug}  // ✅ Pass slug too
        initialDepartment={department}
    />;
}