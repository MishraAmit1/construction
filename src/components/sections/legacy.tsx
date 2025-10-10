'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { legacyData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Legacy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = legacyData[activeIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background overflow-hidden">
      {/* Responsive padding */}
      <div className="mx-auto pr-0 pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-28 mt-8 sm:mt-12 md:mt-16 lg:mt-20">

        {/* Responsive grid - stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-start gap-8 md:gap-12 lg:gap-16 xl:gap-24">

          {/* LEFT SIDE – text column */}
          <div className="lg:-mt-20 xl:-mt-32">
            {/* Responsive heading */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] xl:text-[60px] leading-[1.1] sm:leading-tight font-medium text-gray-900">
              Creating a <br className="hidden sm:block" />
              <span className="sm:hidden">Lasting Legacy</span>
              <span className="hidden sm:inline">Lasting Legacy</span>
            </h2>

            {/* Responsive paragraphs */}
            <div className="space-y-3 sm:space-y-4">
              <p className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-foreground/80">
                In 1898, Warren A. A&T left Peabody, Kansas in search of construction work and opportunity out West. It was the first chapter in a history that would go on to span 126 years, 160 countries, and 25,000 projects. What began as a small construction outfit evolved alongside the needs of a growing nation and a rapidly changing world.
              </p>

              {/* Hide some paragraphs on mobile for better UX */}
              <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-foreground/80">
                While much has changed at A&T, the desire to explore new frontiers has remained a driving force. Our history is a history of being first to market, providing proof of concept, and going where no one has.
              </p>

              <p className="hidden sm:block text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-foreground/80">
                We built the first nuclear power plant to produce electricity. We constructed the first pipeline under the Arctic. We were one of the first American construction companies to establish a presence in Saudi Arabia. We built the facilities that produced the first U.S. LNG exports in more than 40 years.
              </p>

              <p className="hidden md:block text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-foreground/80">
                We're one of the only companies in the world to lay railroad track and fiber optic cable; to build shipyards and semiconductor factories; to support NASA's moonshot in the early 1960s and now, its latest mission to send humans to Mars. And we're just getting started. Our history is best understood by the incredible projects that have shaped it. Take a journey through our most iconic work by visiting WaaTeeKaa, our company's virtual museum experience.
              </p>
            </div>

            {/* Responsive button */}
            <div className="mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/about"
                className={cn(
                  'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                  'px-4 sm:px-5 md:px-6 py-2 text-sm sm:text-base font-semibold text-red-600 transition-all duration-500 ease-out',
                  'min-h-[44px] sm:min-h-[48px]'
                )}
              >
                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center">
                  <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500
                   group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-6 w-6 sm:h-8 sm:w-8">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white text-base sm:text-lg md:text-xl">
                    Explore Our History
                  </span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-5
                   group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE – timeline + image card */}
          <div className="relative flex w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[620px] mt-8 lg:mt-0">
            <div className="flex gap-3 sm:gap-4 md:gap-6 w-full h-full pr-4 sm:pr-8 md:pr-12 lg:pr-0">

              {/* Decade Buttons – responsive timeline */}
              <div className="w-20 sm:w-24 md:w-28 relative flex-shrink-0 flex items-center justify-center">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {legacyData.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={item.decade}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          'relative w-full pl-6 sm:pl-7 md:pl-8 pr-2 sm:pr-3 py-1.5 sm:py-2 text-left text-[13px] sm:text-[14px] md:text-[15px] font-semibold transition-colors rounded-full',
                          'text-foreground/60 hover:text-foreground',
                          isActive && 'bg-red-600 text-white'
                        )}
                      >
                        <span
                          className={cn(
                            'absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full',
                            isActive ? 'bg-white' : 'bg-foreground/30'
                          )}
                        />
                        {item.decade}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Image Card – responsive sizes */}
              <div className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] sm:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group">
                {legacyData.map((project, index) => {
                  const isActive = index === activeIndex;
                  const direction = index > activeIndex ? 'translate-y-full' : '-translate-y-full';

                  return (
                    <div
                      key={project.decade}
                      className={cn(
                        "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform",
                        isActive
                          ? "translate-y-0 opacity-100 z-20"
                          : `${direction} opacity-0 z-10`
                      )}
                    >
                      <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                        priority={isActive}
                      />

                      {/* Gradient overlay - stronger on mobile */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 sm:from-black/85 via-black/50 sm:via-black/40 to-transparent" />

                      {/* Text overlay - responsive */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 text-white">
                        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-yellow-300/90">
                          {project.projectLocation}
                        </p>
                        <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2">
                          {project.projectTitle}
                        </h3>
                        <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] md:text-[15px] lg:text-base text-white/90 line-clamp-3 sm:line-clamp-none pr-4 sm:pr-6 md:pr-8">
                          {project.projectDescription}
                        </p>
                      </div>

                      {/* Arrow button - responsive */}
                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 -rotate-45" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* END RIGHT SIDE */}
        </div>
      </div>
    </section>
  );
}