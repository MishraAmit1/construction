import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Featured Projects
            </h2>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.slice(0, 3).map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link href="#" className="group block h-full">
                  <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end flex-grow">
                      <div>
                        <p className="text-sm font-semibold text-white/80 uppercase tracking-wider">{project.location}</p>
                        <h3 className="font-headline text-2xl font-bold mt-1 mb-2">{project.title}</h3>
                        <p className="text-sm text-white/90 line-clamp-2 h-[40px]">{project.description}</p>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <div className="h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent">
                            <ArrowUpRight className="h-6 w-6"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
