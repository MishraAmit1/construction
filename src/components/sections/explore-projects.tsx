import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
export default function ExploreProjects() {
    return (
        <section className="py-16 sm:py-24 bg-background" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
            backgroundSize: '20px 20px'
        }}>
            <div className="container text-start max-w-4xl mx-auto">
                <h2 className="font-headline text-center text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5">
                    Explore Our Projects
                </h2>
                <div className="flex items-center justify-center gap-2">
                    <div className="h-1 w-12 bg-gradient-to-r from-transparent to-red-500 rounded-full" />
                    <div className="h-1 w-8 bg-red-500 rounded-full" />
                    <div className="h-1 w-12 bg-gradient-to-l from-transparent to-red-500 rounded-full" />
                </div>
                <p className="mt-6 text-lg text-foreground/80">
                    Since 1898, A&T has helped customers complete more than 25,000 projects in 160 countries on all seven continents. And today, global demand for engineering and construction is accelerating at an astonishing pace. It is estimated that three-quarters of the infrastructure needed for 2050 has yet to be built, paving the way for the largest construction wave in history.
                </p>
                <p className="mt-6 text-lg text-foreground/80">
                    A&T teams are meeting this moment.
                </p>
                <p className="mt-4 text-lg text-foreground/80">
                    We have worked across a diverse set of markets delivering pragmatic solutions to tackle some of the world’s most complex challenges. Whether revitalizing chipmaking with advanced semiconductor manufacturing facilities, expanding transit systems and connecting communities, advancing renewable and nuclear energy, or securing critical mineral supply chains, our teams draw on our generations of knowledge to design and build resilient, sustainable infrastructure.
                </p>
                <div className="mt-12">
                    <Link
                        href="/about"
                        className={cn(
                            'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                            'px-6 py-2 text-base font-semibold bg-white text-red-600 transition-all duration-500 ease-out',
                            'min-h-[45px]' // fixed minimum height
                        )}
                    >
                        <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100
             origin-center transition-transform duration-500 ease-out" />
                        <span className="relative z-10 flex items-center">
                            <span className="flex items-center justify-center 
              rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-3 group-hover:mr-0 h-8 w-8">
                                <ArrowRight className="h-5 w-5" />
                            </span>
                            <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                                View More Projects
                            </span>
                            <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-500 group-hover:w-5
                   group-hover:opacity-100 group-hover:text-white group-hover:ml-3" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}