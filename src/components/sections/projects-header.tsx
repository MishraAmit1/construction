import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function ProjectsHeader() {
    return (
        <>
            {/* Hero section */}
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[78vh] py-12 flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/cons2.png"
                        alt="Wind Turbine over landscape"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs md:max-w-6xl text-white">
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px]">
                            PROJECTS
                        </p>

                        <h1 className="text-white font-normal font-apfel2 mb-4 md:mb-6 text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05] [text-wrap:balance]">
                            Building History
                        </h1>

                        <p className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px] leading-[1.6] md:leading-[36px] font-medium text-white/85 sm:text-white/90 md:max-w-4xl">
                            Nation-building infrastructure, engineering wonders, and iconic
                            landmarks: From revolutionizing urban mobility to powering
                            communities and enabling modern industry — our projects are
                            the ultimate testament to the breadth and depth of our expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Breadcrumb bar */}

            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600 font-neuhas tracking-wider">
                        <Link href="/" className="hover:text-red-600 transition-colors">HOME</Link>
                        <span className="mx-1.5 sm:mx-2">/</span>
                        <span className="text-red-600 font-semibold uppercase">PROJECTS</span>
                    </nav>
                </div>
            </div>
            {/* White search bar section (separate block) */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-5">
                    <div className="flex items-center justify-between rounded-md px-3 sm:px-4 py-2 sm:py-3">
                        {/* Search icon */}
                        <div className="flex items-center text-red-600">
                            <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                            <input
                                type="text"
                                placeholder="Search for Projects..."
                                className="w-full pl-2 sm:pl-3 text-sm sm:text-[20px] text-gray-700 placeholder-gray-400 focus:outline-none"
                            />
                        </div>

                        {/* Right Red Circle Button */}
                        <button
                            type="button"
                            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200"
                            aria-label="Search"
                        >
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}