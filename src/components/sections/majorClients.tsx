'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Make sure to import cn utility

import logo1 from "../../app/public/Airports.png";
import logo2 from "../../app/public/GAIL.svg";
import logo3 from "../../app/public/Indian_Oil.svg";
import logo4 from "../../app/public/Ircon_International.png";
import logo5 from "../../app/public/Suzlon.svg";
import logo6 from "../../app/public/rnco.jpg";

const clients = [
    { name: 'Airports', logo: logo1 },
    { name: 'GAIL', logo: logo2 },
    { name: 'Indian Oil', logo: logo3 },
    { name: 'Ircon International', logo: logo4 },
    { name: 'Suzlon', logo: logo5 },
    { name: 'RNCO', logo: logo6 },
];

export default function MajorClients() {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [isMobile, setIsMobile] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    // Update visible count based on screen size
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);

            if (width < 640) {
                setVisibleCount(1);
            } else if (width < 768) {
                setVisibleCount(2);
            } else if (width < 1024) {
                setVisibleCount(3);
            } else {
                setVisibleCount(4);
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    // Handle scroll for mobile
    const handleScroll = () => {
        if (scrollRef.current && isMobile) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const itemWidth = scrollRef.current.scrollWidth / clients.length;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setIndex(newIndex);
        }
    };

    // Auto-play carousel (desktop only)
    useEffect(() => {
        if (!isMobile) {
            autoPlayRef.current = setInterval(() => {
                handleNext();
            }, 3000);

            return () => {
                if (autoPlayRef.current) {
                    clearInterval(autoPlayRef.current);
                }
            };
        }
    }, [isMobile, index]);

    const handleNext = () => {
        if (isMobile && scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / clients.length;
            scrollRef.current.scrollTo({
                left: scrollRef.current.scrollLeft + itemWidth,
                behavior: 'smooth'
            });
        } else {
            setIndex(prev => (prev + 1) % clients.length);
        }
    };

    const handlePrev = () => {
        if (isMobile && scrollRef.current) {
            const itemWidth = scrollRef.current.scrollWidth / clients.length;
            scrollRef.current.scrollTo({
                left: scrollRef.current.scrollLeft - itemWidth,
                behavior: 'smooth'
            });
        } else {
            setIndex(prev => (prev - 1 + clients.length) % clients.length);
        }
    };

    const handleDotClick = (idx: number) => {
        if (scrollRef.current && isMobile) {
            const itemWidth = scrollRef.current.scrollWidth / clients.length;
            scrollRef.current.scrollTo({
                left: idx * itemWidth,
                behavior: 'smooth'
            });
        } else {
            setIndex(idx);
        }
    };

    // Duplicated array for continuous slide on desktop
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading - Responsive */}
                <div className="mb-8 sm:mb-10">
                    <h2 className={cn(
                        "font-headline",
                        "text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px]",
                        "font-bold text-primary leading-tight mb-4 sm:mb-5",
                        "text-center sm:text-left"
                    )}>
                        MAJOR CLIENTS
                    </h2>
                    <div className="flex items-start gap-1.5 sm:gap-2 justify-center sm:justify-start">
                        <div className="h-[3px] sm:h-1 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                        <div className="h-[3px] sm:h-1 w-6 sm:w-8 bg-red-500 rounded-full" />
                        <div className="h-[3px] sm:h-1 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                    </div>
                </div>

                {/* Slider Container */}
                <div className="flex items-center justify-between relative">
                    {/* Left Arrow - Hidden on mobile */}
                    <button
                        onClick={handlePrev}
                        className={cn(
                            "hidden sm:flex p-2 sm:p-2.5 md:p-3",
                            "border border-gray-300 rounded-md z-20 bg-white",
                            "hover:bg-red-600 hover:text-white hover:border-red-600",
                            "transition-all duration-200 flex-shrink-0"
                        )}
                        aria-label="Previous clients"
                    >
                        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    {/* Track - Different behavior for mobile vs desktop */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className={cn(
                            "flex-1 mx-0 sm:mx-4 md:mx-6",
                            isMobile ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide" : "overflow-hidden"
                        )}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <div
                            className={cn(
                                "flex gap-3 sm:gap-4 md:gap-5 lg:gap-6",
                                !isMobile && "transition-transform duration-700 ease-in-out"
                            )}
                            style={!isMobile ? {
                                transform: `translateX(-${(index * 100) / visibleCount}%)`,
                            } : undefined}
                        >
                            {(isMobile ? clients : duplicatedClients).map((client, idx) => (
                                <div
                                    key={`${client.name}-${idx}`}
                                    className={cn(
                                        "flex-shrink-0 bg-white border border-gray-200",
                                        "rounded-lg shadow-sm hover:shadow-md transition-all",
                                        "flex flex-col items-center justify-center",
                                        "p-3 sm:p-4 md:p-5",
                                        isMobile ? "w-full snap-center" :
                                            visibleCount === 2 ? "w-[calc(50%-0.375rem)]" :
                                                visibleCount === 3 ? "w-[calc(33.333%-0.5rem)]" :
                                                    "w-[calc(25%-0.5625rem)]"
                                    )}
                                >
                                    <div className="relative w-24 h-16 sm:w-28 sm:h-18 md:w-32 md:h-20 lg:w-36 lg:h-22 xl:w-40 xl:h-24">
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">
                                        {client.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow - Hidden on mobile */}
                    <button
                        onClick={handleNext}
                        className={cn(
                            "hidden sm:flex p-2 sm:p-2.5 md:p-3",
                            "border border-gray-300 rounded-md z-20 bg-white",
                            "hover:bg-red-600 hover:text-white hover:border-red-600",
                            "transition-all duration-200 flex-shrink-0"
                        )}
                        aria-label="Next clients"
                    >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>

                {/* Mobile Navigation Dots */}
                <div className="flex sm:hidden items-center justify-center gap-2 mt-6">
                    {clients.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleDotClick(idx)}
                            className={cn(
                                "h-2 w-2 rounded-full transition-all duration-300",
                                idx === index ? "bg-red-600 w-6" : "bg-gray-300"
                            )}
                            aria-label={`Go to client ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}