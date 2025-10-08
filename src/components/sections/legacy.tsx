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
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="md:sticky md:top-24">
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Creating a Lasting Legacy
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              For decades, A&Thas been the silent partner in India's growth story. What began as a small construction outfit evolved alongside the needs of a growing nation and a rapidly changing world.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Our history is a history of being first to market, providing proof of concept, and going where no one has. We built the first major dams, the first metro systems, and the highest bridges.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              We're one of the only companies in the world to lay nationwide highways, to build complex rail networks through impossible terrain, and to support our nation's most ambitious infrastructure goals. And we're just getting started.
            </p>

            <div className="mt-12">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-4 text-lg font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                <div className="h-14 w-14 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <span>Explore Our History</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE – INCREASED IMAGE WIDTH */}
          <div className="relative flex justify-center w-full">
            <div className="flex gap-6 w-full max-w-2xl">
              {/* Decade Buttons */}
              <div className="w-20 space-y-1 py-4 relative flex-shrink-0">
                <div className="absolute left-[calc(50%-0.2rem)] top-0 bottom-0 w-px bg-border -z-10" />
                {legacyData.map((item, index) => (
                  <button
                    key={item.decade}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'w-full text-left font-semibold py-2 px-6 rounded-3xl transition-all duration-300 relative flex items-center gap-2 text-sm',
                      'text-foreground/60 hover:text-foreground',
                      {
                        'bg-red-600 text-white shadow-md': activeIndex === index,
                      }
                    )}
                  >
                    <span
                      className={cn(
                        'absolute left-0 h-3 w-3 rounded-full bg-border border-2 border-background transition-colors',
                        { 'bg-red-600': activeIndex === index }
                      )}
                    ></span>
                    {item.decade}
                  </button>
                ))}
              </div>

              {/* Image Card - Increased Width */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl group flex-1 aspect-[3/3]">
                <Image
                  src={activeProject.image.imageUrl}
                  alt={activeProject.image.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    {activeProject.projectLocation}
                  </p>
                  <h3 className="font-headline text-2xl font-bold mt-1">
                    {activeProject.projectTitle}
                  </h3>
                  <p className="mt-2 text-sm text-white/90 line-clamp-3">
                    {activeProject.projectDescription}
                  </p>
                </div>

                {/* arrow button */}
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}