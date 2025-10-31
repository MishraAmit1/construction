"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, Phone, Mail, MapPin, CheckCircle2, Award, Users,
    Building2, Shield, TrendingUp, Globe, Clock, Mountain,
    Factory, DollarSign, Wrench, Target, Cpu, Zap, MapPinned,
    Gauge, BadgeCheck, Landmark, FileCheck, Briefcase, Heart
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <div ref={counterRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-bold text-red-600 mb-2">
            {prefix}{count}{suffix}
        </div>
    );
}

// Fade In Animation Component
function FadeInSection({ children, className = "", delay = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number
}) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={sectionRef}
            className={cn(
                "transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                className
            )}
        >
            {children}
        </div>
    );
}

// ✅ MAIN OUR STRENGTH COMPONENT
export function OurStrength() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center py-12">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
                        alt="Our Strength - A&T Infracon"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs md:max-w-6xl text-white">
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase animate-fade-in">
                            OUR STRENGTH
                        </p>

                        <h1 className="text-white font-normal font-apfel2 mb-4 md:mb-6 text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05]">
                            Built on Experience.<br />Powered by Excellence.
                        </h1>

                        <p className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px] leading-[1.6] md:leading-[36px] font-medium text-white/90 md:max-w-4xl">
                            35 years of unwavering commitment, 200+ skilled professionals, and state-of-the-art
                            equipment delivering infrastructure excellence across India's toughest terrains.
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
                        <span className="text-red-600 font-semibold uppercase">OUR STRENGTH</span>
                    </nav>
                </div>
            </div>

            {/* KEY STATISTICS */}
            <section className="bg-white py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-center text-gray-900 font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">
                        Our Strength in Numbers
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="border-r border-gray-200 last:border-r-0">
                            <AnimatedCounter end={35} suffix="+" />
                            <div className="text-gray-600 font-neuhas text-lg">Years of Excellence</div>
                            <p className="text-gray-500 text-sm mt-1 font-neuhas">Since 1989</p>
                        </div>
                        <div className="border-r border-gray-200 last:border-r-0">
                            <AnimatedCounter end={200} suffix="+" />
                            <div className="text-gray-600 font-neuhas text-lg">Skilled Professionals</div>
                            <p className="text-gray-500 text-sm mt-1 font-neuhas">Expert Team</p>
                        </div>
                        <div className="border-r border-gray-200 last:border-r-0">
                            <AnimatedCounter end={161} prefix="₹" suffix=" Cr" />
                            <div className="text-gray-600 font-neuhas text-lg">Annual Turnover</div>
                            <p className="text-gray-500 text-sm mt-1 font-neuhas">FY 2023-24</p>
                        </div>
                        <div>
                            <AnimatedCounter end={150} suffix="+" />
                            <div className="text-gray-600 font-neuhas text-lg">Modern Equipment</div>
                            <p className="text-gray-500 text-sm mt-1 font-neuhas">Worth Crores</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE & EXPERTISE */}
            <FadeInSection>
                <section className="bg-gray-50 py-16 sm:py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-start px-4 sm:px-6 md:px-8">
                        <div className="lg:pl-8 xl:pl-16 2xl:pl-32 py-4 sm:py-6 md:py-8 lg:py-0">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight sm:leading-[1.2] md:leading-[64px] text-gray-900 mb-6 sm:mb-8 md:mb-12">
                                35+ Years of Experience
                            </h2>

                            <div className="font-neuhas space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-[15px] sm:text-[16px] md:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[32px]">
                                <p>
                                    Since 1989, A&T Infracon has been at the forefront of civil engineering excellence
                                    across Western India. Our journey spans three and a half decades of transforming
                                    challenging terrains into robust infrastructure.
                                </p>
                                <p>
                                    We have successfully executed large development works in Gujarat, Rajasthan, Jammu & Kashmir,
                                    and Leh Ladakh—regions known for their extreme climatic conditions and difficult site situations.
                                    From the scorching deserts of Barmer and Jaisalmer to the freezing heights of Ladakh at 15,000+ feet,
                                    our teams have proven their mettle time and again.
                                </p>
                                <p>
                                    Our extensive experience includes construction of high-altitude hill roads to Indo-China border,
                                    border security infrastructure along Indo-Pak border, state highways, rural connectivity projects,
                                    institutional buildings, and renewable energy installations. Each project has strengthened our
                                    expertise and deepened our understanding of complex civil engineering challenges.
                                </p>
                                <p>
                                    This wealth of experience translates into faster project mobilization, better risk management,
                                    and superior quality delivery—making us the preferred infrastructure partner for government
                                    departments and PSUs across challenging regions.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6 md:space-y-8 px-0 sm:px-4 md:px-6">
                            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1590759668628-05b9eea2f443?q=80&w=1000"
                                    alt="35 Years of Excellence"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-apfel2 text-3xl mb-2">Est. 1989</p>
                                    <p className="font-neuhas text-lg">Three Decades of Trust</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-[200px] overflow-hidden rounded-md">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600"
                                        alt="Modern Equipment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[200px] overflow-hidden rounded-md">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600"
                                        alt="Project Execution"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* EXTREME TERRAIN EXPERTISE */}
            <FadeInSection delay={100}>
                <section className="bg-white py-16 sm:py-20 md:py-28">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-6">
                                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000"
                                        alt="Extreme Terrain"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=600"
                                            alt="Desert Construction"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600"
                                            alt="Mountain Infrastructure"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-8">
                                    Extreme Terrain Specialists
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Mountain className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">High-Altitude Expertise</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Successfully completed road construction to Indo-China border at altitudes exceeding
                                                15,000 feet in Ladakh and Sikkim. Specialized equipment and techniques for low-oxygen,
                                                sub-zero temperature environments.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Globe className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Desert Construction</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Extensive experience in Thar Desert regions of Barmer, Jaisalmer, and Western Rajasthan.
                                                Expertise in handling extreme heat (50°C+), sand storms, and water scarcity challenges
                                                during construction.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Border & Coastal Areas</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Proven track record in Rann of Kutch marshlands, Indo-Pak border regions, and sensitive
                                                security zones. Understanding of unique challenges including saline soil, tidal variations,
                                                and restricted access areas.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Target className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Remote Area Logistics</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Advanced planning and execution capabilities for projects in areas with limited
                                                connectivity, scarce resources, and harsh environmental conditions. Self-sufficient
                                                mobilization with own equipment and skilled workforce.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* EQUIPMENT & MACHINERY STRENGTH */}
            <FadeInSection delay={200}>
                <section className="bg-gray-50 py-16 sm:py-20 md:py-28">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-12 sm:mb-16 md:mb-20">
                            Equipment & Machinery Fleet
                        </h2>

                        <div className="space-y-12 sm:space-y-16 md:space-y-20">
                            {/* Production Plants */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        Production Plants (19 Units)
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        State-of-the-art crushing and mixing plants strategically located across project sites.
                                        High-capacity units ensuring consistent material quality and timely production for
                                        large-scale road and building projects.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Crusher 240-150 TPH (4 units)",
                                        "Batch Type Hot Mix Plant (2 units)",
                                        "Drum Mix Plant (4 units)",
                                        "Concrete Batching Plant (4 units)",
                                        "WMM Plant (2 units)",
                                        "Concrete Pump (3 units)"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Earth Moving */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        Earth Moving Equipment (90 Units)
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        Comprehensive fleet of excavators, loaders, tippers, and graders for efficient earthwork
                                        operations. Modern hydraulic machinery with experienced operators ensuring productivity
                                        in toughest terrains.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Hydraulic Excavator (22 units)",
                                        "Wheel Loader (8 units)",
                                        "Motor Grader (2 units)",
                                        "Heavy Duty Tipper (55 units)",
                                        "Low-Bed Trailer (3 units)",
                                        "Modern Technology Based"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Paving & Compaction */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        Paving & Compaction (17 Units)
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        Advanced sensor-based pavers and compaction equipment for superior road surface quality.
                                        Multiple roller types ensuring proper compaction for different material layers and
                                        project specifications.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Bituminous/WMM Paver (6 units)",
                                        "Concrete Paver (1 unit)",
                                        "Soil Compactor (4 units)",
                                        "Tandem Roller (2 units)",
                                        "Pneumatic Tyre Roller (2 units)",
                                        "Baby Roller (2 units)"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Support Equipment */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        Support & Auxiliary (22+ Units)
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        Complete support infrastructure including water tankers, sprayers, generators, and
                                        modern survey equipment. Essential auxiliary machinery ensuring smooth operations
                                        and quality control across all project stages.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Water Tanker (15 units)",
                                        "Bitumen Sprayer (6 units)",
                                        "Chip Spreader (1 unit)",
                                        "Diesel Tanker (1 unit)",
                                        "Power Generators (Multiple)",
                                        "Survey Equipment (GPS, Total Station)"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* HUMAN RESOURCE STRENGTH */}
            <FadeInSection delay={300}>
                <section className="bg-white py-16 sm:py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-start px-4 sm:px-6 md:px-8">
                        <div className="lg:pl-8 xl:pl-16 2xl:pl-32 py-4 sm:py-6 md:py-8 lg:py-0">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight sm:leading-[1.2] md:leading-[64px] text-gray-900 mb-6 sm:mb-8 md:mb-12">
                                200+ Skilled Professionals
                            </h2>

                            <div className="font-neuhas space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-[15px] sm:text-[16px] md:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[32px]">
                                <p>
                                    Our greatest strength lies in our people. We maintain a robust workforce of over 200
                                    skilled and semi-skilled professionals who form the backbone of our operations. From
                                    experienced civil engineers and project managers to specialized equipment operators
                                    and skilled laborers, our team is our competitive advantage.
                                </p>
                                <p>
                                    Our technical team includes civil engineers with expertise in road construction,
                                    building works, and specialized border infrastructure. Our project managers bring
                                    decades of experience in handling complex government contracts, CPWD specifications,
                                    and challenging site conditions.
                                </p>
                                <p>
                                    We invest continuously in training and skill development, ensuring our workforce stays
                                    updated with latest construction technologies, safety protocols, and quality standards.
                                    Our equipment operators are certified professionals with extensive experience in
                                    operating modern machinery in extreme conditions.
                                </p>
                                <p>
                                    This experienced workforce enables us to maintain multiple project sites simultaneously
                                    across Gujarat, Rajasthan, J&K, and Ladakh while maintaining consistent quality standards
                                    and timeline adherence.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6 md:space-y-8 px-0 sm:px-4 md:px-6">
                            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000"
                                    alt="Skilled Workforce"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-apfel2 text-3xl mb-2">200+ Professionals</p>
                                    <p className="font-neuhas text-lg">Expert Team Members</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-[200px] overflow-hidden rounded-md">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600"
                                        alt="Team Work"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[200px] overflow-hidden rounded-md">
                                    <Image
                                        src="https://images.unsplash.com/photo-1590759668628-05b9eea2f443?q=80&w=600"
                                        alt="Professional Excellence"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* FINANCIAL STRENGTH */}
            <FadeInSection delay={400}>
                <section className="bg-gray-50 py-16 sm:py-20 md:py-28">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-6">
                                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000"
                                        alt="Financial Growth"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
                                            alt="Financial Stability"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=600"
                                            alt="Growth Chart"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-8">
                                    Financial Strength & Stability
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Consistent Growth Trajectory</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed mb-3">
                                                Impressive financial growth over the past five years demonstrating our business
                                                strength and market reputation:
                                            </p>
                                            <div className="space-y-2 text-sm font-neuhas text-gray-700">
                                                <div className="flex justify-between">
                                                    <span>FY 2019-20 (Audited):</span>
                                                    <span className="font-semibold">₹51.09 Crore</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>FY 2020-21 (Audited):</span>
                                                    <span className="font-semibold">₹91.93 Crore</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>FY 2021-22 (Audited):</span>
                                                    <span className="font-semibold">₹111.70 Crore</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>FY 2022-23 (Audited):</span>
                                                    <span className="font-semibold">₹169.07 Crore</span>
                                                </div>
                                                <div className="flex justify-between text-base font-bold text-red-600 pt-2 border-t">
                                                    <span>FY 2023-24 (Audited):</span>
                                                    <span>₹161.49 Crore</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Landmark className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Strong Banking Relationships</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Robust relationships with leading financial institutions. Fund-based and non-fund-based
                                                credit facilities ensuring adequate working capital for simultaneous execution of
                                                multiple large-scale projects.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <FileCheck className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Complete Compliance</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed mb-2">
                                                All statutory registrations and compliances maintained:
                                            </p>
                                            <div className="space-y-1 text-sm font-neuhas text-gray-700">
                                                <div>• Corporate Identity: U45201GJ2011PTC065598</div>
                                                <div>• PAN: AAJCA5903A</div>
                                                <div>• GST: 24AAJCA5903A1Z9</div>
                                                <div>• PF Registration: GJ/RAJ/00041477</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* GEOGRAPHIC PRESENCE */}
            <FadeInSection delay={500}>
                <section className="bg-white py-16 sm:py-20 md:py-28">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-12 sm:mb-16 md:mb-20">
                            Strategic Geographic Presence
                        </h2>

                        <div className="space-y-12 sm:space-y-16 md:space-y-20">
                            {/* Gujarat */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        Gujarat Operations
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        Registered office in Ahmedabad with extensive project experience across the state.
                                        Deep expertise in Kutch region, Banaskantha, Sabarkantha, Gandhinagar, and coastal areas.
                                        Specialized in Rann of Kutch terrain and saline soil conditions.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Registered Office: Ahmedabad",
                                        "Kutch District Projects",
                                        "Banaskantha Operations",
                                        "Sabarkantha Infrastructure",
                                        "Gandhinagar Developments",
                                        "Border Areas Expertise"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Rajasthan */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        Rajasthan Operations
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        Branch office in Barmer providing strategic advantage for Western Rajasthan projects.
                                        Extensive experience in Thar Desert construction, CRF projects, PMGSY rural roads,
                                        and state highway development in extreme heat and arid conditions.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Branch Office: Barmer",
                                        "Jaisalmer Desert Projects",
                                        "Sirohi Hill Roads",
                                        "CRF Highway Projects",
                                        "PMGSY Rural Connectivity",
                                        "Western Rajasthan Expertise"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* J&K and Ladakh */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        J&K and Ladakh Operations
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        High-altitude construction expertise with projects up to 15,000+ feet. Strategic roads
                                        to Indo-China border, BOPs for ITBP, defense infrastructure, and institutional buildings.
                                        Specialized in sub-zero temperatures and limited working season challenges.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Ladakh Border Roads",
                                        "Sikkim High-Altitude Projects",
                                        "Jammu Sector BOPs",
                                        "ITBP Infrastructure",
                                        "Indo-China Border Roads",
                                        "Defense Installations"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Border Regions */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                                        Border Infrastructure Specialist
                                    </h3>
                                    <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                                        Extensive Indo-Pak border infrastructure from Gujarat to Jammu sector. Indo-China
                                        border projects in Ladakh and Sikkim. Trusted by BSF, ITBP, and defense forces for
                                        509 BOPs, fencing, bunkers, and strategic infrastructure in sensitive security zones.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                                    {[
                                        "Indo-Pak Border (Gujarat)",
                                        "Indo-Pak Border (Rajasthan)",
                                        "Indo-Pak Border (Jammu)",
                                        "Indo-China Border (Ladakh)",
                                        "Indo-China Border (Sikkim)",
                                        "Security Infrastructure"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                                            <span className="text-red-600 mr-2 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* CLIENT PORTFOLIO */}
            <FadeInSection delay={600}>
                <section className="bg-gray-50 py-16 sm:py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-start px-4 sm:px-6 md:px-8">
                        <div className="lg:pl-8 xl:pl-16 2xl:pl-32 py-4 sm:py-6 md:py-8 lg:py-0">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight sm:leading-[1.2] md:leading-[64px] text-gray-900 mb-6 sm:mb-8 md:mb-12">
                                Trusted by Leading Organizations
                            </h2>

                            <div className="font-neuhas space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-[15px] sm:text-[16px] md:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[32px]">
                                <p>
                                    Our client portfolio reflects the trust and confidence placed in our capabilities by
                                    India's leading government departments, defense forces, and public sector undertakings.
                                    This diverse client base is a testament to our versatility and expertise across different
                                    types of infrastructure projects.
                                </p>
                                <p>
                                    We are proud to be the preferred contractor for CPWD, NBCC, Border Roads Organization,
                                    ITBP, and BSF for critical border infrastructure and defense projects. Our long-standing
                                    relationships with Gujarat Roads & Buildings Department and Rajasthan PWD demonstrate our
                                    consistent performance in state infrastructure development.
                                </p>
                                <p>
                                    Leading PSUs like IOCL, ONGC, GAIL, and private sector giants like Suzlon Infrastructure,
                                    Cairn Energy, and Gujarat Fluorochemicals trust us for their civil engineering requirements.
                                    From Airport Authority of India to Deendayal Port Authority, our client diversity showcases
                                    our ability to deliver across sectors and project types.
                                </p>
                                <p>
                                    This strong client portfolio not only validates our technical capabilities but also reflects
                                    our commitment to quality, timely delivery, and professional excellence in every project we
                                    undertake, regardless of location or complexity.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6 md:space-y-8 px-0 sm:px-4 md:px-6">
                            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-md">
                                <Image
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000"
                                    alt="Client Trust"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="font-apfel2 text-3xl mb-2">20+ Government Clients</p>
                                    <p className="font-neuhas text-lg">Trusted Partner</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-[200px] overflow-hidden rounded-md">
                                    <Image
                                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600"
                                        alt="Government Projects"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[200px] overflow-hidden rounded-md">
                                    <Image
                                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600"
                                        alt="PSU Partnerships"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* TECHNOLOGY & QUALITY */}
            <FadeInSection delay={700}>
                <section className="bg-white py-16 sm:py-20 md:py-28">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-8">
                                    Technology & Quality Assurance
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Cpu className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Project Management Software</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Advanced digital tools for effective project planning, resource allocation, progress
                                                monitoring, and timely completion. Real-time tracking systems ensuring transparency
                                                and efficiency across all project stages.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Target className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">E-Tendering Capability</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Fully equipped for digital procurement through government e-tendering portals.
                                                Experienced team handling online bidding processes ensuring participation in major
                                                government tenders across multiple departments.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <Wrench className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Modern Survey Equipment</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Latest GPS and Total Station technology for precise surveying and setting out.
                                                Accurate measurements and digital documentation ensuring quality control and
                                                compliance verification at every construction stage.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                            <BadgeCheck className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Quality Standards</h3>
                                            <p className="font-neuhas text-gray-600 leading-relaxed">
                                                Stringent quality control processes following IS codes, MORTH specifications, and
                                                CPWD standards. In-house testing facilities and third-party quality audits ensuring
                                                superior project quality and client satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000"
                                        alt="Technology & Quality"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600"
                                            alt="Modern Technology"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
                                            alt="Quality Assurance"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>
            {/* CALL TO ACTION */}
            <section className="py-16 sm:py-20 md:py-24 bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 text-gray-900 mb-6">
                        Experience Our Strength. Build Your Vision.
                    </h2>
                    <p className="font-neuhas text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                        Partner with A&T Infracon and leverage 35 years of expertise, 150+ modern equipment units,
                        200+ skilled professionals, and unwavering commitment to excellence.
                    </p>
                    <div className="mt-8 sm:mt-10 md:mt-12">
                        <Link
                            href="/contact"
                            className={cn(
                                'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5',
                                'text-sm sm:text-[20px] font-semibold text-red-600',
                                'transition-all duration-500 ease-out',
                                'min-h-[44px] sm:min-h-[48px]',
                                'w-full sm:w-auto max-w-xs sm:max-w-none mx-auto md:mx-0'
                            )}
                        >
                            <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                            <span className="relative z-10 flex items-center justify-center md:justify-start">
                                <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                </span>
                                <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white font-neuhas">

                                    Discuss Your Project
                                </span>
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                            </span>
                        </Link>
                    </div>
                    {/* Contact Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-3">
                            <Phone className="w-5 h-5 text-red-600" />
                            <span className="font-neuhas text-gray-700">+91 79357 03085</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <Mail className="w-5 h-5 text-red-600" />
                            <span className="font-neuhas text-gray-700">atinfracon@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <MapPin className="w-5 h-5 text-red-600" />
                            <span className="font-neuhas text-gray-700">Ahmedabad & Barmer</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}