export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle, Earth } from "lucide-react";
import { getCategoryBySlug, getCategorySlugs } from "@/lib/api/categories";
import { getProjectsByCategory } from "@/lib/api/projects";
import { notFound } from "next/navigation";
import { SortDropdown } from '@/components/ui/sort-dropdown';
import { CategoryFilters } from "@/components/category-filters";
// Force dynamic rendering for query params


// Generate static params
export async function generateStaticParams() {
    const slugs = await getCategorySlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);

    if (!category) return {};

    return {
        title: category.meta_title || category.category_name,
        description: category.meta_description || category.tagline,
    };
}

// Main Component with searchParams support
export default async function CategoryPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { slug } = await params;
    const filters = await searchParams;

    // Get filter values
    const statusFilter = typeof filters.status === 'string' ? filters.status : 'all';
    const regionFilter = typeof filters.region === 'string' ? filters.region : 'all';
    const sortFilter = typeof filters.sort === 'string' ? filters.sort : 'newest';

    // Fetch category
    const category = await getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    // Fetch all projects for this category
    let projects = await getProjectsByCategory(category.category_id);

    // Apply STATUS filter
    if (statusFilter !== 'all') {
        projects = projects.filter(p => {
            if (statusFilter === 'active') {
                // Active means ongoing
                return p.project_status === 'ongoing';
            }
            return p.project_status === statusFilter;
        });
    }

    // Apply REGION filter
    if (regionFilter !== 'all') {
        projects = projects.filter(p =>
            p.location?.toLowerCase().includes(regionFilter.toLowerCase())
        );
    }

    // Apply SORT
    if (sortFilter === 'oldest') {
        projects.sort((a, b) => a.project_id - b.project_id);
    } else if (sortFilter === 'alphabetical') {
        projects.sort((a, b) => a.project_name.localeCompare(b.project_name));
    }
    // Default 'newest' is already sorted from DB

    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] py-12 flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src={
                            category.banner_image ||
                            category.thumbnail_image ||
                            "https://via.placeholder.com/1920x1080"
                        }
                        alt={category.category_name}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs md:max-w-6xl text-white">
                        {/* Section label */}
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm md:text-[16px] uppercase">
                            Markets
                        </p>

                        {/* Adaptive main heading */}
                        <h1
                            className="text-white font-normal font-apfel2 mb-4 md:mb-6 
                  text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05] [text-wrap:balance]"
                        >
                            {category.category_name}
                        </h1>

                        {/* Supporting tagline / description */}
                        <p
                            className="font-neuhas text-[14px] sm:text-[16px] md:text-[24px]
                   leading-[1.6] md:leading-[36px] font-medium 
                   text-white/85 sm:text-white/90 md:max-w-4xl"
                        >
                            {category.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR ---------- */}
            <div className="bg-[#f2f5f7] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">HOME</Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <Link href="/projects" className="hover:text-red-600">PROJECTS</Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <Link href="/markets" className="hover:text-red-600">MARKETS</Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">
                            {category.category_name}
                        </span>
                    </nav>
                </div>
            </div>

            {/* ---------- HERO CONTENT SECTION (Images + Description) ---------- */}
            <section className="bg-white py-10 sm:py-14 md:py-20">
                <div className="relative container mx-auto px-4 sm:px-6 md:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start">
                        {/* Left Side - Images Grid */}
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 mx-0 lg:-ml-[calc(2vw)] xl:-ml-[calc(4vw)] p-0">
                            {/* Top Large Image */}
                            {category.hero_image_1 && (
                                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
                                    <Image
                                        src={category.hero_image_1}
                                        alt={category.hero_image_1_alt || category.category_name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            )}

                            {/* Bottom Two Images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                {category.hero_image_2 && (
                                    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-md sm:rounded-none overflow-hidden">
                                        <Image
                                            src={category.hero_image_2}
                                            alt={category.hero_image_2_alt || category.category_name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, 25vw"
                                        />
                                    </div>
                                )}

                                {category.hero_image_3 && (
                                    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-md sm:rounded-none overflow-hidden">
                                        <Image
                                            src={category.hero_image_3}
                                            alt={category.hero_image_3_alt || category.category_name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, 25vw"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="lg:pl-8 xl:pl-12 md:px-10 py-4 sm:py-6 md:py-8 lg:py-0">
                            {category.hero_heading && (
                                <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-apfel2
                                             leading-[1.2] sm:leading-[1.15] md:leading-[64px] 
                                             font-light text-gray-900 mb-4 sm:mb-6 md:mb-8">
                                    {category.hero_heading}
                                </h2>
                            )}

                            <div className="space-y-4 sm:space-y-5 md:space-y-6 
                                          text-gray-700 text-[15px] md:text-[20px] font-neuhas font-medium
                                          leading-[1.6] md:leading-[30px]">
                                {category.hero_paragraphs && category.hero_paragraphs.map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- PROJECTS SECTION WITH WORKING FILTERS ---------- */}
            {/* ---------- PROJECTS SECTION WITH WORKING FILTERS ---------- */}
            <section id="projects-section" className="bg-white py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">

                    {/* CENTERED Heading */}
                    <h2 className="text-[28px] md:text-[64px] 
         font-light text-[#2d3b40] text-center
         mb-6 sm:mb-8 md:mb-10">
                        {category.category_name} Projects
                    </h2>

                    {/* WORKING Filters Section */}
                    <div id="filters" className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 shadow-sm scroll-mt-24">
                        <CategoryFilters
                            slug={slug}
                            regions={category.regions}
                            statusFilter={statusFilter}
                            regionFilter={regionFilter}
                            sortFilter={sortFilter}
                        />
                    </div>

                    {/* Results Count and SORT SELECT */}
                    <div className="font-necto flex flex-row sm:flex-row justify-center items-center md:justify-between sm:items-center mb-6 sm:mb-8 gap-8">
                        <div className="text-gray-600 text-sm md:text-[14px] leading-[21px] font-medium">
                            {projects.length} RESULTS
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600 text-sm">SORT:</span>
                            <SortDropdown
                                currentSort={sortFilter}
                                slug={slug}
                                statusFilter={statusFilter}
                                regionFilter={regionFilter}
                            />
                            <hr className="border-gray-300" />
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <Link
                                    key={project.project_id}
                                    href={`/projects/${project.project_slug}`}
                                    className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-shadow"
                                >
                                    <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] w-full">
                                        <Image
                                            src={project.thumbnail_image || 'https://via.placeholder.com/600x400'}
                                            alt={project.project_name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-4 sm:p-5 md:p-6 bg-white font-neuhas">
                                        {project.location && (
                                            <p className="text-xs md:text-[15px] leading-[30px] text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">
                                                {project.location}
                                            </p>
                                        )}
                                        <h3 className="text-base sm:text-lg md:text-[24px] font-medium text-gray-800 mb-1 sm:mb-2 font-apfel2 uppercase">
                                            {project.project_name}
                                        </h3>
                                        {project.tagline && (
                                            <p className="font-neuhas text-gray-600 text-xs sm:text-lg md:text-[18px] line-clamp-2 sm:line-clamp-3">
                                                {project.tagline}
                                            </p>
                                        )}
                                        <span className={`inline-block mt-2 sm:mt-3 md:mt-4 px-2 sm:px-3 py-1 
                                text-xs font-semibold rounded-full
                                ${project.project_status === 'completed' ? 'bg-green-100 text-green-600' :
                                                project.project_status === 'ongoing' ? 'bg-blue-100 text-blue-600' :
                                                    'bg-yellow-100 text-yellow-600'}`}>
                                            {project.project_status.toUpperCase()}
                                        </span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500 text-lg">No projects found with selected filters.</p>
                                <Link
                                    href={`/markets/${slug}#filters`}
                                    scroll={false}
                                    className="inline-block mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                                >
                                    Clear Filters
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ---------- CONNECT WITH A&T SECTION ---------- */}
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 text-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-[28px] sm:text-[64px] md:leading-[70.4px] font-apfel2 
                                 font-light text-[#2d3b40] mb-3 sm:mb-4 md:mb-6">
                        Connect with the <br />A&T Team
                    </h2>
                    <p className="text-[16px] md:text-[20px] 
                                 text-[#2d3b40]/80 leading-[30px] 
                                 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl 
                                 mx-auto mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0 font-neuhas">
                        Whether you're seeking a partner for your project, have a media inquiry or are interested in a job
                        opportunity, reach out to our A&T colleagues around the world for direct support. Our team
                        is ready to assist and provide the expertise you need.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 
                                 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors
                                 text-sm sm:text-base min-h-[40px] sm:min-h-[44px] md:min-h-[48px]"
                    >
                        <ArrowRightCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}