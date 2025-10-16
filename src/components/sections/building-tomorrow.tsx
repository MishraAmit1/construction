import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BuildingTomorrow() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden"
    >
      {/* Left side grid pattern */}
      <div
        className="absolute inset-y-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 2px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Right side grid pattern */}
      <div
        className="absolute inset-y-0 right-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[300px] opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 2px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="container text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Heading - Responsive sizing */}
        <h2 className="font-apfel2 
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-normal text-primary leading-tight 
                     mb-4 sm:mb-5">
          Building Tomorrow, Together
        </h2>

        {/* Paragraphs - Responsive text and spacing */}
        <p className="mt-4 sm:mt-5 md:mt-8 mb-8 
                    text-[14px] sm:text-[16px] md:text-[22px] 
                    text-[#30454c] leading-[30px] font-neuhas
                    max-w-3xl mx-auto px-2 sm:px-0 text-start">
          With projects across Gujarat, Rajasthan, Jammu & Kashmir, and Ladakh, our reach and expertise in India's most challenging terrains are unmatched. At A&T Infracon, we don't just take on difficult infrastructure projects — we deliver them with precision and resilience. Whether constructing high-altitude roads, border security infrastructure, or renewable energy facilities, we lead with innovation, safety, and collaboration.
        </p>

        <p className="mt-3 sm:mt-4 
                    text-[14px] sm:text-[16px] md:text-[22px] 
                    text-[#30454c] leading-[30px] font-neuhas
                    max-w-3xl mx-auto px-2 sm:px-0 text-start">
          From engineers and project managers to skilled craft professionals, we value colleagues with diverse perspectives who are ready to embrace challenges and push the limits of what's possible in extreme environments.
        </p>

        {/* CTA Button - Responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-start">
          <Link
            href="/about"
            className={cn(
              'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
              'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5',
              'text-sm sm:text-[15px] md:text-base font-semibold',
              'text-red-600 transition-all duration-500 ease-out',
              'min-h-[40px] sm:min-h-[44px] md:min-h-[48px]',
              'hover:shadow-md',
              'w-full sm:w-auto max-w-xs sm:max-w-none mx-auto'
            )}
          >
            <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 
                               group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center justify-center">
              <span className="flex items-center justify-center rounded-full bg-red-600 text-white 
                                 transition-all duration-500 group-hover:w-0 group-hover:opacity-0 
                                 group-hover:scale-0 mr-2 sm:mr-2.5 md:mr-3 group-hover:mr-0 
                                 h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </span>
              <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white font-neuhas">
                Join the A&amp;T Team
              </span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 
                                       opacity-0 transition-all duration-500 
                                       group-hover:w-3.5 sm:group-hover:w-4 md:group-hover:w-5 
                                       group-hover:opacity-100 group-hover:text-white 
                                       group-hover:ml-2 sm:group-hover:ml-2.5 md:group-hover:ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}