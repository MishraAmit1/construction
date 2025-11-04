"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
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
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.scrollWidth / projects.length;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentIndex(newIndex);
        }
    };

    const scrollToIndex = (direction: "prev" | "next") => {
        if (scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / projects.length;
            const currentScroll = scrollRef.current.scrollLeft;

            scrollRef.current.scrollTo({
                left:
                    direction === "next"
                        ? currentScroll + itemWidth
                        : currentScroll - itemWidth,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener("scroll", handleScroll);
            return () => scrollElement.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <section className="font-apfel2 py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30 overflow-x-hidden">
            {/* Header Section - Full width container */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {/* Left Heading */}
                    <h2
                        className="font-apfel2 
                                 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 
                                 text-primary 
                                 leading-[1.1] sm:leading-[1.2] lg:leading-tight 
                                 text-center lg:text-left"
                    >
                        Where We Work
                    </h2>

                    {/* Right Paragraph */}
                    <p
                        className="text-[15px] md:text-[20px] font-neuhas
                                text-[#30454c] 
                                leading-[1.6] md:leading-[30px] 
                                max-w-full lg:max-w-3xl 
                                text-center lg:text-left 
                                mx-auto lg:ml-auto"
                    >
                        With operations in over 33 countries, our global reach and regional
                        expertise allow us to work anywhere in the world. From bustling
                        megacities to the most remote corners of the planet, we've delivered
                        projects on every continent.
                    </p>
                </div>
            </div>

            {/* Scrollable Projects Container - No right padding */}
            <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16">
                <div
                    ref={scrollRef}
                    className="w-full overflow-x-auto scroll-smooth 
           scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200"
                >
                    <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href="/projects"
                                className={cn(
                                    "group block flex-shrink-0",
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
                                        src={project.image.imageUrl}
                                        alt={project.image.description}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 85vw, 
                                   (max-width: 1024px) 48vw, 
                                   35vw"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 
                                        bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                    {/* Content Overlay */}
                                    <div className="absolute left-0 right-0 bottom-6
                                        px-4 sm:px-5 md:px-6 lg:px-8
                                        text-white">

                                        {/* Title - Always visible, fixed position */}
                                        <h3 className="font-apfel2 
                                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                                           font-semibold">
                                            {project.title}
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
                                                {project.description}
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
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div
                    className="flex items-center justify-center sm:justify-start 
                                gap-3 sm:gap-4 mt-6 sm:mt-8"
                >
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
                        {Math.min(currentIndex + visibleCount, projects.length)} of{" "}
                        {projects.length}
                    </span>

                    <button
                        onClick={() => scrollToIndex("next")}
                        disabled={currentIndex + visibleCount >= projects.length}
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
    );
}
