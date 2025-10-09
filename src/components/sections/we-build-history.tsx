import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WeBuildHistory() {
  return (
    <section className="py-16 sm:py-24 bg-background xl:px-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl lg:text-[64px] font-medium text-primary leading-[70.4px]">
              We Build History
            </h2>
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
                    Explore More Projects
                  </span>
                  <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-500 group-hover:w-5
                   group-hover:opacity-100 group-hover:text-white group-hover:ml-3" />
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-6 text-foreground/80 text-[20px] leading-[30px]">
            <p>
              The 21st century and beyond will be shaped by the world's ability to work at speed and at scale to meet fast-evolving needs for infrastructure, energy, advanced manufacturing, critical resources, environmental protection, and national security.
            </p>
            <p>
              For decades, we have risen to the occasion. With our unique expertise and experience, A&Tis purpose-built to tackle these challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
