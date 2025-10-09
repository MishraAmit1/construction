'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import logo from '../../app/public/cons2.png';
import { cn } from '@/lib/utils';

export function InspiringProjects() {
  return (
    <section className="bg-white overflow-hidden py-32">
      {/* left padding only */}
      <div className="mx-auto pr-0 pl-8 sm:pl-12 lg:pl-20 xl:pl-28">
        {/* wider image column */}
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center md:gap-24 lg:gap-32">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[clamp(36px,5vw,60px)] leading-tight font-medium text-gray-900">
              Extraordinary Teams Building<br />Inspiring Projects
            </h2>

            <p className="mt-8 text-[clamp(17px,1.2vw,20px)] text-gray-600 leading-relaxed max-w-3xl">
              We deliver first‑of‑a‑kind projects that improve quality of life, foster economic growth,
              and promote sustainable development — from clean and efficient transportation systems
              and sustainable energy solutions to advanced manufacturing facilities, critical mineral
              supply chains, energy infrastructure, and vital national security systems.
            </p>

            <p className="mt-6 text-[clamp(17px,1.2vw,20px)] text-gray-600 leading-relaxed max-w-3xl">
              We are humbled to be entrusted with work we love — building projects full of purpose
              and solving critical challenges around the world.
            </p>

            {/* CTA Button – same as before */}
            <div className="mt-12">
              <Link
                href="/about"
                className={cn(
                  'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                  'px-6 py-3 text-base font-semibold bg-white text-red-600 transition-all duration-500 ease-out',
                  'min-h-[56px]' // fixed minimum height
                )}
              >
                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center">
                  <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-3 group-hover:mr-0 h-10 w-10">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                  <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                    Our Vision, Values &amp; Commitments
                  </span>
                  <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-500 group-hover:w-5
                   group-hover:opacity-100 group-hover:text-white group-hover:ml-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE – taller + wider column */}
          <div className="relative h-[560px] sm:h-[640px] lg:h-[740px] overflow-hidden rounded-none md:rounded-l-lg shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
            <Image
              src={logo}
              alt="Inspiring Projects visual"
              fill
              className="object-cover object-center"
              sizes="(max-width:768px)100vw,60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}