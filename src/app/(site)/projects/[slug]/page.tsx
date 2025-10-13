import { cn } from "@/lib/utils";
import { ArrowRight, MapPin, Clock, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getProjectSlugs, getRelatedProjects } from "@/lib/api/projects";
import { notFound } from "next/navigation";

// Generate static params
export async function generateStaticParams() {
    const slugs = await getProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) return {};

    return {
        title: project.meta_title || project.project_name,
        description: project.meta_description || project.tagline,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }
    let relatedProjects: any[] = [];
    if (project.related_projects && Array.isArray(project.related_projects)) {
        relatedProjects = await getRelatedProjects(project.related_projects);
    }
    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] sm:min-h-[480px] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={project.banner_image || project.thumbnail_image || 'https://via.placeholder.com/1920x1080'}
                        alt={project.project_name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-8 sm:mt-10">
                    <div className="max-w-full lg:max-w-3xl text-white">
                        <p className="text-yellow-400 font-thin tracking-widest mb-2 text-[14px] sm:text-[16px] uppercase">
                            PROJECTS
                        </p>
                        <h1 className="text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px] 
                                     leading-[1.1] sm:leading-[1.2] md:leading-[1.1] 
                                     font-medium font-headline mb-4 sm:mb-6">
                            {project.project_name}
                        </h1>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
                                    leading-[1.6] sm:leading-[1.7] md:leading-[1.8] 
                                    text-white/90">
                            {project.tagline || project.project_name}
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR ---------- */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">
                            HOME
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <Link href="/projects" className="hover:text-red-600">
                            PROJECTS
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">
                            {project.project_name}
                        </span>
                    </nav>
                </div>
            </div>

            {/* ---------- META INFO SECTION ---------- */}
            <div className="py-4 sm:py-6 border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 
                                grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 
                                text-gray-700 text-xs sm:text-sm">
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="bg-orange-100 text-orange-700 
                                       px-2 sm:px-3 py-1 rounded-full 
                                       flex items-center">
                            <Zap className="h-4 w-4 mr-1.5 sm:mr-2" />
                            <span className="font-semibold">{project.category_name || 'Project'}</span>
                        </span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <MapPin className="h-4 w-4 mr-1.5 sm:mr-2 text-red-600" />
                        <span>{project.location || 'India'}</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <Clock className="h-4 w-4 mr-1.5 sm:mr-2 text-red-600" />
                        <span>{project.project_status === 'ongoing' ? 'Active' : project.project_status === 'completed' ? 'Completed' : 'Upcoming'}</span>
                    </div>
                </div>
            </div>

            {/* ---------- DESCRIPTION SECTION ---------- */}
            {project.section1_heading && (
                <section className="relative py-12 sm:py-16 md:py-20 text-gray-800">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_#0000000a_1px,_transparent_1px)] [background-size:16px_16px]" />
                    <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-72">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                     font-normal leading-tight mb-4 sm:mb-6">
                            {project.section1_heading}
                        </h1>

                        {project.section1_paragraphs && project.section1_paragraphs.map((para, idx) => (
                            <p key={idx} className="text-gray-600 mb-3 sm:mb-4 text-[14px] sm:text-[16px] md:text-[18px]">
                                {para}
                            </p>
                        ))}
                    </div>
                </section>
            )}

            {/* ---------- ABOUT THE PROJECT ---------- */}
            {project.section2_heading && (
                <section className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                        {/* LEFT IMAGE FULL‑WIDTH */}
                        {project.section2_image && (
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                                <Image
                                    src={project.section2_image}
                                    alt={project.section2_image_alt || project.section2_heading}
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        )}

                        {/* RIGHT TEXT */}
                        <div className="px-4 sm:px-6 md:px-8 lg:pr-16 py-8 sm:py-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                          font-normal mb-4 sm:mb-6">
                                {project.section2_heading}
                            </h2>
                            {project.section2_paragraphs && project.section2_paragraphs.map((para, idx) => (
                                <p key={idx} className="text-gray-600 mb-3 sm:mb-4 
                                             text-[14px] sm:text-[16px] md:text-[18px]">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ---------- WORK WITH US ---------- */}
            {project.section3_heading && (
                <section className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center gap-8 sm:gap-12 md:gap-16">
                        {/* LEFT TEXT (wider) */}
                        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                          font-normal mb-6 sm:mb-8 
                                          -mt-8 sm:-mt-16 md:-mt-24 lg:-mt-28">
                                {project.section3_heading}
                            </h2>
                            {project.section3_paragraphs && project.section3_paragraphs.map((para, idx) => (
                                <p key={idx} className="text-gray-600 mb-4 sm:mb-6 
                                             text-[14px] sm:text-[16px] md:text-[18px] 
                                             leading-[1.6] sm:leading-[1.7]">
                                    {para}
                                </p>
                            ))}

                            <div className="mt-6 sm:mt-8">
                                <Link
                                    href="/about"
                                    className={cn(
                                        'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                        'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold',
                                        'bg-white text-red-600 transition-all duration-500 ease-out',
                                        'min-h-[48px] sm:min-h-[56px]',
                                        'w-full sm:w-auto'
                                    )}
                                >
                                    <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                                    <span className="relative z-10 flex items-center">
                                        <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-8 w-8 sm:h-10 sm:w-10">
                                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </span>
                                        <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                                            Learn more about Life at A&T
                                        </span>
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT IMAGE (narrower) */}
                        {project.section3_image && (
                            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[390px]">
                                <Image
                                    src={project.section3_image}
                                    alt={project.section3_image_alt || project.section3_heading}
                                    width={900}
                                    height={507}
                                    className="w-full h-full object-cover object-center rounded-md"
                                />
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ---------- REGISTER TO BE A SUPPLIER ---------- */}
            {project.section4_heading && (
                <section className="relative bg-white py-16 sm:py-20 md:py-24 text-gray-800 overflow-hidden">
                    {/* dotted background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_#0000000a_1px,_transparent_1px)] [background-size:16px_16px]" />

                    <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-72">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                      font-normal leading-tight mb-4 sm:mb-6 md:mb-8">
                            {project.section4_heading}
                        </h2>

                        {project.section4_paragraphs && project.section4_paragraphs.map((para, idx) => (
                            <p key={idx} className="text-gray-600 mb-6 sm:mb-8 md:mb-10 
                                         text-[14px] sm:text-[16px] md:text-[18px] 
                                         leading-[1.6] sm:leading-[1.7]">
                                {para}
                            </p>
                        ))}

                        <Link
                            href="#"
                            className={cn(
                                'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold',
                                'bg-white text-red-600 transition-all duration-500 ease-out',
                                'min-h-[48px] sm:min-h-[56px]',
                                'w-full sm:w-auto'
                            )}
                        >
                            <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                            <span className="relative z-10 flex items-center">
                                <span className="flex items-center justify-center rounded-full -rotate-45 bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-8 w-8 sm:h-10 sm:w-10">
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                </span>
                                <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                                    Supplier Registration Portal
                                </span>
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 -rotate-45 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                            </span>
                        </Link>
                    </div>
                </section>
            )}

            {relatedProjects.length > 0 && (
                <section className="relative bg-gray-50 py-16 sm:py-20 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                      font-normal text-center mb-8 sm:mb-12 md:mb-16">
                            Related Projects
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {relatedProjects.map((relProject) => (
                                <Link
                                    key={relProject.project_id}
                                    href={`/projects/${relProject.project_slug}`}
                                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden">
                                        <Image
                                            src={relProject.thumbnail_image || 'https://via.placeholder.com/600x400'}
                                            alt={relProject.project_name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-xs font-semibold",
                                                relProject.project_status === 'completed' ? 'bg-green-100 text-green-700' :
                                                    relProject.project_status === 'ongoing' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                            )}>
                                                {relProject.project_status.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 sm:p-6">
                                        {relProject.location && (
                                            <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                {relProject.location}
                                            </div>
                                        )}

                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 
                                                     group-hover:text-red-600 transition-colors line-clamp-2">
                                            {relProject.project_name}
                                        </h3>

                                        {relProject.tagline && (
                                            <p className="text-sm sm:text-base text-gray-600 line-clamp-2 mb-4">
                                                {relProject.tagline}
                                            </p>
                                        )}

                                        {/* View Project Link */}
                                        <div className="flex items-center text-red-600 font-semibold text-sm 
                                                      group-hover:gap-2 transition-all">
                                            <span>View Project</span>
                                            <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 
                                                                 group-hover:ml-0 transition-all duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Projects Link */}
                        <div className="text-center mt-8 sm:mt-12">
                            <Link
                                href="/projects"
                                className={cn(
                                    'inline-flex items-center justify-center',
                                    'px-6 sm:px-8 py-3 sm:py-4',
                                    'bg-red-600 text-white font-semibold rounded-full',
                                    'hover:bg-red-700 transition-colors',
                                    'text-sm sm:text-base'
                                )}
                            >
                                View All Projects
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}