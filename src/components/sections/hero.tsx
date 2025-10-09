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
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
    const id = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
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

      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-8 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Text */}
            <div className="max-w-4xl text-left -mt-20">
              <h1 className="text-[clamp(48px,9vw,112px)] leading-[1.05] font-medium mb-8 text-white tracking-tight">
                We Live for a<br />Challenge
              </h1>
              <p className="text-[clamp(18px,2vw,22px)] leading-relaxed text-white/90 max-w-3xl">
                At Veritas, we partner with our customers to bring their ambitions to life,
                delivering projects that make a lasting, meaningful difference for people
                and communities across India.
              </p>
            </div>

            {/* Right Carousel Card – shifted further down */}
            <div className="relative w-[340px] lg:w-[330px] mt-44">   {/* ⬅️ yahan mt‑44 se aur niche gaya */}

              {/* Ghost shadow behind */}
              <div className="absolute -left-4 top-4 h-full w-full rounded-2xl bg-white/10 ring-1 ring-black/10 backdrop-blur-md -z-10" />

              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {featuredContent.map((item, i) => (
                    <CarouselItem key={item.id}>
                      <Card className="relative border-0 rounded-[12px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.1)] overflow-hidden">
                        <CardContent className="p-0">
                          {/* Top image with slight rounding */}
                          <div className="relative h-[180px] w-full overflow-hidden rounded-t-[12px]">
                            <Image
                              src={item.image.imageUrl}
                              alt={item.image.description}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Text + controls */}
                          <div className="p-[20px]">
                            <h3 className="text-[15.5px] font-medium text-[#111] leading-snug mb-6">
                              {item.title}
                            </h3>

                            <div className="flex items-center justify-between">
                              {/* Progress: active red bar + small dots */}
                              <div className="flex items-center gap-[5px]">
                                {featuredContent.map((_, index) => (
                                  <div
                                    key={index}
                                    className={
                                      index === current
                                        ? 'h-[4px] w-[28px] rounded-full bg-[#e60000]'
                                        : 'h-[8px] w-[8px] rounded-full bg-[#d8d8d8]'
                                    }
                                  />
                                ))}
                              </div>

                              {/* Circle arrow (soft pink bg) */}
                              <Link href="#" className="group">
                                <div className="h-[46px] w-[46px] flex items-center justify-center rounded-full bg-[#ffe5e5] group-hover:bg-[#ffdcdc] transition">
                                  <ArrowUpRight className="h-5 w-5 text-[#e60000]" />
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

              {/* 🎯 Arrows moved to left & right of card */}
              <button
                onClick={() => api?.scrollPrev()}
                className="absolute top-1/2 -left-6 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 hover:bg-white shadow-md flex items-center justify-center"
              >
                <ChevronLeft className="h-5 w-5 text-gray-900" />
              </button>

              <button
                onClick={() => api?.scrollNext()}
                className="absolute top-1/2 -right-6 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 hover:bg-white shadow-md flex items-center justify-center"
              >
                <ChevronRight className="h-5 w-5 text-gray-900" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}