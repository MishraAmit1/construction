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
import { heroImage } from '@/lib/data';
import { getAllBlogs } from '@/lib/api/blogs';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featured_image?: string;
  created_at: string;
  reading_time?: number;
}

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Fetch blogs on component mount
  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        // Get first 5 blogs for featured carousel
        setBlogs(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
        src="/images/hero.webp"
        alt={heroImage.description}
        fill
        priority
        className="object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      <div className="relative z-10 h-full flex flex-col justify-center py-6 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">

            {/* Left Text */}
            <div className="max-w-full lg:max-w-4xl text-center lg:text-left mt-12 sm:mt-0 lg:-mt-1">
              <h1 className="font-apfel2 text-[40px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px]
                           leading-[1.1] sm:leading-[1.15] md:leading-[120px] font-normal mb-3 sm:mb-6 md:mb-8 
                           text-white tracking-tight">
                We Thrive on Every<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Challenge
              </h1>
              <p className="font-neuhas text-[15px] sm:text-[16px] md:text-[22px] 
                          leading-[1.5] sm:leading-[1.6] md:leading-[36px] text-white/90 max-w-full sm:max-w-2xl lg:max-w-3xl 
                          mx-auto lg:mx-0 px-2 sm:px-0">
                At A&T Infracon, we collaborate closely with our clients to turn their visions into reality — delivering infrastructure that shapes progress, empowers communities, and leaves a lasting impact on the world around us.
              </p>
            </div>

            {/* Right Carousel Card - Blog Posts from Backend */}
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] lg:w-[280px] 
                          mt-4 sm:mt-8 md:mt-12 lg:mt-32 xl:mt-44 mx-auto lg:mx-0 overflow-visible">

              {/* Ghost card behind - hidden on mobile */}
              <div
                aria-hidden
                className="hidden md:block absolute -left-5 top-5
                         h-[calc(90%)] w-[calc(100%-1px)]
                         rounded-xl bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                         ring-1 ring-black/5 -z-10"
              />

              {!loading && blogs.length > 0 ? (
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
                    {blogs.map((blog, i) => (
                      <CarouselItem key={blog.id} className="basis-full flex-shrink-0 min-w-0">
                        {/* FRONT CARD */}
                        <Card
                          className="relative rounded-xl sm:rounded-2xl bg-white 
                                   shadow-[0_8px_30px_-6px_rgba(0,0,0,0.25)] sm:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)]
                                   ring-1 ring-black/5
                                   overflow-visible transition-all duration-300 hover:shadow-[0_16px_50px_-8px_rgba(0,0,0,0.28)]"
                        >
                          {/* Padding */}
                          <CardContent className="p-3 sm:p-4 md:p-5">
                            {/* Top image from Blog */}
                            <div className="relative w-full h-[120px] sm:h-[140px] md:h-[150px]">
                              <div className="h-full w-full overflow-hidden rounded-lg sm:rounded-xl ring-1 ring-black/5">
                                {blog.featured_image ? (
                                  <Image
                                    src={blog.featured_image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover rounded-lg sm:rounded-xl"
                                    sizes="(max-width: 640px) 260px, 280px"
                                    priority={i === 0}
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400 text-xs font-neuhas">No Image</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Blog Title */}
                            <h3 className="mt-3 sm:mt-4 text-[12px] sm:text-[14px] md:text-[16px] 
                                         font-medium text-black leading-tight sm:leading-snug mb-3 sm:mb-4 font-apfel2
                                         min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] line-clamp-2">
                              {blog.title}
                            </h3>

                            {/* Bottom row: progress + CTA */}
                            <div className="flex items-center justify-between">
                              {/* Progress indicators */}
                              <div className="flex items-center gap-1.5 sm:gap-2">
                                {blogs.map((_, index) => (
                                  <div
                                    key={index}
                                    className={
                                      index === current
                                        ? "h-[5px] sm:h-[6px] w-[28px] sm:w-[36px] rounded-full bg-[#ff2a2a]"
                                        : "h-[6px] sm:h-[8px] w-[6px] sm:w-[8px] rounded-full bg-gray-300"
                                    }
                                  />
                                ))}
                              </div>
                              {/* CTA circle - Link to Blog Detail */}
                              <Link href={`/blog/${blog.slug}`} className="group">
                                <div
                                  className="h-[38px] w-[38px] sm:h-[44px] sm:w-[44px] md:h-[52px] md:w-[52px]
                                           rounded-full flex items-center justify-center
                                           bg-gradient-to-br from-[#ffe1e1] to-[#fff0f0]
                                           ring-1 ring-[#ffdede] shadow-sm
                                           transition-all duration-300 hover:scale-105"
                                >
                                  <ArrowUpRight
                                    className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]
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
              ) : (
                // Loading State - Skeleton Card
                <Card className="relative rounded-xl sm:rounded-2xl bg-white shadow-[0_8px_30px_-6px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                  <CardContent className="p-3 sm:p-4 md:p-5">
                    <div className="relative w-full h-[120px] sm:h-[140px] md:h-[150px] bg-gray-200 rounded-lg animate-pulse" />
                    <div className="mt-3 sm:mt-4 h-8 bg-gray-200 rounded animate-pulse" />
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="h-2 w-8 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-2 w-2 bg-gray-200 rounded-full animate-pulse" />
                      </div>
                      <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Arrows - Mobile optimized */}
              {!loading && blogs.length > 0 && (
                <>
                  <button
                    onClick={() => api?.scrollPrev()}
                    className="absolute top-[35%] sm:top-[40%] -left-1 sm:-left-3 md:-left-4 lg:-left-6 -translate-y-1/2 z-20
                             h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full bg-white/95 hover:bg-white 
                             ring-1 ring-black/10 shadow-md flex items-center justify-center
                             transition-all duration-200 hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-gray-800" />
                  </button>

                  <button
                    onClick={() => api?.scrollNext()}
                    className="absolute top-[35%] sm:top-[40%] -right-1 sm:-right-3 md:-right-4 lg:-right-6 -translate-y-1/2 z-20
                             h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full bg-white/95 hover:bg-white 
                             ring-1 ring-black/10 shadow-md flex items-center justify-center
                             transition-all duration-200 hover:scale-110"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-gray-800" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}