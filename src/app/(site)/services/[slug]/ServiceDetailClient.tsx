// app/services/[slug]/ServiceDetailClient.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Building2,
    Users,
    Shield,
    Mountain,
    Route,
    Network,
    Lock,
    ChevronRight,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/sections/SlaveryStatementPageWrapper";
import { atServices } from "@/lib/data";

// Icon mapping
const iconMap: Record<string, any> = {
    Mountain,
    Route,
    Network,
    Shield,
    Building2,
    Lock,
    Users
};

interface ServiceDetailClientProps {
    service: any;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Avoid hydration mismatch
    }

    return (
        <>
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center py-12">
                <div className="absolute inset-0">
                    <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-5xl text-white">
                        <p className="font-neuhas text-yellow-400 font-thin tracking-[0.2em] mb-3 sm:mb-4 text-xs sm:text-sm md:text-base uppercase">
                            OUR SERVICES
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] leading-[1.05] sm:leading-[1.1] font-normal font-apfel2 mb-4 sm:mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 sm:mb-8 font-apfel2 font-light leading-tight">
                            {service.tagline}
                        </p>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl font-neuhas leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 font-neuhas tracking-wider gap-2">
                        <Link href="/" className="hover:text-red-600 transition-colors">HOME</Link>
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                        <Link href="/services" className="hover:text-red-600 transition-colors">SERVICES</Link>
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
                        <span className="text-red-600 font-semibold uppercase">{service.title}</span>
                    </nav>
                </div>
            </div>

            {/* OVERVIEW SECTION */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 mb-6 sm:mb-8 md:mb-12 text-gray-900 leading-tight">
                            Excellence Through Experience
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-neuhas">
                            {service.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 text-center mb-12 sm:mb-16 md:mb-20 text-gray-900">
                        Key Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
                        {service.keyFeatures.map((feature: any, index: number) => {
                            const Icon = iconMap[feature.icon] || Shield;
                            return (
                                <div key={index} className="flex gap-4 sm:gap-5 md:gap-6 group">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center">
                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 font-apfel2 text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 font-neuhas text-base sm:text-lg leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* STATISTICS */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 text-center mb-12 sm:mb-16 md:mb-20 text-gray-900">
                        By the Numbers
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
                        {service.statistics.map((stat: any, index: number) => (
                            <div key={index} className="text-center group">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2 sm:mb-3 font-apfel2">
                                    {stat.value}
                                </div>
                                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 text-gray-900 font-apfel2">
                                    {stat.label}
                                </div>
                                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-neuhas">
                                    {stat.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CAPABILITIES LIST */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 text-center mb-12 sm:mb-16 md:mb-20 text-gray-900">
                        Our Expertise
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
                        {service.capabilities.map((capability: string, index: number) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-xl transition-all duration-300 group"
                            >
                                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-gray-800 font-medium font-neuhas text-sm sm:text-base md:text-lg">
                                    {capability}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAJOR PROJECTS */}
            {service.majorProjects && service.majorProjects.length > 0 && (
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 text-center mb-12 sm:mb-16 md:mb-20 text-gray-900">
                            Featured Projects
                        </h2>
                        <div className="space-y-16 sm:space-y-20 md:space-y-24">
                            {service.majorProjects.map((project: any, index: number) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
                                >
                                    <div className={cn(
                                        "relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl",
                                        index % 2 === 1 && "lg:order-2"
                                    )}>
                                        <Image
                                            src={project.image || "/images/placeholder.webp"}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className={cn(
                                        index % 2 === 1 && "lg:order-1"
                                    )}>
                                        <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
                                            <p className="text-yellow-500 uppercase text-xs sm:text-sm font-bold tracking-wider font-neuhas">
                                                {project.location}
                                            </p>
                                            <span className="text-gray-300">•</span>
                                            <p className="text-red-600 font-bold text-sm sm:text-base font-neuhas">
                                                {project.value}
                                            </p>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-apfel2 mb-4 sm:mb-6 text-gray-900 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 sm:mb-8 font-neuhas text-base sm:text-lg md:text-xl leading-relaxed">
                                            {project.description}
                                        </p>
                                        <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                                            {project.highlights.map((highlight: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 font-neuhas text-sm sm:text-base md:text-lg">
                                                        {highlight}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* EQUIPMENT SECTION */}
            {service.equipment && service.equipment.length > 0 && (
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 text-center mb-12 sm:mb-16 text-gray-900">
                            Equipment & Machinery
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
                            {service.equipment.map((item: string, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 sm:p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-800 font-neuhas text-sm sm:text-base">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* TESTIMONIAL */}
            {service.testimonial && (
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="text-5xl sm:text-6xl md:text-7xl text-red-600/20 mb-6 sm:mb-8 font-serif leading-none">"</div>
                            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-apfel2 text-gray-800 mb-6 sm:mb-8 leading-relaxed">
                                {service.testimonial.quote}
                            </blockquote>
                            <div className="text-gray-600">
                                <p className="font-semibold text-lg sm:text-xl mb-1 font-neuhas">
                                    {service.testimonial.author}
                                </p>
                                <p className="text-base sm:text-lg font-neuhas">
                                    {service.testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* CTA SECTION */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 mb-4 sm:mb-6 md:mb-8 text-gray-900">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto font-neuhas leading-relaxed text-gray-700">
                        Let's discuss how our {service.title.toLowerCase()} expertise can help deliver your next project with excellence across India's most challenging terrains.
                    </p>
                    <CtaButton href="/contact">Contact Our Team</CtaButton>
                </div>
            </section>
        </>
    );
}