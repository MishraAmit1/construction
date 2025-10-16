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
    <section className="bg-white font-apfel2 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background overflow-hidden">
      <div className="mx-auto pr-0 pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-28 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-start gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* LEFT: text column */}
          <div className="lg:-mt-20 xl:-mt-32 text-[#30454c]">
            <h2
              className="font-apfel2 text-[clamp(2rem,5vw,3.75rem)] 
                     leading-[1.05] sm:leading-tight font-medium text-gray-900"
            >
              Creating a <br className="hidden sm:block" />
              <span className="sm:hidden">Lasting Legacy</span>
              <span className="hidden sm:inline">Lasting Legacy</span>
            </h2>

            {/* Paragraphs */}
            <div className="font-neuhas space-y-4 sm:space-y-5 mt-5 sm:mt-6 text-[clamp(0.9rem,1.4vw,1.425rem)] leading-relaxed">
              <p>
                In 1989, A&T Infracon began as a small civil engineering firm in Gujarat,
                driven by the vision to deliver quality infrastructure in India’s most
                challenging terrains. Over 35 years, we have grown to execute projects
                across Gujarat, Rajasthan, Jammu & Kashmir, and Ladakh, navigating deserts,
                high‑altitude passes, and remote border regions.
              </p>

              <p>
                While much has evolved at A&T Infracon, our drive to pioneer and deliver in
                difficult environments has remained unwavering. Our history is defined by
                taking on complex projects, proving innovative solutions, and building where
                others face challenges.
              </p>

              <p className="hidden sm:block">
                We have constructed high‑altitude hill roads to the Indo‑China border,
                strengthened border infrastructure along the Indo‑Pak border, delivered
                renewable energy facilities, and developed institutional and industrial
                buildings under extreme conditions.
              </p>

              <p className="hidden md:block">
                We are one of the few companies capable of executing large‑scale projects in
                harsh and remote regions while maintaining the highest standards of quality,
                safety, and efficiency. Our legacy is best understood through the
                landmark projects that showcase our expertise and impact on India’s
                infrastructure.
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 sm:mt-12 -ml-8">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full
                       px-5 sm:px-6 md:px-8 py-2 text-sm sm:text-base font-semibold text-red-600
                       transition-all duration-500 ease-out min-h-[44px] sm:min-h-[48px]"
              >
                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center">
                  <span
                    className="flex items-center justify-center rounded-full bg-red-600 text-white
                           mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8
                           transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0"
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="whitespace-nowrap text-base sm:text-lg md:text-xl transition-colors duration-500 group-hover:text-white">
                    Explore Our History
                  </span>
                  <ArrowRight
                    className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 -translate-x-2
                           transition-all duration-500 group-hover:translate-x-0 
                           group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT: timeline + image card */}
          <div className="relative flex w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[620px] mt-10 lg:mt-0">
            <div className="flex gap-3 sm:gap-4 md:gap-6 w-full h-full pr-4 sm:pr-8 md:pr-12 lg:pr-0">
              {/* Decade buttons */}
              <div className="w-20 sm:w-24 md:w-28 relative flex-shrink-0 flex items-center justify-center">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {legacyData.map((item, i) => {
                    const active = activeIndex === i;
                    return (
                      <button
                        key={item.decade}
                        onClick={() => setActiveIndex(i)}
                        className={cn(
                          'relative w-full pl-6 sm:pl-7 md:pl-8 pr-2 sm:pr-3 py-1.5 sm:py-2 text-left rounded-full font-semibold transition-colors',
                          'text-gray-600 hover:text-gray-900',
                          active && 'bg-red-600 text-white'
                        )}
                      >
                        <span
                          className={cn(
                            'absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full',
                            active ? 'bg-white' : 'bg-gray-400/40'
                          )}
                        />
                        {item.decade}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Image / text card */}
              <div className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] group">
                {legacyData.map((project, i) => {
                  const active = i === activeIndex;
                  const dir = i > activeIndex ? 'translate-y-full' : '-translate-y-full';

                  return (
                    <div
                      key={project.decade}
                      className={cn(
                        'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform',
                        active
                          ? 'translate-y-0 opacity-100 z-20'
                          : `${dir} opacity-0 z-10`
                      )}
                    >
                      <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width:640px)100vw,(max-width:1024px)50vw,60vw"
                        priority={active}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 sm:from-black/85 via-black/50 sm:via-black/40 to-transparent" />

                      {/* Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 lg:p-10 text-white">
                        <p className="font-neuhas text-[11px] font-bold uppercase tracking-[0.15em] text-yellow-300/90">
                          {project.projectLocation}
                        </p>
                        <h3 className="font-apfel2 text-[clamp(1.25rem,2vw,2rem)] font-bold mt-1 sm:mt-2">
                          {project.projectTitle}
                        </h3>
                        <p className="font-neuhas mt-2 text-[clamp(0.8125rem,1vw,1rem)] text-white/90 line-clamp-3 sm:line-clamp-none pr-4 sm:pr-6 md:pr-8">
                          {project.projectDescription}
                        </p>
                      </div>

                      {/* Arrow button */}
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 -rotate-45" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* END right side */}
        </div>
      </div>
    </section>
  );
}