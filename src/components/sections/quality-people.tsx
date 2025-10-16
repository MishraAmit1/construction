import Image from 'next/image';
import Link from 'next/link';
import { qualityPeopleImage } from '@/lib/data';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function QualityPeople() {
  return (
    <section className="relative bg-primary text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={qualityPeopleImage.imageUrl}
          alt={qualityPeopleImage.description}
          fill
          className="object-cover opacity-20"
          data-ai-hint={qualityPeopleImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 sm:via-primary/80 to-primary/60 md:to-transparent" />
      </div>

      {/* Content Container - Responsive padding */}
      <div className="container relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

          {/* LEFT: Heading + Button */}
          <div className="text-center md:text-left">
            <h2 className="font-apfel2
                             text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                             font-normal leading-tight
                             max-w-md md:max-w-none mx-auto md:mx-0">
              Defined by the Quality of Our People
            </h2>

            {/* CTA Button - Responsive */}
            <div className="mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/about"
                className={cn(
                  'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                  'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3',
                  'text-sm sm:text-[15px] md:text-base font-semibold',
                  'bg-transparent text-white transition-all duration-500 ease-out',
                  'min-h-[48px] sm:min-h-[52px] md:min-h-[56px]',
                  'w-full sm:w-auto max-w-xs sm:max-w-none mx-auto md:mx-0',
                  'border border-white/30 md:border-transparent hover:border-transparent'
                )}
              >
                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 
                                       group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center justify-center md:justify-start">
                  <span className="flex items-center justify-center rounded-full bg-red-600 text-white 
                                         transition-all duration-500 group-hover:w-0 group-hover:opacity-0 
                                         group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 
                                         h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10">
                    <ArrowRight className="h-4 w-4 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5" />
                  </span>
                  <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white font-neuhas">
                    The People Behind the Projects
                  </span>
                  <ArrowRight className="h-4 w-4 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5 
                                               opacity-0 transition-all duration-500 
                                               group-hover:w-4 sm:group-hover:w-[18px] md:group-hover:w-5 
                                               group-hover:opacity-100 group-hover:text-white 
                                               group-hover:ml-2 sm:group-hover:ml-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Description Text */}
          <div className="text-center md:text-left px-2 sm:px-4 md:px-0">
            <p className="text-[14px] sm:text-[16px] md:text-[22px]
                            text-primary-foreground/90 sm:text-primary-foreground/85 md:text-primary-foreground/80
                            leading-[30px] font-neuhas
                            max-w-lg md:max-w-none mx-auto md:mx-0">
              Our team brings technical expertise, ingenuity, dedication, and hands-on experience to help our government and B2G clients realize ambitious infrastructure goals. We succeed through collaboration and a shared commitment to delivering lasting impact. Driven by the challenges of remote and extreme terrains, we continuously push the boundaries of what's achievable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}