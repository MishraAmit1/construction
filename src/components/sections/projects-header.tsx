import Image from "next/image";
import projectbanner from "../../app/public/cons2.png"
export default function ProjectsHeader() {
    return (
        <section className="relative h-[70vh] min-h-[480px] flex items-center">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={projectbanner} // apni image path yahan daalo
                    alt="Wind Turbine over landscape"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 sm:px-24 mt-10">
                <div className="max-w-3xl text-white">
                    <p className="text-yellow-400 font-thin tracking-widest mb-2 text-[16px] leading-[30px]">
                        PROJECTS
                    </p>
                    <h1 className="text-[96px] leading-[100px] font-medium font-headline mb-8">
                        Building History
                    </h1>
                    <p className="text-[24px] leading-[36px] text-white/90 ">
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