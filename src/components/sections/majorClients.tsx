'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Client } from '@/lib/api/clients';

interface MajorClientsProps {
    clients: Client[];
}

export default function MajorClients({ clients }: MajorClientsProps) {
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
        if (!isMobile && clients.length > visibleCount) {
            autoPlayRef.current = setInterval(() => {
                handleNext();
            }, 3000);

            return () => {
                if (autoPlayRef.current) {
                    clearInterval(autoPlayRef.current);
                }
            };
        }
    }, [isMobile, index, clients.length, visibleCount]);

    const handleNext = () => {
        if (clients.length <= visibleCount) return;

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
        if (clients.length <= visibleCount) return;

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

    // If no clients, don't render the section
    if (!clients.length) return null;

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
                            "transition-all duration-200 flex-shrink-0",
                            clients.length <= visibleCount && "opacity-50 cursor-not-allowed"
                        )}
                        disabled={clients.length <= visibleCount}
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
                            style={!isMobile && clients.length > visibleCount ? {
                                transform: `translateX(-${(index * 100) / visibleCount}%)`,
                            } : undefined}
                        >
                            {(isMobile ? clients : duplicatedClients).map((client, idx) => (
                                <div
                                    key={`${client.client_id}-${idx}`}
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
                                            src={client.logo_url}
                                            alt={client.client_name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">
                                        {client.client_name}
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
                            "transition-all duration-200 flex-shrink-0",
                            clients.length <= visibleCount && "opacity-50 cursor-not-allowed"
                        )}
                        disabled={clients.length <= visibleCount}
                        aria-label="Next clients"
                    >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>

                {/* Mobile Navigation Dots */}
                {isMobile && clients.length > 1 && (
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
                )}
            </div>

            <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}