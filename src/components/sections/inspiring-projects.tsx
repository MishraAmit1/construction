'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import logo from '../../app/assets/cons2.png';
import { cn } from '@/lib/utils';
export function InspiringProjects() {
  return (
    <section className="bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      {/* Responsive padding */}
      <div className="mx-auto pr-0 pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-28">
        {/* Responsive grid with mobile-first approach */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-8 md:gap-12 lg:gap-20">

          {/* LEFT TEXT - Mobile responsive */}
          <div className="px-4 sm:px-6 md:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2
                             font-normal leading-tight">
              Extraordinary Teams
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Building Inspiring Projects
            </h2>
            <p className="mt-4 sm:mt-6 md:mt-8 
                            text-[16px] sm:text-[16px] md:text-[22px] 
                            text-gray-600 leading-[30px] font-neuhas
                            max-w-full md:max-w-3xl">
              We deliver first-of-a-kind infrastructure projects that strengthen connectivity, enhance security, and drive economic development across India — from high-altitude roads and border security structures to rural highway networks, institutional buildings, and renewable energy installations.
            </p>

            <p className="mt-4 sm:mt-5 md:mt-6 
                            text-[14px] sm:text-[16px] md:text-[22px] 
                            text-gray-600 leading-[30px] font-neuhas
                            max-w-full md:max-w-3xl">
              We are proud to be entrusted with work that matters, building projects with purpose, and overcoming complex challenges in some of the country's most demanding terrains.
            </p>

            {/* CTA Button - Responsive sizing */}
            <div className="mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/about"
                className={cn(
                  'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                  'px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold',
                  'bg-white text-red-600 transition-all duration-500 ease-out',
                  'min-h-[48px] sm:min-h-[52px] md:min-h-[56px]',
                  'w-full sm:w-auto' // Full width on mobile
                )}
              >
                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 
                                       origin-center transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center justify-center sm:justify-start">
                  <span className="flex items-center justify-center rounded-full bg-red-600 text-white 
                                         transition-all duration-500 group-hover:w-0 group-hover:opacity-0 
                                         group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 
                                         h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="text-[14px] sm:text-[15px] md:text-base font-neuhas
                                         whitespace-normal sm:whitespace-nowrap 
                                         transition-colors duration-500 group-hover:text-white">
                    Our Vision, Values &amp; Commitments
                  </span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 
                                               group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 
                                               group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE - Responsive heights */}
          <div className="relative mt-8 md:mt-0 
                        h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[740px] 
                        overflow-hidden 
                        rounded-lg sm:rounded-xl md:rounded-none md:rounded-l-lg 
                        shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:shadow-[0_6px_25px_rgba(0,0,0,0.1)] 
                        md:shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                        mx-4 sm:mx-6 md:mx-0">
            <Image
              src={logo}
              alt="Inspiring Projects visual"
              fill
              className="object-cover object-center"
              sizes="(max-width:640px)100vw,(max-width:768px)90vw,(max-width:1024px)60vw,50vw"
              priority
            />
            {/* Gradient overlay - lighter on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 sm:from-black/10 
                              via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}