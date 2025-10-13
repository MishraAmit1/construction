import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import { getCategoryBySlug, getCategorySlugs } from "@/lib/api/categories";
import { getProjectsByCategory } from "@/lib/api/projects";
import { notFound } from "next/navigation";
import { SortDropdown } from '@/components/ui/sort-dropdown';
// Force dynamic rendering for query params
export const dynamic = 'force-dynamic';

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
            <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={category.banner_image || category.thumbnail_image || 'https://via.placeholder.com/1920x1080'}
                        alt={category.category_name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-4 sm:mt-6 md:mt-10">
                    <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl text-white">
                        <p className="text-yellow-400 font-thin tracking-widest mb-1 sm:mb-2 
                                     text-[12px] sm:text-[14px] md:text-[16px] uppercase">
                            Markets
                        </p>
                        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] 
                                      leading-[1.05] sm:leading-[1.1] md:leading-[1.15] lg:leading-[100px] 
                                      font-medium font-headline mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                            {category.category_name}
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 
                                     leading-[1.6] sm:leading-[1.7] md:leading-[1.8] lg:leading-[36px] 
                                     text-white/85 sm:text-white/90">
                            {category.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR ---------- */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
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
                                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-md sm:rounded-none overflow-hidden">
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
                        <div className="lg:pl-8 xl:pl-12 py-4 sm:py-6 md:py-8 lg:py-0">
                            {category.hero_heading && (
                                <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] 
                                             leading-[1.2] sm:leading-[1.15] md:leading-[64px] 
                                             font-light text-gray-900 mb-4 sm:mb-6 md:mb-8">
                                    {category.hero_heading}
                                </h2>
                            )}

                            <div className="space-y-4 sm:space-y-5 md:space-y-6 
                                          text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
                                          leading-[1.6] sm:leading-[1.7] md:leading-[1.8] lg:leading-[32px]">
                                {category.hero_paragraphs && category.hero_paragraphs.map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- PROJECTS SECTION WITH WORKING FILTERS ---------- */}
            <section id="projects-section" className="bg-[#edf3f5] py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">

                    {/* CENTERED Heading */}
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] 
                                 font-light text-[#2d3b40] text-center
                                 mb-6 sm:mb-8 md:mb-10">
                        {category.category_name} Projects
                    </h2>

                    {/* WORKING Filters Section */}
                    <div id="filters" className="bg-white rounded-lg p-6 sm:p-8 mb-8 sm:mb-10 shadow-sm scroll-mt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

                            {/* REGIONS Filter (if regions exist) */}
                            {category.regions && category.regions.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold text-gray-700 mb-4 tracking-wide">REGIONS</h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <Link
                                            href={`/markets/${slug}?status=${statusFilter}&sort=${sortFilter}#filters`}
                                            scroll={false}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                                                ${regionFilter === 'all'
                                                    ? 'bg-red-600 text-white'
                                                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                                        >
                                            ALL REGIONS
                                        </Link>
                                        {category.regions.map((region, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/markets/${slug}?status=${statusFilter}&region=${region.toLowerCase()}&sort=${sortFilter}#filters`}
                                                scroll={false}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                                                    ${regionFilter === region.toLowerCase()
                                                        ? 'bg-red-600 text-white'
                                                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                                            >
                                                📍 {region.toUpperCase()}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* STATUS Filter - WORKING */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-700 mb-4 tracking-wide">STATUS</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <Link
                                        href={`/markets/${slug}?region=${regionFilter}&sort=${sortFilter}#filters`}
                                        scroll={false}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                                            ${statusFilter === 'all'
                                                ? 'bg-red-600 text-white'
                                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                                    >
                                        ALL STATUS
                                    </Link>
                                    <Link
                                        href={`/markets/${slug}?status=ongoing&region=${regionFilter}&sort=${sortFilter}#filters`}
                                        scroll={false}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                                            ${statusFilter === 'ongoing'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                                    >
                                        🔵 ONGOING
                                    </Link>
                                    <Link
                                        href={`/markets/${slug}?status=completed&region=${regionFilter}&sort=${sortFilter}#filters`}
                                        scroll={false}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                                            ${statusFilter === 'completed'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                                    >
                                        ✅ COMPLETED
                                    </Link>
                                    <Link
                                        href={`/markets/${slug}?status=upcoming&region=${regionFilter}&sort=${sortFilter}#filters`}
                                        scroll={false}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                                            ${statusFilter === 'upcoming'
                                                ? 'bg-yellow-600 text-white'
                                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                                    >
                                        ⏳ UPCOMING
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Count and WORKING Sort */}
                    {/* Results Count and SORT SELECT */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                        <div className="text-gray-600 text-sm sm:text-base font-medium">
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
                                    <div className="p-4 sm:p-5 md:p-6 bg-white">
                                        {project.location && (
                                            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">
                                                📍 {project.location}
                                            </p>
                                        )}
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                                            {project.project_name}
                                        </h3>
                                        {project.tagline && (
                                            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
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
            <section className="bg-[#edf3f5] py-12 sm:py-16 md:py-20 lg:py-24 text-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
                                 font-light text-[#2d3b40] mb-3 sm:mb-4 md:mb-6">
                        Connect with A&T Team
                    </h2>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
                                 text-[#2d3b40]/80 leading-relaxed 
                                 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl 
                                 mx-auto mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0">
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