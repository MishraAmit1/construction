'use client';
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const itemsPerView = 3;
  const totalItems = projects.length;

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
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="w-full">
        {/* Header with padding */}
        <div className="mb-12 px-4 sm:px-6 lg:px-28">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5 text-left">
            Featured Projects
          </h2>
          <div className="flex items-start gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
            <div className="h-1 w-8 bg-red-500 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Scrollable Container - NO padding */}
        <div
          ref={scrollRef}
          className="lg:px-28 w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200 scroll-smooth"
        >
          <div className="flex gap-6 pb-4" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            {projects.map((project) => (
              <Link
                key={project.id}
                href="#"
                className="group block flex-shrink-0"
                style={{ width: 'calc((100vw - 2rem - 3rem) / 3)' }}
              >
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end flex-grow overflow-hidden">
                    {/* Text container that shifts up on hover */}
                    <div className="transition-transform duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">
                      <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                        {project.location}
                      </p>
                      <h3 className="font-headline text-2xl font-bold mt-1 mb-2">
                        {project.title}
                      </h3>
                      {/* Description: hidden below, slides up smoothly from bottom on hover */}
                      <p
                        className="text-sm text-white/90 opacity-0 translate-y-full
                                   group-hover:opacity-100 group-hover:translate-y-0
                                   transition-all duration-500 ease-in-out mt-2 line-clamp-2"
                      >
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <div className="h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent">
                        <ArrowUpRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination counter */}
        <div className="flex items-center justify-start gap-4 mt-8 lg:px-28">
          <button
            onClick={() => scrollToIndex('prev')}
            disabled={currentIndex === 1}
            className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-red-600 font-semibold">
            {currentIndex} – {Math.min(currentIndex + itemsPerView - 1, totalItems)} of {totalItems}
          </span>

          <button
            onClick={() => scrollToIndex('next')}
            disabled={currentIndex >= totalItems - itemsPerView + 1}
            className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}