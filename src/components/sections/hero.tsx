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
  type CarouselApi
} from '@/components/ui/carousel';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import hero from "../../app/public/hero.png";
import { heroImage, featuredContent } from '@/lib/data';

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    const id = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="font-apfel relative min-h-screen h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero}
        alt={heroImage.description}
        fill
        priority
        className="object-cover"
      />
      {/* Gradient Overlay */}
      <div className="font-apfel absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

      <div className="relative z-10 h-full flex flex-col justify-center py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">

            {/* Left Text */}
            <div className="max-w-full lg:max-w-4xl text-center lg:text-left mt-0 sm:-mt-10 lg:-mt-1">
              <h1 className="font-apfel2 text-[42px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px]
                           leading-[1.1] md:leading-[120px] font-medium mb-4 sm:mb-6 md:mb-8 
                           text-white tracking-[0.0208px]">
                We Thrive on Every<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Challenge
              </h1>
              <p className="font-apfel2 text-[14px] sm:text-[18px] md:text-[24px] 
                          leading-[36px] tracking-normal text-white/90 max-w-full sm:max-w-2xl lg:max-w-3xl 
                          mx-auto lg:mx-0 px-2 sm:px-0">
                At Bechtel, we partner with our customers to bring their ambitions to life, delivering projects that make a lasting, meaningful difference for people and communities around the world.
                {/* At A&T Infracon, we collaborate closely with our clients to turn their visions into reality — delivering infrastructure that shapes progress, empowers communities, and leaves a lasting impact on the world around us. */}
              </p>
            </div>

            {/* Right Carousel Card - OVERFLOW VISIBLE FIX */}
            <div className="relative w-full max-w-[280px] lg:w-[280px] 
  mt-6 sm:mt-12 md:mt-16 lg:mt-32 xl:mt-44 mx-auto lg:mx-0 overflow-visible">

              {/* Ghost card behind (badi white-ish sheet piche) */}
              <div
                aria-hidden
                className="hidden sm:block absolute -left-5 top-5
               h-[calc(90%)] w-[calc(100%-1px)]
               rounded-xl bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.15)]
               ring-1 ring-black/5 -z-10"
              />

              <Carousel
                setApi={setApi}
                className="w-full overflow-visible rounded-2xl"
                opts={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  containScroll: "trimSnaps"
                }}
              >
                <CarouselContent className="flex">
                  {featuredContent.map((item, i) => (
                    <CarouselItem key={item.id} className="basis-full flex-shrink-0 min-w-0">
                      {/* FRONT CARD */}
                      <Card
                        className="relative rounded-2xl bg-white 
                       shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)]
                       ring-1 ring-black/5
                       overflow-visible transition-all duration-300 hover:shadow-[0_16px_50px_-8px_rgba(0,0,0,0.28)]"
                      >
                        {/* Big white padding to mimic 'thick border' */}
                        <CardContent className="p-4 sm:p-5 md:p-6">
                          {/* Top image with inner rounded corners */}
                          <div className="relative w-full h-[150px] md:h-[140px]">
                            <div className="h-full w-full overflow-hidden rounded-xl ring-1 ring-black/5">
                              {item.image?.imageUrl ? (
                                <Image
                                  src={item.image.imageUrl}
                                  alt={item.image.description || "Image"}
                                  fill
                                  className="object-cover rounded-xl"
                                  sizes="(max-width: 640px) 280px, 320px"
                                  priority={i === 0}
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200" />
                              )}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="mt-4 text-[13px] sm:text-[15px] md:text-[16px] 
                             font-medium text-black leading-snug mb-4
                             min-h-[2rem] sm:min-h-[3rem]">
                            {item.title}
                          </h3>

                          {/* Bottom row: progress + CTA */}
                          <div className="flex items-center justify-between">
                            {/* Progress indicators: red pill + grey dots */}
                            <div className="flex items-center gap-2">
                              {featuredContent.map((_, index) => (
                                <div
                                  key={index}
                                  className={
                                    index === current
                                      ? "h-[6px] w-[36px] rounded-full bg-[#ff2a2a]"
                                      : "h-[8px] w-[8px] rounded-full bg-gray-300"
                                  }
                                />
                              ))}
                            </div>
                            {/* CTA circle with up-right arrow */}
                            <Link href="#" className="group">
                              <div
                                className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px]
                               rounded-full flex items-center justify-center
                               bg-gradient-to-br from-[#ffe1e1] to-[#fff0f0]
                               ring-1 ring-[#ffdede] shadow-sm
                               transition-all duration-300 hover:scale-105"
                              >
                                <ArrowUpRight
                                  className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]
                                 text-[#e60000] group-hover:scale-110 transition-transform"
                                />
                              </div>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation Arrows (outside, subtle) */}
              <button
                onClick={() => api?.scrollPrev()}
                className="absolute top-[40%] -left-2 sm:-left-4 lg:-left-6 -translate-y-1/2 z-20
               h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 rounded-full bg-white/95 hover:bg-white 
               ring-1 ring-black/10 shadow-md flex items-center justify-center
               transition-all duration-200 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5 text-gray-800" />
              </button>

              <button
                onClick={() => api?.scrollNext()}
                className="absolute top-[40%] -right-2 sm:-right-4 lg:-right-6 -translate-y-1/2 z-20
               h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 rounded-full bg-white/95 hover:bg-white 
               ring-1 ring-black/10 shadow-md flex items-center justify-center
               transition-all duration-200 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}