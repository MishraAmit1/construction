"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowRightCircle, ArrowUpRight, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { atServices, services } from "@/lib/data";
import { CtaButton } from "@/app/(site)/slavery-statement/page";
import { cn } from "@/lib/utils";

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
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[78vh] flex items-center py-12">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000"
                        alt="Hero background"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    {/* Uniform dark overlay for all pages */}
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70" />
                </div>

                {/* Text container */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs md:max-w-6xl text-white">
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase">
                            APPROACH
                        </p>

                        <h1 className="text-white font-normal font-apfel2 mb-4 md:mb-6 text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05] [text-wrap:balance]">
                            Our Services
                        </h1>

                        <p className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px] leading-[1.6] md:leading-[36px] font-medium text-white/85 sm:text-white/90 md:max-w-4xl">
                            With 35+ years of expertise in civil engineering, A&T Infracon delivers comprehensive infrastructure solutions across India's most challenging terrains. From high-altitude roads to border security infrastructure, we execute projects with precision and excellence in extreme conditions.
                        </p>
                    </div>
                </div>
            </section>
            {/* BREADCRUMB */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600 font-neuhas tracking-wider">
                        <Link href="/" className="hover:text-red-600 transition-colors">HOME</Link>
                        <span className="mx-1.5 sm:mx-2">/</span>
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
                        Excellence in Execution, Quality in Delivery
                    </h2>
                    <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 text-start">
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            A&T Infracon Pvt. Ltd. has been a pioneering force in civil engineering for over 35 years, specializing in road and building works across Western India. Our extensive portfolio includes major projects in Gujarat, Rajasthan, Jammu & Kashmir, and Leh Ladakh, where we've executed some of the nation's most critical infrastructure.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            With our registered office in Ahmedabad and branch office in Barmer, we combine local expertise with modern capabilities. Our deep understanding of regional conditions allows us to mobilize resources efficiently and deliver projects in the most remote and challenging locations.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            We specialize in construction across India's harshest environments - from the deserts of Barmer and Jaisalmer to the high-altitude regions of Ladakh at 15,000+ feet, and the challenging terrain of the Rann of Kutch along the Indo-Pak Border. Our robust workforce of 200+ skilled professionals, supported by modern equipment and machinery, ensures excellence in every project phase.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            Our integrated approach combines technical expertise, proven processes, and cutting-edge equipment to deliver projects that not only meet but exceed expectations - on time, within budget, and built to last for generations.
                        </p>
                    </div>
                </div>
            </section>
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[700px]">
                        <img
                            src="/images/image1.png"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">ENGINEERING</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Designing for Success
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                A&T Infracon's engineering expertise forms the backbone of our project success. With decades of experience in designing infrastructure for extreme conditions, our engineering team specializes in creating solutions that withstand the harshest environments - from high-altitude freezing conditions to desert heat and coastal salinity.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our engineers design with construction feasibility and long-term durability in mind. From complex border infrastructure requiring strategic planning to high-altitude roads demanding specialized design considerations, we leverage modern surveying tools, structural analysis software, and proven methodologies to ensure every project is engineered for excellence and built to last.
                            </p>
                        </div>
                        <div className="mt-6 md:-ml-8">
                            <CtaButton href="/services/engineering">
                                Learn More About Engineering
                            </CtaButton>
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
                                Our flagship project - the High Altitude Hill Road to Indo-China Border from Silungla Base
                                to ITBP Post in Ladakh - exemplifies our engineering prowess. Valued at ₹112.37 Crore,
                                this project required innovative solutions to overcome extreme altitude, sub-zero
                                temperatures, and limited accessibility.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our team successfully designed and executed 12.42 km of strategic roadway at altitudes exceeding 14,800 feet, ensuring year-round connectivity for border security forces while navigating challenging terrain and weather constraints.
                            </p>
                            <div className="mt-6 md:-ml-8">
                                <CtaButton href="/projects">
                                    View Our Projects
                                </CtaButton>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES - 2 images with smaller height */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="/images/serviceseright1.png"
                                alt="Riyadh Metro project 1"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="/images/serviceseright2.png"
                                alt="Riyadh Metro project 2"
                                className="absolute inset-0 w-full h-full object-cover object-center "
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
                            src="/images/construction1.png"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center "
                        />
                    </div>
                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">PROCUREMENT</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Building a Resilient Supply Chain
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our procurement strategy is built on decades of relationship-building with trusted suppliers and manufacturers across Western India. We maintain strategic partnerships that ensure consistent quality, competitive pricing, and timely delivery even to the most remote project locations.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                From sourcing specialized materials for border infrastructure to procuring heavy machinery and equipment, our procurement team coordinates hundreds of transactions monthly. We work closely with local suppliers to support regional economies while maintaining rigorous quality standards. Our extensive vendor network and streamlined procurement processes enable us to handle multiple large-scale projects simultaneously without compromising on quality or timelines.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                With our own crushers producing 240TPH and 150TPH, concrete batching plants, and modern construction equipment fleet, we maintain significant self-reliance in critical resources while building strong supplier partnerships for specialized needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* EQUIPMENT PARTNERSHIP SECTION */}
            <section className="mt-20 sm:mt-32 md:mt-40 lg:mt-52 px-4 sm:px-6 md:px-20 border-t border-gray-200 mb-32">
                {/* FIRST ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
                    {/* LEFT IMAGE */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]  overflow-hidden">
                        <img
                            src="/images/image2.png"
                            alt="Construction Equipment"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 font-normal leading-tight text-[#30454c]">
                            Modern Equipment Fleet
                        </h2>
                        <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px] font-neuhas">
                            A&T Infracon maintains an extensive fleet of modern construction machinery to ensure project efficiency and quality. Our equipment inventory includes 4 Hot Mix Plants, 4 Concrete Batching Plants, 22 Excavators, 8 Loaders, 6 Pavers, 55 Tippers, and 12 Transit Mixers. With our own crushing units capable of producing up to 240TPH at Panthawada and 150TPH at Chunadi, we maintain self-sufficiency in critical construction materials while ensuring consistent quality and competitive costs.
                        </p>

                        {/* CTA Button */}
                        <div className="mt-6 md:-ml-8">

                            <CtaButton href="/about#resources">
                                View Our Resources
                            </CtaButton>
                        </div>
                    </div>
                </div>

                {/* SECOND ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center py-10 sm:py-14 md:py-20">
                    {/* LEFT IMAGE */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px]  overflow-hidden">
                        <img
                            src="/images/image3.png"
                            alt="Project Execution"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 font-normal leading-tight text-[#30454c]">
                            Strategic Project Management
                        </h2>
                        <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px] font-neuhas">
                            Our project management approach integrates modern software tools with proven execution strategies. We maintain strong banking relationships with fund-based and non-fund-based limits, enabling us to handle multiple large-scale projects simultaneously. Our team of 200+ professionals brings expertise in managing complex logistics, coordinating with government agencies, and delivering projects in hostile environments where few contractors dare to operate.
                        </p>

                        {/* CTA Button */}
                        <div className="mt-6 md:-ml-8">
                            <CtaButton href="/projects">
                                View Completed Projects
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
                            src="/images/image4.png"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center "
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">CONSTRUCTION</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Unbeatable Execution
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                A&T Infracon's construction capabilities are proven across India's most demanding environments. From constructing roads in the Rann of Kutch's marshy terrain to building infrastructure at 15,000+ feet in Ladakh, we execute projects that others find impossible. Our expertise spans road construction, border infrastructure, building works, bridges, and renewable energy installations.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                We maintain industry-leading safety standards while delivering complex projects on schedule. Our construction teams are trained to work in extreme weather conditions, from Rajasthan's 50°C summers to Ladakh's -40°C winters. With successful completion of projects worth over ₹586 crores in recent years, including border roads, BOPs, bridges, and civil works, we've established ourselves as the contractor of choice for challenging infrastructure projects across Western India.
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
                                Our border infrastructure projects showcase our specialized construction capabilities. The 26.762 KM Composite Earthen Bundh cum Ditch project along the Indo-Pak border in Jammu sector, valued at ₹101.78 Crores, involved constructing earthen embankments, bituminous roads, and RCC Nakas across 135 feet width. Our team completed multiple such strategic projects including fencing, fighting bunkers, and BOPs in sensitive border areas, demonstrating our ability to execute large-scale works under stringent security protocols and challenging terrain conditions.
                            </p>
                            <div className="mt-6 md:-ml-8">
                                <CtaButton href="/projects#border-infrastructure">
                                    Border Infrastructure Projects
                                </CtaButton>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES - 2 images with smaller height */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="/images/image5.png"

                                alt="Riyadh Metro project 1"
                                className="absolute inset-0 w-full h-full object-cover object-center "
                            />
                        </div>
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                            <img
                                src="/images/image6.png"
                                alt="Riyadh Metro project 2"
                                className="absolute inset-0 w-full h-full object-cover object-center "
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
                            src="/images/image7.png"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center "
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}

                    <div className="pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12">

                        <p className="uppercase text-[24px] leading-[31.2px] text-yellow-500 font-necto mb-6">PROJECT MANAGEMENT</p>
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Strategic Project Management Solutions
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Managing complex infrastructure projects in remote and hostile environments requires exceptional planning, coordination, and execution capabilities. A&T Infracon's project management expertise has been honed through decades of delivering challenging projects for prestigious clients including CPWD, BSF, ITBP, NBCC, and major PSUs.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our project managers leverage modern software tools for planning, monitoring, and control while maintaining the flexibility needed for ground realities. We've successfully managed over 50 major projects simultaneously, with values ranging from ₹5 crores to ₹140 crores, ensuring quality delivery and client satisfaction across all engagements.
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
                                The Widening & Strengthening of Dehgam-Bayad Road (Km 0/0 to 43/800), a ₹28.33 Crore CRF project, exemplifies our road construction expertise. This project involved widening a 43.8 km stretch from 6.10 meters to 10.0 meters, requiring careful traffic management while maintaining continuous public access. Our team coordinated multiple work fronts, managed material supply chains, and executed quality bituminous work to deliver a highway-standard road that now serves thousands of commuters daily.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Similarly, our PMGSY rural road projects and border road maintenance works demonstrate our ability to manage diverse project portfolios while maintaining consistent quality and safety standards across all sites.
                            </p>
                            <div className="mt-6 md:-ml-8">
                                <CtaButton href="/projects#road-works">
                                    Road Construction Projects
                                </CtaButton>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES - 2 images with smaller height */}
                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px]">
                            <img
                                src="/images/image8.png"

                                alt="Riyadh Metro project 1"
                                className="absolute inset-0 w-full h-full object-cover object-center "
                            />
                        </div>
                        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px]">
                            <img
                                src="/images/image9.png"

                                alt="Riyadh Metro project 2"
                                className="absolute inset-0 w-full h-full object-cover object-center "
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
                            src="/images/image10.png"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center "
                        />
                    </div>

                    {/* RIGHT TEXT - now vertically centered */}
                    <div className="flex flex-col justify-center pr-4 sm:pr-8 md:pr-16 py-4 sm:py-6 md:py-8 lg:py-12">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-apfel2
                             font-normal leading-tight mb-4 sm:mb-6 md:mb-9"
                        >
                            Additional Capabilities
                        </h2>
                        <div className="space-y-3 sm:space-y-4 font-neuhas">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Beyond our core competencies, A&T Infracon offers specialized services including renewable energy infrastructure (wind turbine foundations, solar power projects), advanced slope protection using Gabion technology, flood damage remediation, annual road maintenance contracts, and construction in ecologically sensitive areas. Our diverse capabilities and proven track record make us the preferred partner for government agencies and private sector clients undertaking challenging infrastructure projects across Western India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* OUR SERVICES SECTION - Updated to match WhereWeWork pattern */}
            <section className="font-apfel2 py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30 overflow-x-hidden">
                {/* Header Section - Full width container */}
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        {/* Left Heading */}
                        <h2 className="font-apfel2 
                         text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 
                         text-primary 
                         leading-[1.1] sm:leading-[1.2] lg:leading-tight 
                         text-center lg:text-left">
                            Our Core Services
                        </h2>

                        {/* Right Paragraph */}
                        <p className="text-[15px] md:text-[20px] font-neuhas
                        text-[#30454c] 
                        leading-[1.6] md:leading-[30px] 
                        max-w-full lg:max-w-3xl 
                        text-center lg:text-left 
                        mx-auto lg:ml-auto">
                            From road construction in extreme terrains to strategic border infrastructure, building works, and renewable energy projects - A&T Infracon delivers specialized civil engineering solutions across India's most challenging environments. Our 35+ years of expertise ensures excellence in every project phase.
                        </p>
                    </div>
                </div>
                {/* Scrollable Services Container - No right padding */}
                <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16">
                    <div
                        ref={scrollRef}
                        className="w-full overflow-x-auto scroll-smooth 
                     scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200"
                    >
                        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4">
                            {atServices.map((service) => (
                                <Link
                                    key={service.id}
                                    id={`service-${service.id}`}
                                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                    className={cn(
                                        "group block flex-shrink-0 scroll-mt-32",
                                        visibleCount === 1
                                            ? "w-[85vw]"
                                            : visibleCount === 2
                                                ? "w-[48vw]"
                                                : "w-[35vw]"
                                    )}
                                >
                                    <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[700px] 
                                      w-full rounded-lg overflow-hidden shadow-md">
                                        <Image
                                            src={service.image.imageUrl}
                                            alt={service.image.description}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 85vw, 
                                     (max-width: 1024px) 48vw, 
                                     35vw"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 
                                          bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                        {/* Hover Overlay - for darker effect on hover */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 
                                          transition-all duration-500 ease-in-out" />

                                        {/* Content Overlay */}
                                        <div className="absolute left-0 right-0 bottom-6
                                          px-4 sm:px-5 md:px-6 lg:px-8
                                          text-white">

                                            {/* Title - Always visible, fixed position */}
                                            <h3 className="font-apfel2 
                                             text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                                             font-semibold">
                                                {service.title}
                                            </h3>

                                            {/* Description - Smooth slide up from BELOW title */}
                                            <div className="overflow-hidden 
                                              max-h-0 group-hover:max-h-32 sm:group-hover:max-h-40 md:group-hover:max-h-48
                                              transition-all duration-500 ease-in-out
                                              mt-2">
                                                <p className="text-sm sm:text-base md:text-lg
                                                font-neuhas
                                                text-white/90 
                                                leading-relaxed
                                                pb-14
                                                max-w-[85%] sm:max-w-[80%] md:max-w-[80%]
                                                opacity-0 group-hover:opacity-100
                                                transition-opacity duration-500 ease-in-out">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* Action Button - Absolute positioned */}
                                            <div className="absolute bottom-0 right-4 sm:right-5 md:right-6 lg:right-8">
                                                <div className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12
                                                  rounded-full bg-red-600 
                                                  text-white flex items-center 
                                                  justify-center 
                                                  transition-all duration-300 
                                                  group-hover:bg-red-700
                                                  shadow-lg">
                                                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {/* Invisible spacer div for last card spacing */}
                            <div className="flex-shrink-0 w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16" aria-hidden="true"></div>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                    <div className="flex items-center justify-center sm:justify-start 
                      gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <button
                            onClick={() => scrollToIndex("prev")}
                            disabled={currentIndex === 0}
                            className="h-10 w-10 sm:h-11 sm:w-11 
                         rounded-full bg-red-100 
                         text-red-600 flex items-center 
                         justify-center hover:bg-red-200 
                         transition-colors 
                         disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="h-4 w-4 sm:h-5 sm:w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <span className="text-red-600 font-semibold text-sm sm:text-base">
                            {currentIndex + 1} –{" "}
                            {Math.min(currentIndex + visibleCount, atServices.length)} of{" "}
                            {atServices.length}
                        </span>

                        <button
                            onClick={() => scrollToIndex("next")}
                            disabled={currentIndex + visibleCount >= atServices.length}
                            className="h-10 w-10 sm:h-11 sm:w-11 
                         rounded-full bg-red-100 
                         text-red-600 flex items-center 
                         justify-center hover:bg-red-200 
                         transition-colors 
                         disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="h-4 w-4 sm:h-5 sm:w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 text-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-[28px] sm:text-[64px] md:leading-[70.4px] font-apfel2 
                                 font-light text-[#2d3b40] mb-3 sm:mb-4 md:mb-6">
                        Connect with the <br />A&T Infracon Team
                    </h2>
                    <p className="text-[16px] md:text-[20px] 
                                 text-[#2d3b40]/80 leading-[30px] 
                                 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl 
                                 mx-auto mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0 font-neuhas">
                        Whether you're seeking a partner for challenging infrastructure projects, have inquiries about our capabilities, or are interested in career opportunities, connect with our team in Ahmedabad or Barmer. We're ready to bring our 35+ years of expertise to your next project.
                    </p>

                    <CtaButton href="/contact">Contact Us</CtaButton>
                </div>
            </section>
        </>
    );
}