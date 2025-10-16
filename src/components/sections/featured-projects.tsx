'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { getFeaturedProjects } from "@/lib/api/projects"; // <-- Your backend function from supabase

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemsPerView, setItemsPerView] = useState(3);

  // 🧠 Fetch dynamic projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const data = await getFeaturedProjects(6); // <-- adjust limit if you want
      setProjects(data || []);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalItems = projects.length;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / totalItems;
      const index = Math.round(scrollLeft / itemWidth) + 1;
      setCurrentIndex(Math.min(index, totalItems - itemsPerView + 1));
    }
  };

  const scrollToIndex = (direction: "prev" | "next") => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / totalItems;
      const currentScroll = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left: currentScroll + (direction === "next" ? itemWidth : -itemWidth),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [projects]);

  return (
    <section className="font-apfel2 py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30">
      <div className="w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28">
          <h2
            className="font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center sm:text-left
                   leading-[1.05] [text-wrap:balance]
                   text-[clamp(1.75rem,4vw,3rem)] mb-4 sm:mb-5"
          >
            Featured Projects
          </h2>
        </div>

        {loading ? (
          <div className="text-center text-gray-500 py-12">Loading projects…</div>
        ) : projects.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No featured projects found.</div>
        ) : (
          <>
            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="w-full overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200
                     lg:px-16 xl:px-20 2xl:px-28"
            >
              <div className="flex gap-4 sm:gap-5 md:gap-6 pb-4 px-4 sm:px-6 md:px-8 lg:px-0">
                {projects.map((project) => (
                  <Link
                    key={project.project_id}
                    href={`/projects/${project.project_slug}`}
                    className="group block flex-shrink-0 
                           w-[85vw] sm:w-[calc((100vw-4rem)/2)] 
                           lg:w-[calc((100vw-8rem-3rem)/3)] 
                           xl:w-[calc((100vw-10rem-3rem)/3)] 
                           2xl:w-[calc((100vw-14rem-3rem)/3)]"
                  >
                    <div
                      className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] 
                             rounded-lg overflow-hidden shadow-lg flex flex-col
                             transform transition-transform duration-300 group-hover:-translate-y-2"
                    >
                      <Image
                        src={
                          project.thumbnail_image ||
                          project.banner_image ||
                          'https://via.placeholder.com/800x600'
                        }
                        alt={project.project_name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* softer bottom‑coverage gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 sm:from-black/80 via-black/50 sm:via-black/40 to-transparent" />

                      {/* Text / Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 text-white flex flex-col justify-end overflow-hidden 
                                  p-5 sm:p-6 md:p-8 lg:p-8 xl:p-9">
                        <div
                          className="transition-transform duration-500 ease-in-out 
                                 translate-y-10 sm:translate-y-12 group-hover:translate-y-0"
                        >
                          <p className="font-neuhas text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider mb-1">
                            {project.location || 'India'}
                          </p>
                          <h3 className="font-apfel2 text-[20px] sm:text-[22px] md:text-[24px] font-bold leading-snug">
                            {project.project_name}
                          </h3>
                          <p
                            className="font-neuhas text-[13px] sm:text-sm text-white/90 opacity-0 translate-y-full 
                                   group-hover:opacity-100 group-hover:translate-y-0
                                   transition-all duration-500 ease-in-out mt-3 line-clamp-2"
                          >
                            {project.tagline || '—'}
                          </p>
                        </div>

                        {/* Circle icon ‑ floated bit lower */}
                        <div className="mt-5 sm:mt-6 flex justify-end">
                          <div
                            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 
                                   rounded-full bg-red-600 text-white shadow-md
                                   flex items-center justify-center
                                   transition-transform duration-300 
                                   group-hover:scale-110 group-hover:bg-accent"
                          >
                            <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div
              className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 
                     mt-6 sm:mt-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28"
            >
              <button
                onClick={() => scrollToIndex('prev')}
                disabled={currentIndex === 1}
                className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full 
                       bg-red-100 text-red-600 flex items-center justify-center
                       hover:bg-red-200 transition-colors
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
                {currentIndex} – {Math.min(currentIndex + itemsPerView - 1, totalItems)} of {totalItems}
              </span>

              <button
                onClick={() => scrollToIndex('next')}
                disabled={currentIndex >= totalItems - itemsPerView + 1}
                className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full 
                       bg-red-100 text-red-600 flex items-center justify-center
                       hover:bg-red-200 transition-colors
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
          </>
        )}
      </div>
    </section>
  );
}