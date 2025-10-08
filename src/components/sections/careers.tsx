import Image from 'next/image';
import { careersHeroImage } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Careers() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full text-white">
      <Image
        src={careersHeroImage.imageUrl}
        alt={careersHeroImage.description}
        fill
        className="object-cover"
        data-ai-hint={careersHeroImage.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container max-w-7xl pb-24">
          <div className="max-w-3xl">
            <h1 className="font-headline text-5xl font-bold md:text-6xl lg:text-7xl">
              Join a team that’s changing how the world is built
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              We are always looking for the right people to join our team. Our
              projects offer you the opportunity to work on some of the most
              complex and challenging engineering and construction jobs in the
              world.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
                Search for jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
