'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { ArrowUpRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import hero from "../../app/public/hero.png";
import { heroImage, featuredContent } from '@/lib/data';

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const total = featuredContent.length;

  React.useEffect(() => {
    if (!api) return;
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
    const id = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="relative h-[95vh] min-h-[750px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
      />
      {/* Overlays for video-like depth */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      {/* Content shifted upward now */}
      <div className="relative z-10 flex h-full flex-col justify-center items-start text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2  items-center">
            {/* Left Text Block */}
            <div>
              <h1 className="text-[110px] leading-[110px] drop-shadow-2xl">
                We Live for a<br />Challenge
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/95 drop-shadow-lg">
                At Veritas, we partner with our customers to bring their ambitions to life,
                delivering projects that make a lasting, meaningful difference for people and communities
                across India.
              </p>
            </div>

            {/* Right Carousel Floating Card */}
            <div className="relative flex justify-center md:justify-end mt-8">
              <Carousel setApi={setApi} className="max-w-sm w-full relative">
                <CarouselContent>
                  {featuredContent.map((item, index) => (
                    <CarouselItem key={item.id}>
                      <Card className="border-0 rounded-2xl shadow-2xl bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <div className="overflow-hidden rounded-t-2xl">
                            <Image
                              src={item.image.imageUrl}
                              alt={item.image.description}
                              width={600}
                              height={300}
                              className="object-cover w-full h-48"
                              data-ai-hint={item.image.imageHint}
                            />
                          </div>

                          <div className="p-6">
                            <h3 className="font-headline text-xl font-semibold text-gray-900 mb-3">
                              {item.title}
                            </h3>

                            <div className="flex items-center justify-between gap-3">
                              {/* Progress dots & red line */}
                              <div className="flex-1">
                                <div className="flex gap-[4px] mb-1">
                                  {featuredContent.map((_, i) => (
                                    <span
                                      key={i}
                                      className={`h-1.5 w-4 rounded-full transition-all ${i === current ? 'bg-red-600' : 'bg-gray-300'}`}
                                    ></span>
                                  ))}
                                </div>
                                <Progress
                                  value={((current + 1) / total) * 100}
                                  className="h-1 bg-gray-200 [&>div]:bg-red-600"
                                />
                              </div>

                              {/* Red Circular Arrow */}
                              <Link href="#" className="ml-2 hover:scale-110 transition-transform">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-rose-100 text-red-600">
                                  <ArrowUpRight className="h-6 w-6" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Arrows like Bechtel’s */}
                <div className="absolute inset-y-0 -right-16 hidden md:flex items-center gap-2">
                  <CarouselPrevious className="static rounded-full bg-white/90 hover:bg-white text-black border-none shadow-md" />
                  <CarouselNext className="static rounded-full bg-white/90 hover:bg-white text-black border-none shadow-md" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}