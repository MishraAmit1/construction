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
    <section className="relative min-h-screen h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero}
        alt={heroImage.description}
        fill
        priority
        className="object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

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
              <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[21px] xl:text-[22px] 
                          leading-relaxed text-white/90 max-w-full sm:max-w-2xl lg:max-w-3xl 
                          mx-auto lg:mx-0 px-2 sm:px-0">
                At A&T Infracon, we collaborate closely with our clients to turn their visions into reality — delivering infrastructure that shapes progress, empowers communities, and leaves a lasting impact on the world around us.
              </p>
            </div>

            {/* Right Carousel Card - OVERFLOW VISIBLE FIX */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:w-[310px] 
                          mt-6 sm:mt-12 md:mt-16 lg:mt-32 xl:mt-44 mx-auto lg:mx-0
                          overflow-visible"> {/* OVERFLOW VISIBLE ADDED */}

              {/* Ghost shadow */}
              <div className="hidden sm:block absolute -left-4 top-4 h-full w-full 
                            rounded-2xl bg-white/10 ring-1 ring-black/10 backdrop-blur-md -z-10" />

              <Carousel
                setApi={setApi}
                className="w-full overflow-hidden rounded-2xl"
                opts={{
                  align: "center", // CENTER se better work karega mobile pe
                  loop: true,
                  skipSnaps: false,
                  containScroll: "trimSnaps" // YE IMPORTANT HAI
                }}
              >
                <CarouselContent className="flex">
                  {featuredContent.map((item, i) => (
                    <CarouselItem
                      key={item.id}
                      className="basis-full flex-shrink-0 min-w-0" // MIN-W-0 IMPORTANT
                    >
                      <Card className="relative border-0 rounded-2xl bg-white 
                                     shadow-lg overflow-hidden mx-auto w-full h-full"> {/* H-FULL ADDED */}
                        <CardContent className="p-0">
                          {/* Top image */}
                          <div className="relative h-[150px] sm:h-[200px] md:h-[220px] w-full overflow-hidden">
                            {item.image?.imageUrl ? (
                              <Image
                                src={item.image.imageUrl}
                                alt={item.image.description || "Image"}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 280px, 320px"
                                priority={i === 0} // First image priority
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200" />
                            )}
                          </div>

                          {/* Text + controls */}
                          <div className="p-3 sm:p-5 md:p-6">
                            <h3 className="text-[13px] sm:text-[15px] md:text-[16px] font-medium text-black 
                                         leading-snug mb-3 sm:mb-5 md:mb-6 min-h-[2rem] sm:min-h-[3rem]">
                              {item.title}
                            </h3>

                            <div className="flex items-center justify-between">
                              {/* Progress indicators */}
                              <div className="flex items-center gap-1 sm:gap-2">
                                {featuredContent.map((_, index) => (
                                  <div
                                    key={index}
                                    className={
                                      index === current
                                        ? 'h-[3px] sm:h-1 w-[20px] sm:w-[28px] md:w-8 rounded-full bg-[#e60000] transition-all duration-300'
                                        : 'h-[5px] sm:h-2 w-[5px] sm:w-2 rounded-full bg-gray-300 transition-all duration-300'
                                    }
                                  />
                                ))}
                              </div>

                              {/* Circle arrow */}
                              <Link href="#" className="group">
                                <div className="h-[40px] sm:h-[52px] md:h-14 w-[40px] sm:w-[52px] md:w-14 
                                              flex items-center justify-center rounded-full 
                                              bg-[#ffd4d4] group-hover:bg-[#ffc4c4] transition-all duration-300 shadow-sm">
                                  <ArrowUpRight className="h-[16px] sm:h-5 md:h-6 w-[16px] sm:w-5 md:w-6 text-[#e60000] 
                                                         group-hover:scale-110 transition-transform" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation Arrows */}
              <button
                onClick={() => api?.scrollPrev()}
                className="absolute top-[40%] -left-2 sm:-left-4 lg:-left-6 -translate-y-1/2 z-20
                         h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 rounded-full bg-white hover:bg-gray-50 
                         shadow-md flex items-center justify-center
                         transition-all duration-200 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5 text-gray-800" />
              </button>

              <button
                onClick={() => api?.scrollNext()}
                className="absolute top-[40%] -right-2 sm:-right-4 lg:-right-6 -translate-y-1/2 z-20
                         h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 rounded-full bg-white hover:bg-gray-50 
                         shadow-md flex items-center justify-center
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