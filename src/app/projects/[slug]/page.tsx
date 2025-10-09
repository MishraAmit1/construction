import { demoProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = demoProjects.find(
        (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === params.slug
    );
    if (!project) return <div className="p-10">Project not found</div>;

    return (
        <section className="py-16">
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl mb-16">
                <Image
                    src={project.image.imageUrl}
                    alt={project.image.description || project.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white">
                        {project.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="text-yellow-500 uppercase text-sm font-semibold mb-4">
                    {project.location}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    {project.description}
                </p>
                <Link
                    href={`/markets/${project.market.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="inline-block text-red-600 font-semibold hover:underline"
                >
                    ← Back to {project.market}
                </Link>
            </div>
        </section>
    );
}