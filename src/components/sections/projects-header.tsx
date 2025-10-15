import Image from "next/image";
import projectbanner from "../../app/public/cons2.png"

export default function ProjectsHeader() {
    return (
        <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] py-12 flex items-center">
            <div className="absolute inset-0">
                <Image
                    src={projectbanner}
                    alt="Wind Turbine over landscape"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Dark overlay with slightly more opacity on mobile for readability */}
                <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                <div className="max-w-xs md:max-w-6xl text-white ">
                    <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px]">
                        PROJECTS
                    </p>

                    <h1
                        className="text-white font-normal font-apfel2 mb-4 md:mb-6 text-[clamp(2rem,6.3vw,6.3rem)] leading-[1.05] [text-wrap:balance]"
                    >
                        Building History

                    </h1>

                    <p className="font-neuhas text-[14px] sm:text-[16px] md:text-[24px] leading-[1.6] md:leading-[36px] font-medium text-white/85 sm:text-white/90 md:max-w-4xl">
                        Nation-building infrastructure, engineering wonders, and iconic landmarks: From revolutionizing urban mobility to powering communities and enabling modern industry — our projects are the ultimate testament to the breadth and depth of our expertise.
                    </p>
                </div>
            </div>
        </section>
    );
}