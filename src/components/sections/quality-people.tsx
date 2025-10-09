import Image from 'next/image';
import Link from 'next/link';
import { qualityPeopleImage } from '@/lib/data';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function QualityPeople() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="absolute inset-0">
        <Image
          src={qualityPeopleImage.imageUrl}
          alt={qualityPeopleImage.description}
          fill
          className="object-cover opacity-20"
          data-ai-hint={qualityPeopleImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold leading-tight">
              Defined by the Quality of Our People
            </h2>
            <div className="mt-12">
              <Link
                href="/about"
                className={cn(
                  'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                  'px-6 py-2 text-base font-semibold bg-transparent text-white transition-all duration-500 ease-out',
                  'min-h-[56px]' // fixed minimum height
                )}
              >
                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center">
                  <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 
                  group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-3 group-hover:mr-0 h-10 w-10">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                  <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                    The People Behind the Projects
                  </span>
                  <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-500 group-hover:w-5
                   group-hover:opacity-100 group-hover:text-white group-hover:ml-3" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-lg text-primary-foreground/80">
              Our people bring technical excellence, ingenuity, drive, creativity, and
              experience to help our customers achieve their bold visions. We succeed
              through partnership and a shared desire to make a difference. Motivated by
              tomorrow's challenges, we push the limits of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
