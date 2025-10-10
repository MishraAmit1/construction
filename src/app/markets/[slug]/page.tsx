import { marketsData, demoProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const market = marketsData.find(
        (m) => m.key.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
    );
    if (!market) return <div className="p-10">Market not found</div>;

    const projects = demoProjects.filter((p) => p.market === market.key);

    return (
        <>
            {/* ---------- HERO SECTION - RESPONSIVE ---------- */}
            <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[320px] sm:min-h-[400px] md:min-h-[480px] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={market.hero.imageUrl}
                        alt={market.hero.alt}
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
                                     text-[12px] sm:text-[14px] md:text-[16px] 
                                     leading-[20px] sm:leading-[24px] md:leading-[30px] uppercase">
                            Markets
                        </p>
                        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] 
                                      leading-[1.05] sm:leading-[1.1] md:leading-[1.15] lg:leading-[100px] 
                                      font-medium font-headline 
                                      mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                            {market.title}
                        </h1>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 
                                     leading-[1.6] sm:leading-[1.7] md:leading-[1.8] lg:leading-[36px] 
                                     text-white/85 sm:text-white/90">
                            {market.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR - RESPONSIVE ---------- */}
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
                            {market.title}
                        </span>
                    </nav>
                </div>
            </div>

            {/* ---------- EXPANDING ENERGY ACCESS SECTION - RESPONSIVE ---------- */}
            <section className="bg-white py-10 sm:py-14 md:py-20">
                <div className="relative container mx-auto px-4 sm:px-6 md:px-0">  {/* Responsive padding */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start">
                        {/* Left Side - Images Grid (responsive) */}
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 mx-0 lg:-ml-[calc(2vw)] xl:-ml-[calc(4vw)] p-0">
                            {/* Top Large Image - Responsive height */}
                            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-md sm:rounded-none overflow-hidden">
                                <Image
                                    src="https://www.bechtel.com/wp-content/uploads/2024/11/angola-lng-140734-1024x682.webp"
                                    alt="LNG facility construction"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Two Images - Responsive grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-md sm:rounded-none overflow-hidden">
                                    <Image
                                        src="https://www.bechtel.com/wp-content/uploads/2024/11/propane-dehydrogenation-ppt-133359-768x1024.webp"
                                        alt="Industrial equipment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-md sm:rounded-none overflow-hidden">
                                    <Image
                                        src="https://www.bechtel.com/wp-content/uploads/2024/11/sabine-pass-lng-147318-614x1024.webp"
                                        alt="LNG storage facility"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Text Content (responsive) */}
                        <div className="lg:pl-8 xl:pl-12 py-4 sm:py-6 md:py-8 lg:py-0">
                            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] 
                                         leading-[1.2] sm:leading-[1.15] md:leading-[64px] 
                                         font-light text-gray-900 
                                         mb-4 sm:mb-6 md:mb-8">
                                Expanding Energy Access
                            </h2>

                            <div className="space-y-4 sm:space-y-5 md:space-y-6 
                                          text-gray-700 
                                          text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
                                          leading-[1.6] sm:leading-[1.7] md:leading-[1.8] lg:leading-[32px]">
                                <p>
                                    A&T is partnering with leading energy companies to shape the future of global
                                    energy. Our teams are developing the infrastructure, technologies, and fuels needed to
                                    drive sustainable energy growth and power worldwide progress.
                                </p>

                                <p>
                                    A robust, resilient, and increasingly lower-carbon energy system is the backbone that
                                    ensures energy security and drives prosperity. We are designing and delivering the
                                    diverse energy assets that are making it a reality. Over the past two decades, A&T
                                    has engineered and built about 30% of the world's liquefied natural gas production
                                    capacity. Increased supplies of LNG have helped to replace other fossil fuels, lower
                                    emissions, and give developing regions greater access to affordable natural gas as their
                                    energy needs rise.
                                </p>

                                <p>
                                    Today, we are also increasingly leading the way in providing solutions to our industrial
                                    and commercial customers in growing markets for blue hydrogen and ammonia, carbon
                                    capture and storage, and lower-emission fuels, while retaining our core competencies in
                                    olefins, refining, and chemicals. We are applying A&T historic expertise and
                                    experience in hydrocarbon technology to innovate and help customers achieve their
                                    optimization and decarbonization goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- ENERGY PROJECTS SECTION - RESPONSIVE ---------- */}
            <section className="bg-[#edf3f5] py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    {/* Heading - Responsive */}
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] 
                                 font-light text-[#2d3b40] 
                                 mb-4 sm:mb-6 md:mb-8">
                        {market.title} Projects
                    </h2>

                    {/* Filters and Sort - Responsive layout */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between 
                                  mb-6 sm:mb-8 md:mb-10 lg:mb-12 
                                  gap-3 sm:gap-4">
                        {/* Region Filter */}
                        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-0">
                            <span className="font-semibold">REGION</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="rounded-full h-8 sm:h-10 text-xs sm:text-sm px-3 sm:px-4">
                                        United States <ChevronDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>United States</DropdownMenuItem>
                                    <DropdownMenuItem>Latin America</DropdownMenuItem>
                                    <DropdownMenuItem>United Kingdom</DropdownMenuItem>
                                    <DropdownMenuItem>Europe</DropdownMenuItem>
                                    <DropdownMenuItem>Canada</DropdownMenuItem>
                                    <DropdownMenuItem>Middle East</DropdownMenuItem>
                                    <DropdownMenuItem>Africa</DropdownMenuItem>
                                    <DropdownMenuItem>Australia</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Status Filter */}
                        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-0">
                            <span className="font-semibold">STATUS</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="rounded-full h-8 sm:h-10 text-xs sm:text-sm px-3 sm:px-4">
                                        Active <ChevronDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Active</DropdownMenuItem>
                                    <DropdownMenuItem>Completed</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="rounded-full h-8 sm:h-10 text-xs sm:text-sm px-3 sm:px-4">
                                        SORT BY: MOST RECENT <ChevronDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Most Recent</DropdownMenuItem>
                                    <DropdownMenuItem>Alphabetical</DropdownMenuItem>
                                    <DropdownMenuItem>Oldest</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>

                    {/* Projects Grid - Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {projects.map((p) => (
                            <Link
                                key={p.id}
                                href={`/projects/${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-md"
                            >
                                <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] w-full">
                                    <Image
                                        src={p.image.imageUrl}
                                        alt={p.image.description || p.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4 sm:p-5 md:p-6 bg-white">
                                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1 sm:mb-2">
                                        {p.location}
                                    </p>
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                                        {p.description}
                                    </p>
                                    <span className="inline-block mt-2 sm:mt-3 md:mt-4 px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                                        ENERGY
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- CONNECT WITH BECHTEL SECTION - RESPONSIVE ---------- */}
            <section className="bg-[#edf3f5] py-12 sm:py-16 md:py-20 lg:py-24 text-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
                                 font-light text-[#2d3b40] 
                                 mb-3 sm:mb-4 md:mb-6">
                        Connect with A&T Team
                    </h2>
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
                                 text-[#2d3b40]/80 leading-relaxed 
                                 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl 
                                 mx-auto 
                                 mb-6 sm:mb-8 md:mb-10 
                                 px-4 sm:px-0">
                        Whether you're seeking a partner for your project, have a media inquiry or are interested in a job
                        opportunity, reach out to our A&T colleagues around the world for direct support. Our team
                        is ready to assist and provide the expertise you need.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 
                                 px-4 sm:px-5 md:px-6 py-2 sm:py-3 
                                 bg-red-600 text-white font-semibold 
                                 rounded-full hover:bg-red-700 transition-colors
                                 text-sm sm:text-base
                                 min-h-[40px] sm:min-h-[44px] md:min-h-[48px]"
                    >
                        <ArrowRightCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}