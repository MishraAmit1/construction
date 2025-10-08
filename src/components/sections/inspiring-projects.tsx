import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import { welderImage } from "@/lib/data";
import { cn } from "@/lib/utils";
import logo from "../../app/public/cons2.png"

export function InspiringProjects() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Extraordinary Teams Building Inspiring Projects
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              We deliver first-of-a-kind projects that improve quality of life, foster economic growth, and promote sustainable development worldwide — from clean and efficient transportation systems and sustainable energy solutions to advanced manufacturing facilities, critical mineral supply chains, energy infrastructure, and vital national security systems.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              We are humbled to be entrusted with work we love, building projects full of purpose, and solving critical challenges around the world.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className={cn(
                  "group relative inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-4 text-lg font-bold text-red-600 transition-all duration-300 focus:outline-none"
                )}
              >
                <span className="absolute -inset-full top-0 z-0 block h-full w-full -skew-x-12 transform bg-red-600 transition-all duration-300 ease-out group-hover:left-0 group-hover:skew-x-0" />
                <span className="relative z-10 flex items-center text-white">
                  <ArrowRightCircle className="h-8 w-8 mr-3 transition-colors duration-300" />
                  Our Vision, Values &amp; Commitments
                </span>
              </Link>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={logo}
              alt={welderImage.description}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint={welderImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
