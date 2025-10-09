import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BuildingTomorrow() {
  return (
    <section className="py-16 sm:py-24 bg-background" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
      backgroundSize: '20px 20px'
    }}>
      <div className="container text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5">
          Building Tomorrow, Together
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-red-500 rounded-full" />
          <div className="h-1 w-8 bg-red-500 rounded-full" />
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-red-500 rounded-full" />
        </div>
        <p className="mt-6 text-lg text-foreground/80">
          With projects that span the nation, our reach and expertise are shaping the future of Indian infrastructure. At Veritas, we don’t just take on the world’s most challenging projects — we solve them.
        </p>
        <p className="mt-4 text-lg text-foreground/80">
          From engineers and project managers to skilled craft professionals, we seek colleagues with diverse perspectives who are ready to embrace challenges and push the boundaries of what's possible.
        </p>
        <div className="mt-12">
          <Link
            href="/about"
            className={cn(
              'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
              'px-6 py-2 text-base font-semibold bg-white text-red-600 transition-all duration-500 ease-out',
              'min-h-[45px]' // fixed minimum height
            )}
          >
            <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100
             origin-center transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center">
              <span className="flex items-center justify-center 
              rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-3 group-hover:mr-0 h-8 w-8">
                <ArrowRight className="h-5 w-5" />
              </span>
              <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                Join the A&amp;T Team
              </span>
              <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-500 group-hover:w-5
                   group-hover:opacity-100 group-hover:text-white group-hover:ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
