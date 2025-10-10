'use client';
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function WhereWeWork() {
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
            const itemWidth = scrollRef.current.scrollWidth / projects.length;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentIndex(newIndex);
        }
    };

    const scrollToIndex = (direction: 'prev' | 'next') => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / projects.length;
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
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30 overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Header Section - Responsive Grid */}
                <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
                        {/* Left Heading - Responsive Typography */}
                        <h2 className="font-headline 
                                     text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 
                                     font-semibold text-primary 
                                     leading-[1.1] sm:leading-[1.2] lg:leading-tight 
                                     text-center lg:text-left">
                            Where We Work
                        </h2>

                        {/* Right Paragraph - Responsive Text */}
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
                                    text-foreground/80 
                                    leading-[1.6] sm:leading-[1.7] 
                                    max-w-full lg:max-w-2xl 
                                    text-center lg:text-left 
                                    mx-auto lg:ml-auto">
                            With operations in over 33 countries, our global reach and regional expertise
                            allow us to work anywhere in the world. From bustling megacities to the most
                            remote corners of the planet, we've delivered projects on every continent.
                        </p>
                    </div>
                </div>

                {/* Scrollable Projects Container */}
                <div
                    ref={scrollRef}
                    className="w-full overflow-x-auto scroll-smooth 
                               scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200"
                >
                    <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4 px-4 sm:px-6 md:px-8 lg:px-0">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href="#"
                                className={cn(
                                    "group block flex-shrink-0",
                                    visibleCount === 1 ? "w-[85vw] sm:w-full" :
                                        visibleCount === 2 ? "w-[calc((100vw-4rem)/2)]" :
                                            "w-[calc((100vw-6rem)/3)]"
                                )}
                            >
                                <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] 
                                                w-full rounded-lg overflow-hidden 
                                                shadow-md hover:shadow-lg 
                                                transform transition-all duration-300 
                                                group-hover:-translate-y-2">
                                    <Image
                                        src={project.image.imageUrl}
                                        alt={project.image.description}
                                        fill
                                        className="object-cover transition-transform duration-500 
                                                   group-hover:scale-105"
                                        sizes="(max-width: 640px) 85vw, 
                                               (max-width: 1024px) 50vw, 
                                               33vw"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 
                                                    bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                    {/* Content Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 
                                                    p-4 sm:p-5 md:p-6 
                                                    text-white flex flex-col 
                                                    justify-end overflow-hidden">
                                        {/* Sliding Text Container */}
                                        <div className="transform transition-transform 
                                                       duration-500 ease-in-out 
                                                       translate-y-8 group-hover:translate-y-0">
                                            {/* Location */}
                                            <div className="flex items-center gap-2 
                                                            mb-2 text-[12px] sm:text-sm 
                                                            font-medium text-white/80 
                                                            uppercase tracking-wider">
                                                <MapPin className="h-4 w-4" />
                                                {project.location}
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-headline 
                                                           text-xl sm:text-2xl 
                                                           font-bold">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-[13px] sm:text-sm 
                                                          text-white/90 
                                                          opacity-0 translate-y-full
                                                          group-hover:opacity-100 
                                                          group-hover:translate-y-0
                                                          transition-all duration-500 
                                                          ease-in-out mt-2 
                                                          line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Action Button */}
                                        <div className="mt-3 sm:mt-4 flex justify-end">
                                            <div className="h-10 w-10 sm:h-11 sm:w-11 
                                                            rounded-full bg-red-600 
                                                            text-white flex items-center 
                                                            justify-center 
                                                            transition-transform duration-300 
                                                            group-hover:scale-110 
                                                            group-hover:bg-accent">
                                                <ArrowUpRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center sm:justify-start 
                                gap-3 sm:gap-4 mt-6 sm:mt-8 
                                px-4 sm:px-0">
                    <button
                        onClick={() => scrollToIndex('prev')}
                        disabled={currentIndex === 0}
                        className="h-10 w-10 sm:h-11 sm:w-11 
                                   rounded-full bg-red-100 
                                   text-red-600 flex items-center 
                                   justify-center hover:bg-red-200 
                                   transition-colors 
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <span className="text-red-600 font-semibold text-sm sm:text-base">
                        {currentIndex + 1} – {Math.min(currentIndex + visibleCount, projects.length)} of {projects.length}
                    </span>

                    <button
                        onClick={() => scrollToIndex('next')}
                        disabled={currentIndex + visibleCount >= projects.length}
                        className="h-10 w-10 sm:h-11 sm:w-11 
                                   rounded-full bg-red-100 
                                   text-red-600 flex items-center 
                                   justify-center hover:bg-red-200 
                                   transition-colors 
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}