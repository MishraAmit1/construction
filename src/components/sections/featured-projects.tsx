'use client';
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemsPerView, setItemsPerView] = useState(3);
  const totalItems = projects.length;

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / totalItems;
      const index = Math.round(scrollLeft / itemWidth) + 1;
      setCurrentIndex(Math.min(index, totalItems - itemsPerView + 1));
    }
  };

  const scrollToIndex = (direction: 'prev' | 'next') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / totalItems;
      const currentScroll = scrollRef.current.scrollLeft;

      if (direction === 'next') {
        scrollRef.current.scrollTo({
          left: currentScroll + itemWidth,
          behavior: 'smooth'
        });
      } else {
        scrollRef.current.scrollTo({
          left: currentScroll - itemWidth,
          behavior: 'smooth'
        });
      }
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
      <div className="w-full">
        {/* Header with responsive padding */}
        <div className="mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28">
          <h2 className="font-headline 
                       text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] 
                       font-bold text-primary leading-tight mb-4 sm:mb-5 text-center sm:text-left">
            Featured Projects
          </h2>
          <div className="flex items-start gap-1.5 sm:gap-2 justify-center sm:justify-start">
            <div className="h-[3px] sm:h-1 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
            <div className="h-[3px] sm:h-1 w-6 sm:w-8 bg-red-500 rounded-full" />
            <div className="h-[3px] sm:h-1 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Scrollable Container - Responsive padding */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200 scroll-smooth
                   lg:px-16 xl:px-20 2xl:px-28"
        >
          <div className="flex gap-4 sm:gap-5 md:gap-6 pb-4 px-4 sm:px-6 md:px-8 lg:px-0">
            {projects.map((project) => (
              <Link
                key={project.id}
                href="#"
                className="group block flex-shrink-0 w-[85vw] sm:w-[calc((100vw-4rem)/2)] lg:w-[calc((100vw-8rem-3rem)/3)] xl:w-[calc((100vw-10rem-3rem)/3)] 2xl:w-[calc((100vw-14rem-3rem)/3)]"
              >
                <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 sm:from-black/80 via-black/50 sm:via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white flex flex-col justify-end flex-grow overflow-hidden">
                    {/* Text container that shifts up on hover */}
                    <div className="transition-transform duration-500 ease-in-out translate-y-6 sm:translate-y-8 group-hover:translate-y-0">
                      <p className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider">
                        {project.location}
                      </p>
                      <h3 className="font-headline text-[20px] sm:text-[22px] md:text-[24px] font-bold mt-1 mb-2">
                        {project.title}
                      </h3>
                      {/* Description: hidden below, slides up smoothly from bottom on hover */}
                      <p
                        className="text-[13px] sm:text-sm text-white/90 opacity-0 translate-y-full
                                 group-hover:opacity-100 group-hover:translate-y-0
                                 transition-all duration-500 ease-in-out mt-2 line-clamp-2"
                      >
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-4 flex justify-end">
                      <div className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent">
                        <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination counter - Responsive */}
        <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 
                      px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28">
          <button
            onClick={() => scrollToIndex('prev')}
            disabled={currentIndex === 1}
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-red-100 text-red-600 
                     flex items-center justify-center hover:bg-red-200 transition-colors 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-red-600 font-semibold text-sm sm:text-base">
            {currentIndex} – {Math.min(currentIndex + itemsPerView - 1, totalItems)} of {totalItems}
          </span>

          <button
            onClick={() => scrollToIndex('next')}
            disabled={currentIndex >= totalItems - itemsPerView + 1}
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-red-100 text-red-600 
                     flex items-center justify-center hover:bg-red-200 transition-colors 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}