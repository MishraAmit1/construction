'use client';

import Image from 'next/image';
import { weAreVeritasImage } from '@/lib/data';
import logo from "../../app/public/cons3.png"

export function About() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full text-white overflow-hidden">
      {/* Image with subtle zoom animation */}
      <div className="absolute inset-0 scale-105 animate-[zoom_20s_ease-in-out_infinite]">
        <Image
          src={logo}
          alt={weAreVeritasImage.description}
          fill
          className="object-cover"
          data-ai-hint={weAreVeritasImage.imageHint}
        />
      </div>

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />

      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Title */}
            <div className="max-w-xl space-y-6">
              <div className="space-y-2">
                <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-400 rounded-full" />
                <h2 className="font-headline text-5xl font-bold md:text-6xl lg:text-7xl leading-tight tracking-tight">
                  <span className="block">We Are</span>
                  <span className="block bg-gradient-to-r from-white via-red-50 to-red-100 bg-clip-text text-transparent">
                    A&T Infracon
                  </span>
                </h2>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="max-w-lg">
              <div className="relative">
                {/* Decorative element */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-transparent rounded-full" />

                <p className="text-lg md:text-xl leading-relaxed text-white/95 pl-6">
                  Integrity, innovation, and a <span className="font-semibold text-white">"never settle"</span> mentality are at the core of everything we do. Our people are bold thinkers and skilled problem solvers who turn challenges into opportunities to achieve the extraordinary. Behind every hardhat and blueprint is a relentless drive to achieve what others cannot.
                </p>

                {/* Subtle glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 to-transparent rounded-lg blur-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}

      <style jsx>{`
        @keyframes zoom {
          0%, 100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}