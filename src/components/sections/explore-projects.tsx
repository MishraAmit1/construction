import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExploreProjects() {
    return (
        <section
            className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-background"
            style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
                backgroundSize: '16px 16px sm:20px 20px'
            }}
        >
            <div className="container text-start max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6">
                {/* Responsive heading */}
                <h2 className="font-headline text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-primary leading-tight mb-3 sm:mb-4 md:mb-5">
                    Explore Our Projects
                </h2>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <div className="h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-transparent to-red-500 rounded-full" />
                    <div className="h-0.5 sm:h-1 w-6 sm:w-8 bg-red-500 rounded-full" />
                    <div className="h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 bg-gradient-to-l from-transparent to-red-500 rounded-full" />
                </div>

                {/* Responsive paragraphs */}
                <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 md:space-y-6">
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                        Since 1898, A&T has helped customers complete more than 25,000 projects in 160 countries on all seven continents. And today, global demand for engineering and construction is accelerating at an astonishing pace. It is estimated that three-quarters of the infrastructure needed for 2050 has yet to be built, paving the way for the largest construction wave in history.
                    </p>

                    <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                        A&T teams are meeting this moment.
                    </p>

                    <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                        We have worked across a diverse set of markets delivering pragmatic solutions to tackle some of the world's most complex challenges. Whether revitalizing chipmaking with advanced semiconductor manufacturing facilities, expanding transit systems and connecting communities, advancing renewable and nuclear energy, or securing critical mineral supply chains, our teams draw on our generations of knowledge to design and build resilient, sustainable infrastructure.
                    </p>
                </div>

                {/* Responsive button */}
                <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center sm:justify-start">
                    <Link
                        href="/about"
                        className={cn(
                            'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                            'px-4 sm:px-5 md:px-6 py-2 text-sm sm:text-base font-semibold bg-white text-red-600 transition-all duration-500 ease-out',
                            'min-h-[40px] sm:min-h-[45px] border border-gray-100 shadow-sm'
                        )}
                    >
                        <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                        <span className="relative z-10 flex items-center">
                            <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-6 w-6 sm:h-8 sm:w-8">
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </span>
                            <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white text-sm sm:text-base">
                                View More Projects
                            </span>
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}