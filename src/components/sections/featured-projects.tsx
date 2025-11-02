'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { getFeaturedProjects } from "@/lib/api/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // 🧠 Fetch dynamic projects from backend - LIMIT SET TO 9
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const data = await getFeaturedProjects(10); // 🔥 MAXIMUM 9 LATEST PROJECTS
      setProjects(data || []);
      setLoading(false);
    };
    fetchProjects();
  }, []);

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
  }, [projects]);

  return (
    <section className="font-apfel2 py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30 overflow-x-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight">
          Featured Projects
        </h2>
      </div>
      {loading ? (
        <div className="text-center text-gray-500 py-12">Loading projects…</div>
      ) : projects.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No featured projects found.</div>
      ) : (
        <>
          {/* Scrollable Projects Container - EXACT SAME AS WHERE WE WORK */}
          <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16">
            <div
              ref={scrollRef}
              className="w-full overflow-x-auto scroll-smooth 
                         scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200"
            >
              <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-4">
                {projects.map((project, index) => (
                  <Link
                    key={project.project_id}
                    href={`/projects/${project.project_slug}`}
                    className={cn(
                      "group block flex-shrink-0",
                      visibleCount === 1
                        ? "w-[85vw]"
                        : visibleCount === 2
                          ? "w-[48vw]"
                          : "w-[35vw]"
                    )}
                  >
                    <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[680px] 
                                    w-full rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={
                          project.thumbnail_image ||
                          project.banner_image ||
                          'https://via.placeholder.com/800x600'
                        }
                        alt={project.project_name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 85vw, 
                               (max-width: 1024px) 48vw, 
                               35vw"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 
                                      bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                      {/* Hover Overlay - ADDED THIS FOR BLACKISH EFFECT */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 
                                      transition-all duration-500 ease-in-out" />
                      {/* Content Overlay */}
                      <div className="absolute left-0 right-0 bottom-6
                                      px-4 sm:px-5 md:px-6 lg:px-8
                                      text-white">
                        <p className="text-yellow-400 uppercase">{project.location}</p>
                        {/* Title - Always visible, fixed position */}
                        <h3 className="font-apfel2 
                                       text-2xl sm:text-3xl md:text-4xl lg:text-[30px]  max-w-[85%] sm:max-w-sm">
                          {project.project_name}
                        </h3>

                        {/* Description - Smooth slide up from BELOW title */}
                        <div className="overflow-hidden 
                                        max-h-0 group-hover:max-h-32 sm:group-hover:max-h-40 md:group-hover:max-h-48
                                        transition-all duration-500 ease-in-out
                                        mt-2">
                          <p className="text-sm sm:text-base md:text-[16px]
                                        font-neuhas
                                        text-white/90 
                                        leading-relaxed
                                        pb-0
                                        max-w-[85%] sm:max-w-[80%] md:max-w-[80%]
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-500 ease-in-out">
                            {project.tagline || project.location || 'Infrastructure Excellence'}
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

                {/* Invisible spacer div for last card spacing */}
                <div className="flex-shrink-0 w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16" aria-hidden="true"></div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex items-center justify-center sm:justify-start 
                            gap-3 sm:gap-4 mt-6 sm:mt-8">
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
        </>
      )}
    </section>
  );
}