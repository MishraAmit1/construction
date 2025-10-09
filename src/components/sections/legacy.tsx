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
    <section className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
      {/* left padding only, right flush */}
      <div className="mx-auto pr-0 pl-8 sm:pl-12 lg:pl-20 xl:pl-28 mt-20">
        {/* grid with narrower left, wider right */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-start md:gap-24 lg:gap-32">
          {/* LEFT SIDE – text column */}
          <div className="-mt-40">
            <h2 className="text-[clamp(36px,5vw,60px)] leading-tight font-medium text-gray-900">
              Creating a <br />Lasting Legacy
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              In 1898, Warren A. Bechtel left Peabody, Kansas in search of construction work and opportunity out West. It was the first chapter in a history that would go on to span 126 years, 160 countries, and 25,000 projects. What began as a small construction outfit evolved alongside the needs of a growing nation and a rapidly changing world.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              While much has changed at Bechtel, the desire to explore new frontiers has remained a driving force. Our history is a history of being first to market, providing proof of concept, and going where no one has.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              We built the first nuclear power plant to produce electricity. We constructed the first pipeline under the Arctic. We were one of the first American construction companies to establish a presence in Saudi Arabia. We built the facilities that produced the first U.S. LNG exports in more than 40 years.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              We’re one of the only companies in the world to lay railroad track and fiber optic cable; to build shipyards and semiconductor factories; to support NASA’s moonshot in the early 1960s and now, its latest mission to send humans to Mars. And we’re just getting started. Our history is best understood by the incredible projects that have shaped it. Take a journey through our most iconic work by visiting WaaTeeKaa, our company’s virtual museum experience.
            </p>

            <div className="mt-12">
              <Link
                href="/about"
                className={cn(
                  'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                  'px-6 py-2 text-base font-semibold text-red-600 transition-all duration-500 ease-out',
                  'min-h-[48px]' // fixed minimum height
                )}
              >
                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center">
                  <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500
                   group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-3 group-hover:mr-0 h-8 w-8">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                  <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white text-xl">
                    Explore Our History
                  </span>
                  <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-500 group-hover:w-5
                   group-hover:opacity-100 group-hover:text-white group-hover:ml-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE – timeline + image card */}
          {/* IMPORTANT: parent has NO rounded/overflow/shadow (so timeline stays outside like img 1) */}
          <div className="relative flex w-full h-[560px] sm:h-[640px] lg:h-[620px]">
            <div className="flex gap-6 w-full h-full">
              {/* Decade Buttons – vertical timeline */}
              {/* Decade Buttons – vertical timeline (centered vertically) */}
              <div className="w-24 sm:w-28 relative flex-shrink-0 flex items-center justify-center">
                <div className="space-y-6">
                  {legacyData.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={item.decade}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          'relative w-full pl-8 pr-3 py-2 text-left text-[15px] font-semibold transition-colors rounded-full',
                          'text-foreground/60 hover:text-foreground',
                          isActive && 'bg-red-600 text-white'
                        )}
                      >
                        <span
                          className={cn(
                            'absolute left-2 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full',
                            isActive ? 'bg-white' : 'bg-foreground/30'
                          )}
                        />
                        {item.decade}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Image Card – smooth slide transition */}
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] group">
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
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        priority={isActive}
                      />

                      {/* gradient overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                      {/* text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-300/90">
                          {project.projectLocation}
                        </p>
                        <h3 className="font-headline text-3xl font-bold mt-2">
                          {project.projectTitle}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-white/90 break-words pr-8">
                          {project.projectDescription}
                        </p>
                      </div>

                      {/* arrow button */}
                      <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                        <ArrowRight className="h-5 w-5 -rotate-45" />
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