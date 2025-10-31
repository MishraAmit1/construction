"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function VisionValuesCommitments() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        setVideoLoaded(true);
    }, []);

    const valuesData = [
        {
            value: "We Live for a Challenge",
            commitments: [
                "Make our customers' ambitions a reality.",
                "Adapt quickly and always look for a better way."
            ]
        },
        {
            value: "We Do the Right Thing",
            commitments: [
                "Exercise the highest level of integrity and ethics.",
                "Create a positive legacy through purposeful and sustainable projects."
            ]
        },
        {
            value: "We Take Care of Each Other",
            commitments: [
                "Safety and well-being above all.",
                "Treat each other with the utmost respect."
            ]
        },
        {
            value: "We Succeed Together",
            commitments: [
                "Embrace our differences, seek diverse views, and listen to understand.",
                "Foster a deep sense of belonging."
            ]
        },
        {
            value: "We Build Trust",
            commitments: [
                "Develop lasting \"One Team\" relationships with our colleagues, customers, and partners.",
                "Hold ourselves accountable to deliver excellence."
            ]
        }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[78vh] py-12 flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://www.bechtel.com/wp-content/uploads/2024/11/vvcs-hero.webp"
                        alt="Vision Values Commitments hero"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    {/* Uniform overlay tone */}
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl text-white">
                        {/* Subtitle */}
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase">
                            VISION, VALUES & COMMITMENTS
                        </p>

                        {/* Heading */}
                        <h1
                            className="text-white font-normal font-apfel2 mb-4 md:mb-6
                   text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05]"
                        >
                            Leading with <br className="hidden sm:block" />
                            <span className="sm:hidden">&nbsp;</span>Our Values
                        </h1>

                        {/* Supporting paragraph */}
                        <p
                            className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px]
                   leading-[1.6] md:leading-[36px] font-medium
                   text-white/85 sm:text-white/90 md:max-w-4xl"
                        >
                            Our VV&Cs guide everything we do and serve as a promise to our partners,
                            neighbors, and colleagues to always do the right thing.
                        </p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div className="bg-[#edf3f5] border-b border-gray-200  fo">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600 font-neuhas tracking-wider">

                        <Link href="/" className="hover:text-red-600">
                            HOME
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <Link href="/people" className="hover:text-red-600">
                            PEOPLE
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">
                            VISION, VALUES & COMMITMENTS
                        </span>
                    </nav>
                </div>
            </div>
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
                <div className="container px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-44 items-center">

                        {/* Left side - Title & Button */}
                        <div className="text-center md:text-left">
                            {/* Heading - Responsive sizing */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-6 sm:mb-8 md:mb-12">

                                Our Vision, Values & Commitments
                            </h2>
                        </div>

                        {/* Right side - Content */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left px-2 sm:px-4 md:px-0">
                            <p className="text-[#30454c] text-[14px] sm:text-[16px] md:text-[22px] leading-[30px] font-neuhas max-w-2xl md:max-w-none mx-auto md:mx-0">
                                Our Vision, Values & Commitments (VV&Cs) reflect our “One Team” mentality and our approach to our partners, communities, and to each other. Most importantly, they are true to our people — our culture distilled to its essence.
                            </p>

                            {/* CTA Button - Responsive */}
                            <div className="mt-8 sm:mt-10 md:mt-12 md:-ml-8">
                                <Link
                                    href="/approach"
                                    className={cn(
                                        'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                        'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5',
                                        'text-sm sm:text-base font-semibold text-red-600',
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
                                        <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white font-neuhas text-[15px] sm:text-[16px] md:text-[20px] leading-[48`px]">
                                            Download Our Vision, Values & Commitments
                                        </span>
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* LARGE VIDEO SECTION WITH OVERLAYS */}
            <section className="relative w-full h-[400vh] sm:h-[350vh] md:h-[300vh]">
                {/* Background Video */}
                <div className="sticky top-0 w-full h-screen">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/Motorway-Construction-Clip-VVCs-Background_web.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Scrollable Content Overlays */}
                <div className="absolute top-0 w-full">
                    {/* Our Vision Section */}
                    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12">
                        <div className="text-start text-white max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl ">

                            <p className="text-yellow-400 tracking-widest mb-2 sm:mb-3 text-xs md:text-[18px] uppercase font-neuhas">
                                Our Vision

                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-[79px] leading-[1.2] md:leading-[90px] font-apfel2">
                                Extraordinary Teams Building Inspiring Projects
                            </h2>
                        </div>
                    </div>

                    {/* Values & Commitments Cards */}
                    <div className="min-h-[250vh] sm:min-h-[200vh] md:min-h-[150vh] flex items-center">
                        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
                                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                                    {valuesData.map((item, index) => (
                                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pb-8 sm:pb-10 md:pb-12 border-b border-gray-200 last:border-0">
                                            {/* Value */}
                                            <div>
                                                <h3 className="text-red-600 text-xs sm:text-sm md:text-[16px] uppercase tracking-widest mb-2 md:mb-4 font-semibold font-neuhas">
                                                    Value
                                                </h3>
                                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-apfel2 font-normal leading-tight text-gray-900">
                                                    {item.value}
                                                </p>
                                            </div>
                                            {/* Commitments */}
                                            <div>
                                                <h3 className="text-red-600 text-xs sm:text-sm md:text-[16px] uppercase tracking-widest mb-2 md:mb-4 font-semibold font-neuhas">
                                                    Commitments
                                                </h3>
                                                <ul className="space-y-2 sm:space-y-3 list-disc list-outside ml-5">
                                                    {item.commitments.map((commitment, idx) => (
                                                        <li key={idx} className="text-[15px] sm:text-[16px] md:text-[20px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[30px] pl-2">
                                                            {commitment}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEXT SECTION AFTER VIDEO */}
            <section className="bg-white py-10 sm:py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <p className="text-[15px] sm:text-[16px] md:text-[20px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[32px]">
                            How do we build the extraordinary? It takes more than steel and concrete. It takes creative thinkers, boundary breakers, and experts at the pinnacle of their field. At A&T, our people are all of those things. They take our VV&Cs to heart — and to their work every day.
                        </p>
                    </div>
                </div>
            </section>

            {/* SMALLER VIDEO SECTION */}
            <section className="relative bg-gray-900 h-[60vh] sm:h-[70vh] md:h-[80vh]">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source
                            src="https://www.bechtel.com/wp-content/uploads/2024/10/cc1f-461f-8141-e11ff17d8f6f-edited.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                        <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-white">
                            <p className="text-yellow-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
                                We Live for a Challenge
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight mb-6 sm:mb-8">
                                To The Extraordinary
                            </h2>
                            <Link
                                href="#"
                                className="group inline-flex items-center gap-2 sm:gap-3 text-white font-semibold hover:gap-3 sm:hover:gap-4 transition-all duration-300"
                            >
                                <span className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300 shadow-lg">
                                    <Play className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-0.5" />
                                </span>
                                <span className="text-sm sm:text-base md:text-lg font-neuhas">
                                    Watch the video (8:08)
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}