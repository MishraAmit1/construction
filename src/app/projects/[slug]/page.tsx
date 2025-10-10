import { demoProjects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin, Clock, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = demoProjects.find(
        (p) =>
            p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === params.slug
    );
    if (!project) return <div className="p-10">Project not found</div>;

    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] sm:min-h-[480px] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={project.image.imageUrl}
                        alt={project.image.description || project.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 mt-8 sm:mt-10">
                    <div className="max-w-full lg:max-w-3xl text-white">
                        <p className="text-yellow-400 font-thin tracking-widest mb-2 text-[14px] sm:text-[16px] uppercase">
                            PROJECTS
                        </p>
                        <h1 className="text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px] 
                                     leading-[1.1] sm:leading-[1.2] md:leading-[1.1] 
                                     font-medium font-headline mb-4 sm:mb-6">
                            {project.title}
                        </h1>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
                                    leading-[1.6] sm:leading-[1.7] md:leading-[1.8] 
                                    text-white/90">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- BREADCRUMB BAR ---------- */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">
                            HOME
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <Link href="/projects" className="hover:text-red-600">
                            PROJECTS
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">
                            {project.title}
                        </span>
                    </nav>
                </div>
            </div>

            {/* ---------- META INFO SECTION ---------- */}
            <div className="py-4 sm:py-6 border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 
                                grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 
                                text-gray-700 text-xs sm:text-sm">
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="bg-orange-100 text-orange-700 
                                       px-2 sm:px-3 py-1 rounded-full 
                                       flex items-center">
                            <Zap className="h-4 w-4 mr-1.5 sm:mr-2" />
                            <span className="font-semibold">Energy</span>
                        </span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <MapPin className="h-4 w-4 mr-1.5 sm:mr-2 text-red-600" />
                        <span>Texas, U.S.</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <Clock className="h-4 w-4 mr-1.5 sm:mr-2 text-red-600" />
                        <span>Active</span>
                    </div>
                </div>
            </div>

            {/* ---------- DESCRIPTION SECTION ---------- */}
            <section className="relative py-12 sm:py-16 md:py-20 text-gray-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_#0000000a_1px,_transparent_1px)] [background-size:16px_16px]" />
                <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-72">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                 font-normal leading-tight mb-4 sm:mb-6">
                        Meeting Global <br /> Demand for Energy
                    </h1>

                    <p className="text-gray-600 mb-3 sm:mb-4 text-[14px] sm:text-[16px] md:text-[18px]">
                        NextDecade is an energy company accelerating the path to a net-zero
                        future.
                    </p>
                    <p className="text-gray-600 text-[14px] sm:text-[16px] md:text-[18px]">
                        Bechtel is partnering with NextDecade to support their mission and
                        ensure greater energy security with their Rio Grande LNG (RGLNG)
                        project in Brownsville, Texas.
                        <span className="text-red-600 font-medium">
                            {" "}
                            On July 12, 2023, RGLNG issued the notice to proceed (NTP) to
                            Bechtel Energy Inc. (Bechtel)
                        </span>{" "}
                        to begin construction of Phase 1 under its lump-sum turnkey EPC
                        contracts.
                    </p>
                </div>
            </section>

            {/* ---------- ABOUT THE PROJECT ---------- */}
            <section className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE FULL‑WIDTH */}
                    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2024/11/2_Overview-rendering-of-RGLNG.png"
                            alt="Project site"
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="px-4 sm:px-6 md:px-8 lg:pr-16 py-8 sm:py-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                      font-normal mb-4 sm:mb-6">
                            About the Project
                        </h2>
                        <p className="text-gray-600 mb-3 sm:mb-4 
                                     text-[14px] sm:text-[16px] md:text-[18px]">
                            RGLNG is a natural gas and export terminal situated on a 984‑acre
                            site on the banks of the Brownsville ship channel. The first phase
                            of the RGLNG project consists of three liquefaction trains, two
                            storage tanks and one marine berth.
                        </p>
                        <p className="text-gray-600 
                                     text-[14px] sm:text-[16px] md:text-[18px]">
                            At full capacity, the five‑train facility will have a production
                            capacity of 27 million tonnes per annum (MTPA).
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- WORK WITH US ---------- */}
            <section className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-8 sm:mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center gap-8 sm:gap-12 md:gap-16">
                    {/* LEFT TEXT (wider) */}
                    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                      font-normal mb-6 sm:mb-8 
                                      -mt-8 sm:-mt-16 md:-mt-24 lg:-mt-28">
                            Work with Us
                        </h2>
                        <p className="text-gray-600 mb-3 sm:mb-4 
                                     text-[14px] sm:text-[16px] md:text-[18px] 
                                     leading-[1.6] sm:leading-[1.7]">
                            With a great project comes great growth for the local community. During the life
                            of the project, RGLNG will have many opportunities available to the Rio Grande
                            Valley workforce and wider community. The workforce is anticipated to reach
                            approximately 5,000 at peak construction.
                        </p>
                        <p className="text-gray-600 mb-4 sm:mb-6 
                                     text-[14px] sm:text-[16px] md:text-[18px] 
                                     leading-[1.6] sm:leading-[1.7]">
                            Explore our available job openings below and discover your next opportunity today!
                        </p>

                        <ul className="list-disc list-inside text-gray-700 
                                       mb-6 sm:mb-8 space-y-1.5 sm:space-y-2 
                                       text-[14px] sm:text-[16px] md:text-[18px]">
                            <li>RGLNG professional staff</li>
                            <li>RGLNG craft professionals</li>
                            <li>RGLNG NextDecade</li>
                        </ul>
                        <div className="mt-6 sm:mt-8">
                            <Link
                                href="/about"
                                className={cn(
                                    'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                    'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold',
                                    'bg-white text-red-600 transition-all duration-500 ease-out',
                                    'min-h-[48px] sm:min-h-[56px]',
                                    'w-full sm:w-auto'
                                )}
                            >
                                <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                                <span className="relative z-10 flex items-center">
                                    <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-8 w-8 sm:h-10 sm:w-10">
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </span>
                                    <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                                        Learn more about Life at Bechtel
                                    </span>
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE (narrower) */}
                    <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[390px]">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2024/11/1_RGLNG-berths-rendering-900x507.jpg"
                            alt="Work with us"
                            width={900}
                            height={507}
                            className="w-full h-full object-cover object-center rounded-md"
                        />
                    </div>
                </div>
            </section>

            {/* ---------- REGISTER TO BE A SUPPLIER ---------- */}
            <section className="relative bg-white py-16 sm:py-20 md:py-24 text-gray-800 overflow-hidden">
                {/* dotted background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,_#0000000a_1px,_transparent_1px)] [background-size:16px_16px]" />

                <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-72">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                                  font-normal leading-tight mb-4 sm:mb-6 md:mb-8">
                        Register to be a Supplier
                    </h2>

                    <p className="text-gray-600 mb-3 sm:mb-4 
                                 text-[14px] sm:text-[16px] md:text-[18px] 
                                 leading-[1.6] sm:leading-[1.7]">
                        RGLNG values local suppliers and recognizes the critical role they play in
                        supporting project operations, people, and local communities.
                    </p>
                    <p className="text-gray-600 mb-6 sm:mb-8 md:mb-10 
                                                                  text-[14px] sm:text-[16px] md:text-[18px] 
                                 leading-[1.6] sm:leading-[1.7]">
                        If you supply materials or provide services that RGLNG is likely to
                        purchase, please register on our Local Supplier Registration portal.
                    </p>

                    <Link
                        href="#"
                        className={cn(
                            'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                            'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold',
                            'bg-white text-red-600 transition-all duration-500 ease-out',
                            'min-h-[48px] sm:min-h-[56px]',
                            'w-full sm:w-auto'
                        )}
                    >
                        <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                        <span className="relative z-10 flex items-center">
                            <span className="flex items-center justify-center rounded-full -rotate-45 bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-8 w-8 sm:h-10 sm:w-10">
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </span>
                            <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                                Supplier Registration Portal
                            </span>
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 -rotate-45 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                        </span>
                    </Link>
                </div>
            </section>
        </>
    );
}