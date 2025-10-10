import Image from "next/image";
import projectbanner from "../../app/public/cons2.png"

export default function ProjectsHeader() {
    return (
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[360px] sm:min-h-[400px] md:min-h-[480px] flex items-center">
            {/* Background image */}
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

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-4 sm:mt-6 md:mt-10">
                <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl text-white">
                    <p className="text-yellow-400 font-thin tracking-widest mb-1 sm:mb-2 
                                 text-[12px] sm:text-[14px] md:text-[16px] 
                                 leading-[20px] sm:leading-[24px] md:leading-[30px]">
                        PROJECTS
                    </p>

                    <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] 
                                  leading-[1.05] sm:leading-[1.1] md:leading-[1.15] lg:leading-[100px] 
                                  font-medium font-headline 
                                  mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                        Building History
                    </h1>

                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 
                                 leading-[1.6] sm:leading-[1.7] md:leading-[1.8] lg:leading-[36px] 
                                 text-white/85 sm:text-white/90">
                        Nation-building infrastructure, engineering wonders, and iconic landmarks:
                        From revolutionizing urban mobility to powering communities and enabling
                        modern industry — our projects are the ultimate testament to the breadth
                        and depth of our expertise.
                    </p>
                </div>
            </div>
        </section>
    );
}