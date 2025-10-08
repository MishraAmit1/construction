import Image from 'next/image';
import Link from 'next/link';
import { qualityPeopleImage } from '@/lib/data';
import { ArrowRightCircle } from 'lucide-react';
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
            <div className="mt-8">
               <Link
                href="/team"
                className="group inline-flex items-center text-lg font-semibold text-red-400 transition-colors duration-300 hover:text-white focus:outline-none"
              >
                  <div className="h-10 w-10 mr-4 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRightCircle className="h-6 w-6"/>
                  </div>
                  <span>The People Behind the Projects</span>
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
