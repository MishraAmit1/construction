import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function WeBuildHistory() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight">
              We Build History
            </h2>
            <div className="mt-8">
              <Link href="/projects" className="group inline-flex items-center gap-4 text-lg font-semibold text-red-600 hover:text-red-700 transition-colors">
                <div className="h-14 w-14 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <span>Explore More Projects</span>
              </Link>
            </div>
          </div>
          <div className="space-y-6 text-foreground/80 text-lg">
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
