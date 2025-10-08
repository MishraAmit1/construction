import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle, ShieldCheck } from 'lucide-react';
import { weAreVeritasImage } from '@/lib/data';
import logo from "../../app/public/cons3.png"

export function About() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full text-white">
      <Image
        src={logo}
        alt={weAreVeritasImage.description}
        fill
        className="object-cover"
        data-ai-hint={weAreVeritasImage.imageHint}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h2 className="font-headline text-5xl font-bold md:text-6xl lg:text-7xl">
                We Are A&T infracon
              </h2>
              {/* <div className="mt-8 flex items-center gap-6">
                <Link href="#" className="group flex items-center gap-3">
                  <PlayCircle className="h-16 w-16 text-red-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-lg">Doing What Can't Be Done</p>
                    <p className="text-sm text-white/80">Watch the video (4:45)</p>
                  </div>
                </Link>
                <ShieldCheck className="h-16 w-16 text-blue-500" />
              </div> */}
            </div>
            <div className="max-w-lg text-lg text-white/90">
              <p>
                Integrity, innovation, and a "never settle" mentality are at the core of
                everything we do. Our people are bold thinkers and skilled problem solvers
                who turn challenges into opportunities to achieve the extraordinary.
                Behind every hardhat and blueprint is a relentless drive to achieve what
                others cannot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
