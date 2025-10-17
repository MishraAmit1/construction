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
            {/* ---------- HERO SECTION (RESPONSIVE FIXED) ---------- */}
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] py-12 flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src={
                            project.banner_image ||
                            project.thumbnail_image ||
                            "https://via.placeholder.com/1920x1080"
                        }
                        alt={project.project_name}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-10">
                    <div className="max-w-full lg:max-w-4xl text-white">
                        {/* Subtitle */}
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 sm:mb-3 
                   text-sm sm:text-base md:text-[16px] uppercase">
                            Projects
                        </p>

                        {/* Main project name */}
                        <h1
                            className="text-white font-normal font-apfel2 mb-4 md:mb-6 
                   text-[clamp(2rem,6.3vw,6.3rem)] leading-[1.05] [text-wrap:balance]"
                        >
                            {project.project_name}
                        </h1>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR ---------- */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-3 sm:py-4">

                    <nav className="font-necto  flex flex-wrap items-center text-xs sm:text-sm text-gray-700 ">
                        <Link href="/" className="hover:text-red-600 transition-colors">
                            HOME
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <Link href="/projects" className="hover:text-red-600 transition-colors">
                            PROJECTS
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase truncate max-w-[200px] sm:max-w-none">
                            {project.project_name}
                        </span>
                    </nav>
                </div>
            </div>

            {/* ---------- META INFO SECTION ---------- */}
            <div className="py-4 sm:py-6 border-b bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 
                            grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 
                            text-gray-700 text-xs sm:text-sm">
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="bg-orange-100 text-orange-700 
                                   px-2 sm:px-3 py-1 rounded-full 
                                   flex items-center">
                            <Zap className="h-4 w-4 mr-1.5 sm:mr-2" />
                            <span className="font-semibold font-neuhas2 uppercase tracking-wider">{project.category_name || 'Project'}</span>
                        </span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start font-apfe2 text-[20px] leading-[30px]">
                        <MapPin className="h-4 w-4 mr-1.5 sm:mr-2 text-red-600" />
                        <span>{project.location || 'India'}</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start font-apfe2 text-[20px] leading-[30px]">
                        <Clock className="h-4 w-4 mr-1.5 sm:mr-2 text-red-600" />
                        <span>{project.project_status === 'ongoing' ? 'Active' : project.project_status === 'completed' ? 'Completed' : 'Upcoming'}</span>
                    </div>
                </div>
            </div>

            {/* ---------- SECTION 1: DESCRIPTION ---------- */}
            {project.section1_heading && (
                <section className="relative py-12 sm:py-16 md:py-20 text-gray-800 bg-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_#0000000a_1px,_transparent_1px)] [background-size:16px_16px]" />
                    <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-72">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2
                                 font-normal leading-tight mb-4 sm:mb-6">
                            {project.section1_heading}
                        </h1>
                        {project.section1_paragraphs && project.section1_paragraphs.map((para, idx) => (
                            <p key={idx} className="text-gray-600 mb-3 sm:mb-4 text-[14px] sm:text-[16px] md:text-[22px] leading-[30px] font-neuhas">
                                {para}
                            </p>
                        ))}
                    </div>
                </section>
            )}

            {/* ---------- SECTION 2: ABOUT THE PROJECT ---------- */}
            {/* ---------- SECTION 2: ABOUT THE PROJECT ---------- */}
            {project.section2_heading && (
                <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-32 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-8 xl:gap-16">
                        {/* LEFT IMAGE */}
                        {project.section2_image && (
                            <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
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
                        <div className="px-4 sm:px-6 md:px-8 lg:pr-12 xl:pr-16 py-6 sm:py-8 md:py-10 lg:py-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2
                              font-normal leading-tight mb-4 sm:mb-6">
                                {project.section2_heading}
                            </h2>
                            {project.section2_paragraphs && project.section2_paragraphs.map((para, idx) => (
                                <p key={idx} className="text-gray-600 mb-3 sm:mb-4 
                                           text-[14px] sm:text-[16px] md:text-[22px] 
                                           leading-[30px] font-neuhas">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ---------- SECTION 3: WORK WITH US ---------- */}
            {project.section3_heading && (
                <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 xl:mt-32 mb-8 sm:mb-12 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center gap-6 sm:gap-8 md:gap-12">
                        {/* LEFT TEXT */}
                        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32 py-6 sm:py-8 md:py-10 lg:py-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2
                              font-normal leading-tight mb-4 sm:mb-6 md:mb-8 
                              lg:-mt-16 xl:-mt-24">
                                {project.section3_heading}
                            </h2>
                            {project.section3_paragraphs && project.section3_paragraphs.map((para, idx) => (
                                <p key={idx} className="text-gray-600 mb-4 sm:mb-5 md:mb-6 
                                           text-[14px] sm:text-[16px] md:text-[22px] 
                                           leading-[30px] font-neuhas">
                                    {para}
                                </p>
                            ))}

                            <div className="mt-4 sm:mt-6 md:mt-8">
                                <Link
                                    href="/approach"
                                    className={cn(
                                        'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                        'px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold',
                                        'bg-white text-red-600 transition-all duration-500 ease-out',
                                        'min-h-[44px] sm:min-h-[48px] md:min-h-[56px]',
                                        'w-full sm:w-auto'
                                    )}
                                >
                                    <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                                    <span className="relative z-10 flex items-center">
                                        <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10">
                                            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                        </span>
                                        <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                                            Learn more about Life at A&T
                                        </span>
                                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 opacity-0 transition-all duration-500 group-hover:w-4 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        {project.section3_image && (
                            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[390px] px-4 sm:px-6 md:px-8 lg:px-0">
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

            {/* ---------- SECTION 5 (MOVED UP - STYLED LIKE SECTION 2) ---------- */}
            {(project.section5_heading || project.section5_image) && (
                <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-32 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-8 xl:gap-16">
                        {/* LEFT IMAGE (like Section 2) */}
                        {project.section5_image && (
                            <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
                                <Image
                                    src={project.section5_image}
                                    alt={project.section5_image_alt || project.section5_heading || 'Project Image'}
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        )}

                        {/* RIGHT TEXT (like Section 2) */}
                        <div className="px-4 sm:px-6 md:px-8 lg:pr-12 xl:pr-16 py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
                            {project.section5_heading && (
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2
                                  font-normal leading-tight mb-4 sm:mb-6">
                                    {project.section5_heading}
                                </h2>
                            )}

                            {project.section5_paragraph && (
                                <p className="text-gray-600 mb-3 sm:mb-4 
                                 text-[14px] sm:text-[16px] md:text-[22px] 
                                 leading-[30px] font-neuhas">
                                    {project.section5_paragraph}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {project.section4_heading && (
                <section className="relative bg-white py-16 sm:py-20 md:py-24 text-gray-800 overflow-hidden">
                    {/* dotted background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_#0000000a_1px,_transparent_1px)] [background-size:16px_16px]" />

                    <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-72">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2
                          font-normal leading-tight mb-4 sm:mb-6 md:mb-8">
                            {project.section4_heading}
                        </h2>

                        {project.section4_paragraphs && project.section4_paragraphs.map((para, idx) => (
                            <p key={idx} className="text-gray-600 mb-6 sm:mb-8 md:mb-10 
                                       text-[14px] sm:text-[16px] md:text-[22px] 
                                       leading-[30px] font-neuhas">
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

            {/* ---------- RELATED PROJECTS SECTION ---------- */}
            {relatedProjects.length > 0 && (
                <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                                      font-normal text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                            Related Projects
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            {relatedProjects.map((relProject) => (
                                <Link
                                    key={relProject.project_id}
                                    href={`/projects/${relProject.project_slug}`}
                                    className="group bg-white rounded-lg overflow-hidden transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden">
                                        <Image
                                            src={relProject.thumbnail_image || 'https://via.placeholder.com/600x400'}
                                            alt={relProject.project_name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        {/* Status Badge */}
                                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                            <span className={cn(
                                                "px-2 sm:px-3 py-1 rounded-full text-xs font-semibold",
                                                relProject.project_status === 'completed' ? 'bg-green-100 text-green-700' :
                                                    relProject.project_status === 'ongoing' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                            )}>
                                                {relProject.project_status.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 sm:p-5 md:p-6">
                                        {relProject.location && (
                                            <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                {relProject.location}
                                            </div>
                                        )}

                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 
                                                     group-hover:text-red-600 transition-colors line-clamp-2">
                                            {relProject.project_name}
                                        </h3>

                                        {relProject.tagline && (
                                            <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 mb-3 sm:mb-4">
                                                {relProject.tagline}
                                            </p>
                                        )}

                                        {/* View Project Link */}
                                        <div className="flex items-center text-red-600 font-semibold text-xs sm:text-sm 
                                                      group-hover:gap-2 transition-all">
                                            <span>View Project</span>
                                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 -ml-4 group-hover:opacity-100 
                                                                 group-hover:ml-0 transition-all duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Projects Link */}
                        <div className="text-center mt-6 sm:mt-8 md:mt-12">
                            <Link
                                href="/projects"
                                className={cn(
                                    'inline-flex items-center justify-center',
                                    'px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4',
                                    'bg-red-600 text-white font-semibold rounded-full',
                                    'hover:bg-red-700 transition-colors',
                                    'text-sm sm:text-base'
                                )}
                            >
                                View All Projects
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}