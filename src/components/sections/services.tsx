"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowRightCircle, ArrowUpRight, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

function CtaButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full
                 px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-red-600 transition-all duration-500 ease-out
                 min-h-[44px] sm:min-h-[48px] md:min-h-[56px]"
        >
            <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center">
                <span
                    className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500
                         group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10"
                >
                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 rotate-45" />
                </span>
                <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                    {children}
                </span>
                <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 opacity-0 rotate-45 transition-all duration-500 group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
            </span>
        </Link>
    );
}

export default function ServicesPage() {
    const [visibleCount, setVisibleCount] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Responsive items per view
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleCount(1);
            } else if (width < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.scrollWidth / services.length;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentIndex(newIndex);
        }
    };

    const scrollToIndex = (direction: 'prev' | 'next') => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / services.length;
            const currentScroll = scrollRef.current.scrollLeft;

            scrollRef.current.scrollTo({
                left: direction === 'next'
                    ? currentScroll + itemWidth
                    : currentScroll - itemWidth,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            return () => scrollElement.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <>
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-[20px] sm:pt-[100px] md:pt-[120px]">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000"
                        alt="Services hero"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75 sm:bg-black/70 md:bg-black/65" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-white">
                        <p className="text-yellow-400 tracking-widest mb-2 sm:mb-3 text-xs sm:text-sm uppercase">
                            APPROACH
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] leading-[1.1] sm:leading-[1.05] font-medium font-apfel2 mb-3 sm:mb-4 md:mb-6">
                            Our Services
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/85 sm:text-white/90 mb-5 sm:mb-6 md:mb-8 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
                            Leveraging over a century of experience, we implement a comprehensive integration strategy — both horizontal and vertical — to deliver optimized EPC solutions that enhance speed, schedules, and performance, while driving continuous improvement across the EPC value chain.
                        </p>
                    </div>
                </div>
            </section>
            {/* BREADCRUMB */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">
                            HOME
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">
                            OUR SERVICES
                        </span>
                    </nav>
                </div>
            </div>
            <section
                className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-white"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)",
                    backgroundSize: "16px 16px sm:20px 20px",
                }}
            >
                <div className="container text-center max-w-xs sm:max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                             font-normal leading-tight text-primary mb-3 sm:mb-4 md:mb-12">
                        Services for Speed, Performance, and Value
                    </h2>
                    <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 text-start">
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            Throughout our history, Bechtel has continuously evolved — innovating, adapting, and setting standards of excellence as we apply our unique capabilities to deliver our customers’ most critical and complex projects.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            More than ever before, we are integrating services across our diverse business lines to deliver comprehensive and innovative solutions tailored specifically to our customers’ needs. By collaborating early in project development, we explore all technical, commercial, and financial options to identify the best solutions, reduce complexities, and streamline delivery.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            We meet customers where they are, offering solutions that range from enhancing existing operations to reimagining approaches to their challenges. By leveraging vertically integrated work streams, proprietary digital tools, data, and in-house supply chains, we provide unique options to ensure certainty of outcome. Additionally, we are capturing opportunities to reduce cycle times on repeatable work, amplifying incremental improvements and boosting overall productivity.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            Together, with our proven processes and project management strategies, we create value not only in cost and schedule but also in delivering projects that perform as promised — or better — once customers begin operations.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[700px]">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2024/12/Line-1-Train-south-of-KAFD--1024x574.webp"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">ENgineering</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Designing for Success
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Bechtel’s engineering services are the foundation of our project success, delivering innovative, technology-driven solutions to tackle our customers’ toughest challenges. With industry-leading expertise and a commitment to continuous learning, our engineers design with supply chain, construction, and operations in mind — ensuring projects are delivered efficiently and with unmatched quality. Programs like Bechtel Fellows and Distinguished Technical Specialists enable our teams to collaborate across markets and push the boundaries of technical excellence.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Innovation and technology are at the core of what we do. From advanced 3D, 4D, and 5D modeling to data-centric execution and cloud-based systems, our engineers leverage cutting-edge tools to streamline schedules, reduce costs, and maximize productivity. By working collaboratively in virtual environments across the globe, Bechtel ensures our customers receive solutions that often set new industry standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center ">
                    {/* LEFT TEXT - Centered */}
                    <div className="flex items-center ">
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                The Riyadh Metro project — the largest metro project in the world to be built in a single phase — is pushing the limits of what's possible, setting new standards in scale, innovation, and precision. At peak construction, over 28,000 professionals worked onsite, moving massive quantities of materials, including enough earthworks to build the Great Pyramid of Giza more than seven times over. Our engineers in Bechtel design centers worldwide — including Taiwan, Dubai, and New Delhi — helped produce over 98,000 design drawings and 100 mock-ups. The system's doors alone required more than 10,000 unique designs, complete with customized signage and specifications. Operators received more than 120,000 as-built drawings and documentation from tens of thousands of lab tests, verifying compliance with nearly 700 material criteria.
                            </p>
                            <div className="mt-6">
                                <CtaButton href="/projects/riyadh-metro">
                                    Riyadh Metro
                                </CtaButton>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES - 2 images with smaller height */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="https://www.bechtel.com/wp-content/uploads/2024/12/KAFD-Steel-Structure-1-edited-900x506.webp"
                                alt="Riyadh Metro project 1"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                            />
                        </div>
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/1694565110427-506x365.webp"
                                alt="Riyadh Metro project 2"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 pr-4 sm:pr-6 md:pr-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[700px]">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/Procurement.webp"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">procurement</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Building a Resilient Global Supply Chain
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our global supply chain is resilient and adaptable, allowing us to consistently deliver on safety, quality, cost, schedule, and sustainability, no matter what global challenges arise.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our supply chain is complex and geographically vast, represented by thousands of supplier and contractor partnerships. We work with over 7,000 suppliers in 70 countries, handling more than 50,000 transactions annually. We also work with many local and small businesses, strengthening local communities.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                We support Bechtel’s business priorities and its projects through this network of global suppliers, supported by local and regionally positioned Supply Chain professionals of diverse experience and capability. Our supply chain is anchored on a platform of best-in-class processes and tools. We deliver on our vision of being industry’s choice in providing supply chain services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* STEEL FABRICATION PARTNERSHIP SECTION */}
            <section className="mt-20 sm:mt-32 md:mt-40 lg:mt-52 px-4 sm:px-6 md:px-20 border-t border-gray-200 mb-32">
                {/* FIRST ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
                    {/* LEFT IMAGE */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-md overflow-hidden">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/Bechtel-x-Unger-2-675x450.jpg"
                            alt="Steel Fabrication Partnership"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 font-normal leading-tight text-[#30454c]">
                            Steel Fabrication Partnership
                        </h2>
                        <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px] font-neuhas">
                            Access to high‑quality materials like fabricated steel is essential for completing projects
                            on time and within budget. To secure this critical material, Bechtel and Unger Steel have
                            formed Unger Steel Fabrication FZE, a joint venture of which Bechtel is a part owner. This
                            venture supplies premium steel to Bechtel projects worldwide.
                        </p>

                        {/* CTA Button */}
                        <div>
                            <CtaButton href="/projects/unger-steel">
                                Learn about Unger Steel
                            </CtaButton>
                        </div>
                    </div>
                </div>

                {/* SECOND ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center py-10 sm:py-14 md:py-20">
                    {/* LEFT IMAGE */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-md overflow-hidden">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/148172-675x450.webp"
                            alt="Pipe Making Joint Venture"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 font-normal leading-tight text-[#30454c]">
                            Pipe Making Joint Venture
                        </h2>
                        <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px] font-neuhas">
                            Through our joint venture with Çimtaş Group, we deliver a vertically integrated piping supply
                            chain that optimizes risk management, scheduling, and cost efficiency. With over 52 years of
                            experience and five fabrication shops across Turkey and China, Çimtaş provides comprehensive
                            engineering, procurement, and fabrication services for the construction, power, oil, gas, and
                            chemicals industries.
                        </p>

                        {/* CTA Button */}
                        <div>
                            <CtaButton href="/projects/unger-steel">
                                Learn about Unger Steel
                            </CtaButton>
                        </div>
                    </div>
                </div>
            </section>
            {/* Content area - Add your services content here */}
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[700px]">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/PA2354399-startup-012-1-1024x683.webp"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">Construction</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Unbeatable Execution
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                As a global leader in construction management, we have the people, processes, and tools to successfully execute the largest and most logistically complex projects, while maintaining industry-leading safety and quality standards.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                We’ve developed the competence and capacity to self-perform every phase of project delivery. Our self-perform EPC model maximizes value and minimizes risk for our customers by offering a single point of accountability. This approach allows us to optimize designs and implement proprietary processes, ensuring greater certainty in outcomes. Additionally, we take great pride in our century-long partnership with the North America Building Trades Unions, as well as the outstanding projects and training advancements we’ve pioneered together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center ">
                    {/* LEFT TEXT - Centered */}
                    <div className="flex items-center ">
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                We are committed to workforce development and community engagement. On the Kosovo Motorway project in Serbia, 70% of our workforce was made up of local residents, and we worked with 80 local contractors and hundreds of local suppliers. Over the course of the project, more than 10,000 residents received onsite training, equipping them with new skills to further their careers.
                            </p>
                            <div className="mt-6">
                                <CtaButton href="/projects/riyadh-metro">
                                    Kosovo Motorway
                                </CtaButton>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES - 2 images with smaller height */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/144481-edited-900x506.webp"
                                alt="Riyadh Metro project 1"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                            />
                        </div>
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="https://www.bechtel.com/wp-content/uploads/2024/10/164837-900x675.webp"
                                alt="Riyadh Metro project 2"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[550px]">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2024/12/PA2399500_016-1024x682.webp"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">project management</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Strategic Project Management Solutions
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Megaprojects often come with immense complexity, but with over a century of experience in engineering, construction, and procurement, we know how to navigate these challenges.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our deep expertise spans every phase of project delivery, and our long-standing relationships with trusted suppliers and our ability to manage thousands of contracts simultaneously ensures that we not only meet, but exceed our customers’ goals. This, after all, is at the heart of what we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center ">
                    {/* LEFT TEXT - Centered */}
                    <div className="flex items-center ">
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                On Teck’s Quebrada Blanca copper mine project (QB2), we played a key role in extending the life and boosting the output of one of the world’s largest undeveloped copper resources. The expansion included a 143,000-tonne-per-day copper concentrator, a high-capacity desalination plant, and a 103-mile (165-kilometer) water supply pipeline. QB2’s construction was a massive undertaking, involving the erection of 20,000 tonnes of steel and the movement of 31.2 million cubic meters of material, underscoring the scale and complexity of the project. Notably, QB2 is the first mining operation in the Tarapacá Region to use desalinated water for large-scale mining, with 100% of its production process dependent on this sustainable water source.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Throughout the project, we remained steadfast in our commitment to excellence and safety. More than 30,000 individuals contributed to the construction effort, logging 140 million work hours, over 60 million of which were completed without lost-time incidents. In recognition of our outstanding safety and environmental performance, we were honored with the ESH Excellence Award in 2022.
                            </p>
                            <div className="mt-6">
                                <CtaButton href="/projects/riyadh-metro">
                                    Quebrada Blanca 2
                                </CtaButton>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES - 2 images with smaller height */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px]">
                            <img
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/144481-edited-900x506.webp"
                                alt="Riyadh Metro project 1"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                            />
                        </div>
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px]">
                            <img
                                src="https://www.bechtel.com/wp-content/uploads/2024/10/164837-900x675.webp"
                                alt="Riyadh Metro project 2"
                                className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[450px]">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/addtl-2.webp"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        />
                    </div>

                    {/* RIGHT TEXT - now vertically centered */}
                    <div className="flex flex-col justify-center pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Additional Services
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Alongside our core services, we incorporate functional centers of
                                excellence throughout every aspect of our operations, supported by a
                                broad range of customized solutions that drive project success. This
                                approach ensures projects are completed faster, deliver greater
                                value, and achieve superior performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="font-apfel2 py-14 sm:py-20 lg:py-24 bg-secondary/30 overflow-x-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Scrollable Services Container */}
                    <div
                        ref={scrollRef}
                        className="w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200"
                    >
                        <div className="flex gap-6 sm:gap-8 md:gap-10 pb-4 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="group relative flex-shrink-0 w-[90vw] sm:w-[48%] lg:w-[32%]
                       h-[420px] sm:h-[480px] lg:h-[520px]
                       rounded-lg overflow-hidden shadow-md hover:shadow-xl
                       transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                                    />

                                    {/* Permanent Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 
             p-6 sm:p-8 pb-16 
             text-white flex flex-col justify-end 
             transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    >
                                        <p className="text-yellow-500 text-xs sm:text-sm uppercase mb-2 tracking-widest">
                                            Services
                                        </p>

                                        <h3 className="text-2xl sm:text-3xl font-apfel2 font-semibold leading-tight mb-3 max-w-[calc(100%-4rem)]">
                                            {service.title}
                                        </h3>
                                        <p
                                            className="text-sm sm:text-base font-neuhas text-white/90 
               max-h-0 overflow-hidden group-hover:max-h-[300px] group-hover:mt-2 
               transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] 
               max-w-[calc(100%-4rem)]"
                                        >
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Floating Button (Plus → Cross) */}
                                    <div className="absolute bottom-5 right-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                        {/* Default + */}
                                        <div
                                            className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-white 
                            opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                            </svg>
                                        </div>

                                        {/* Hover X */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-600 
                            text-white opacity-0 group-hover:opacity-100 
                            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ✅ NAVIGATION + NUMBERING */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-0">
                        {/* Prev button */}
                        <button
                            onClick={() => scrollToIndex('prev')}
                            disabled={currentIndex === 0}
                            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-red-100 text-red-600 
                   flex items-center justify-center hover:bg-red-200 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="h-4 w-4 sm:h-5 sm:w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Page Count */}
                        <span className="text-red-600 font-semibold text-sm sm:text-base">
                            {currentIndex + 1} – {Math.min(currentIndex + visibleCount, services.length)} of {services.length}
                        </span>

                        {/* Next button */}
                        <button
                            onClick={() => scrollToIndex('next')}
                            disabled={currentIndex + visibleCount >= services.length}
                            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-red-100 text-red-600 
                   flex items-center justify-center hover:bg-red-200 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="h-4 w-4 sm:h-5 sm:w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
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
                        Whether you’re seeking a partner for a project, have a media inquiry, or are interested in a job opportunity, you can reach out to our Bechtel colleagues around the world for direct support. Our team is ready to assist and provide the expertise you need.
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