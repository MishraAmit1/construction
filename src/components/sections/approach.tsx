'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full
                 px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-red-600 transition-all duration-500 ease-out
                 min-h-[44px] sm:min-h-[48px] md:min-h-[56px]"
        >
            <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center">
                <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500
                         group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10">
                    <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 rotate-45" />
                </span>
                <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                    {children}
                </span>
                <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 opacity-0 rotate-45 transition-all duration-500 group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
            </span>
        </Link>
    );
}

export default function ApproachPage() {
    // simple stat reveal animation
    const [reveal, setReveal] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setReveal(true), 300);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            {/* HERO - Responsive */}
            <section className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center pt-[20px] sm:pt-[100px] md:pt-[120px]">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000"
                        alt="Approach hero"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75 sm:bg-black/70 md:bg-black/65" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-white">
                        <p className="text-yellow-400 tracking-widest mb-2 sm:mb-3 text-xs sm:text-sm uppercase">APPROACH</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] leading-[1.1] sm:leading-[1.05] font-medium font-headline mb-3 sm:mb-4 md:mb-6">
                            Dream, Design, <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>Deliver
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/85 sm:text-white/90 mb-5 sm:mb-6 md:mb-8 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
                            How we partner with customers to plan, engineer, and execute with safety, quality,
                            and ethics — delivering lasting impact worldwide.
                        </p>
                        <CtaButton href="#how">Learn More</CtaButton>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB - Responsive */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600">
                        <Link href="/" className="hover:text-red-600">HOME</Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">APPROACH</span>
                    </nav>
                </div>
            </div>

            {/* HOW WE DELIVER - Responsive */}
            <section id="how" className="bg-white py-10 sm:py-14 md:py-20 mb-16 sm:mb-24 md:mb-36">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-start px-4 sm:px-6 md:px-8">
                    <div className="lg:pl-8 xl:pl-16 2xl:pl-32 py-4 sm:py-6 md:py-8 lg:py-0">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.15] sm:leading-[1.2] md:leading-[64px] font-light text-gray-900 mb-6 sm:mb-8 md:mb-12">
                            How We Deliver
                        </h2>
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] md:leading-[1.8] lg:leading-[32px]">
                            <p>
                                Few companies have the scale and expertise to handle a project's full range of needs — from design to dismantlement. But as an engineering, procurement, construction, and project management leader, Bechtel is not only qualified to deliver the entire lifecycle of a project, but to deliver excellence at every stage.
                            </p>
                            <p>
                                We deploy this horizontal integration strategy to our customers' advantage. They benefit from our deep knowledge of the project's needs and our integrated EPC solutions that can be customized to reduce cost and complexity.
                            </p>
                            <p>
                                We also leverage vertical integration to improve the EPC value chain. By investing in companies that produce critical construction materials or specialize in highly sought after competencies — like pipe and steel fabrication — we can reduce the project delays and logistical setbacks faced by many of our competitors.
                            </p>
                            <div className="pt-4 sm:pt-6">
                                <CtaButton href="#how">Our Services</CtaButton>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 sm:space-y-6 md:space-y-8 px-0 sm:px-4 md:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden rounded-md">
                                <Image
                                    src="https://www.bechtel.com/wp-content/uploads/2025/01/127627-506x337.webp"
                                    alt="Industrial equipment"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden rounded-md">
                                <Image
                                    src="https://www.bechtel.com/wp-content/uploads/2025/01/1694565110427-506x365.webp"
                                    alt="LNG storage facility"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-md">
                            <Image
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/Cheniere-1-1024x768.webp"
                                alt="LNG facility construction"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SAFETY SECTION - Responsive */}
            <section className="mb-20 sm:mb-32 md:mb-40 lg:mb-52 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/Stand-Down-900x600.webp"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive spacing */}
                    <div className="pr-4 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-40 py-4 sm:py-6 md:py-8 lg:py-12 -mt-6 sm:-mt-12 md:-mt-16 lg:-mt-24">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 sm:mb-6 md:mb-9">
                            Safety and Well-Being Above All
                        </h2>
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Nothing is more important than the safety of our colleagues. We are steadfast in our commitment to ensuring that everyone, everywhere, returns home safely at the end of each day.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                To uphold this commitment, we've implemented best-in-class Environmental, Safety, and Health (ESH) standards for all employees worldwide. Developed by our safety experts, our ESH program integrates industry-leading, research-backed practices to protect colleagues on the job. Our goal is clear: zero lost time incidents and zero recordable incidents — and we are within reach.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our commitment to safety extends beyond the physical, addressing mental health with the same rigor we apply to physical safety. We're taking everything we've learned about protecting colleagues on the job and applying it to their mental health.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROVEN SAFETY PERFORMANCE - Responsive */}
            <section className="bg-white py-10 sm:py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <h4 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.2] sm:leading-[1.15] md:leading-[70.4px] font-medium text-gray-800 text-center mb-6 sm:mb-8 md:mb-10">Proven Safety Performance</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        {/* Left Stat - Responsive */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-3 sm:mb-4">
                                <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] sm:leading-[1.3] md:leading-[60px] font-bold text-red-600">0.014</span>
                                <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] leading-[1.2] sm:leading-[1.3] md:leading-[50px] font-normal text-gray-700">Lost-Time Incident Rate*</span>
                            </div>
                            <hr className="border-t border-gray-200 my-3 sm:my-4" />
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                We believe every on-the-job injury and environmental incident is preventable. Our longstanding commitment to zero incidents has enabled us to steadily reduce recordable and lost time incident rates. Our rates are among the lowest in the industry and significantly outperform the comparable industry benchmarks.
                            </p>
                        </div>

                        {/* Right Stat - Responsive */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-3 sm:mb-4">
                                <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] sm:leading-[1.3] md:leading-[60px] font-bold text-red-600">0.163</span>
                                <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] leading-[1.2] sm:leading-[1.3] md:leading-[50px] font-normal text-gray-700">Recordable Incident Rate*</span>
                            </div>
                            <hr className="border-t border-gray-200 my-3 sm:my-4" />
                            <p className="text-gray-700 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our safety culture is built on decades of experience developing and implementing the training, equipment, processes, and procedures needed to perform our work responsibly — many of which have helped to define new industry standards.
                            </p>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] sm:leading-[24px] text-gray-500 text-center mt-6 sm:mt-8 md:mt-10 italic">
                        *Statistics as of 2023
                    </p>
                </div>
            </section>

            {/* QUALITY - Responsive */}
            <section className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 mb-10 px-4 sm:px-6 md:px-8">
                {/* Responsive grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center gap-8 md:gap-12">

                    {/* LEFT TEXT - Responsive */}
                    <div className="px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-12 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 sm:mb-6 md:mb-8 lg:mb-10 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-28">
                            <span className="block">Delivering Quality</span>
                            <span className="block mt-1 sm:mt-2">You Can Trust</span>
                        </h2>
                        <div className="space-y-3 sm:space-y-4">
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Quality is at the core of our culture. We believe in doing work right the first time, every time, and we instill this value across the company. Our colleagues are accountable for delivering excellence — and we equip them with the programs and training to ensure success.
                            </p>
                            <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                                Our robust quality programs ensure focus on customer requirements and foster continuous improvement by incorporating lessons learned, reducing risk, enhancing performance, and maintaining the highest standards. Through our "systems thinking" approach, we leverage the full potential of our people, processes, and technology, ensuring seamless operational handoffs, strong cross-functional integration, and successful collaboration with customers, partners, suppliers, and subcontractors.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-5 md:mt-6">
                            <CtaButton href="#work">Learn more about Life at Bechtel</CtaButton>
                        </div>
                    </div>

                    {/* RIGHT IMAGE - Responsive */}
                    <div className="w-full h-full">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2024/11/1_RGLNG-berths-rendering-900x507.jpg"
                            alt="Work with us"
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[390px] object-cover object-center rounded-md"
                        />
                    </div>
                </div>
            </section>

            {/* ETHICS - Responsive */}
            <section className="mb-10 sm:mb-14 md:mb-20 px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {/* LEFT IMAGE - Responsive height */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                        <img
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/Ethics-Approach-900x600.webp"
                            alt="Project site"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                        />
                    </div>

                    {/* RIGHT TEXT - Responsive */}
                    <div className="pr-0 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-4 sm:py-6 md:py-8 lg:py-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 sm:mb-6 md:mb-9">
                            Operating with the Highest Ethical Standards
                        </h2>
                        <p className="text-gray-600 mb-4 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[30px]">
                            Integrity, honesty, and fairness are at the heart of our operations as a company and as a partner. We are committed to the highest standards of ethical business conduct and seek to work with customers and partners who share our values. Accordingly, we conduct all business transactions properly, fairly, impartially, and ethically, and we work with leading organizations to promote global standards of ethical business conduct.
                        </p>
                        <div className="mt-4 sm:mt-6">
                            <CtaButton href="#ethics">Learn More</CtaButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUSTAINABILITY - Responsive */}
            <section className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-background" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
                backgroundSize: '16px 16px sm:20px 20px'
            }}>
                <div className="container text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-3 sm:mb-4 md:mb-5">
                        Building a More Sustainable Future
                    </h2>
                    <div className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4">
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                            Every project is an opportunity to enhance quality of life and contribute to a safer, cleaner, and more equitable world.

                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                            We embed sustainability into every phase of project execution—from design to delivery. By leveraging advanced technologies, eco-friendly materials, and efficient processes, we minimize environmental impact and maximize resource efficiency. Working closely with our customers, suppliers, and partners, we share the responsibility of safeguarding our colleagues, communities, and the planet.
                        </p>
                    </div>
                    <div className="mt-6 sm:mt-8 md:mt-10">
                        <CtaButton href="#sustainability">Go Deeper</CtaButton>
                    </div>
                </div>
            </section>

            {/* ADVANCING SUSTAINABLE SOLUTIONS - Responsive */}
            <section id="advancing" className="relative">
                <div className="absolute inset-0">
                    {/* Video Background */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="https://www.bechtel.com/wp-content/uploads/2025/01/Bechtel-LEEDS-Technology.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/70 sm:bg-black/65 md:bg-black/60" />
                </div>

                {/* Content - Responsive padding */}
                <div className="relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 pt-[200px] sm:pt-[240px] md:pt-[280px] lg:pt-[320px] xl:pt-[380px] pb-6 sm:pb-8 md:pb-10 lg:pb-16">
                    <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl text-white">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 leading-tight">
                            Advancing Sustainable Solutions
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-white/85 sm:text-white/90 mb-6 sm:mb-8 leading-relaxed">
                            The Low Energy Ejector Desalination System (LEEDS) is at the heart of a comprehensive solution for produced water treatment in oil, gas, and mining operations.
                        </p>
                        <Link
                            href="#"
                            className="group inline-flex items-center gap-2 sm:gap-3 text-white font-semibold hover:gap-3 sm:hover:gap-4 transition-all duration-300"
                        >
                            <span className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300 shadow-lg">
                                <Play className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-0.5" />
                            </span>
                            <span className="text-sm sm:text-base md:text-lg">Explore videos and case studies</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* STRENGTHENING COMMUNITIES - Responsive */}
            <section className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-background" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
                backgroundSize: '16px 16px sm:20px 20px'
            }}>
                <div className="container text-start max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-3 sm:mb-4 md:mb-5">
                        Strengthening Communities
                    </h2>
                    <div className="space-y-3 sm:space-y-4">
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                            At A&T Infracon, we don’t just deliver infrastructure — we build lasting connections in the communities where we operate. Our teams integrate into local life, contributing time, skills, and resources beyond the scope of our projects.


                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                            We ensure our presence benefits local economies through local hiring, partnerships with small businesses, and educational and training opportunities for residents. By understanding each community deeply, we maximize our positive impact and give back to the places that host our work.

                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-foreground/80 leading-relaxed">
                            Our legacy is measured not only by the structures we build, but by the communities we strengthen — and that is a source of lasting pride.
                        </p>
                    </div>
                    <div className="mt-6 sm:mt-7 md:mt-8">
                        <CtaButton href="#sustainability">Supporting Communities</CtaButton>
                    </div>
                </div>
            </section>

            {/* FINAL EDGE‑TO‑EDGE IMAGE MOSAIC - Responsive */}
            <section className="w-full bg-white py-8 sm:py-12 md:py-16">
                {/* Mobile version - single column for small screens */}
                <div className="grid grid-cols-1 gap-4 mx-4 sm:hidden">
                    <div className="relative w-full h-[200px] overflow-hidden rounded-md">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/RL1_3563-675x450.webp"
                            alt="Project image 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full h-[200px] overflow-hidden rounded-md">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/139005-1-682x1024.webp"
                            alt="Project image 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full h-[200px] overflow-hidden rounded-md">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/B2P_Three-Female-Volunteers_Rwanda_Jun-2023-2023-06-26-at-12.19.45-PM-80-1-675x506.webp"
                            alt="Project image 3"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full h-[200px] overflow-hidden rounded-md">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/C0200104-675x450.webp"
                            alt="Project image 4"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full h-[200px] overflow-hidden rounded-md">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/08.12.24.Stuff_the_Bus.P1033076-675x449.webp"
                            alt="Project image 5"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Tablet/Desktop version - 3 column layout */}
                <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mx-0 px-4 sm:px-6 md:px-8">
                    {/* LEFT column */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[320px] overflow-hidden rounded-md">
                            <Image
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/RL1_3563-675x450.webp"
                                alt="Left top"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[320px] overflow-hidden rounded-md">
                            <Image
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/C0200104-675x450.webp"
                                alt="Left bottom"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* CENTER column */}
                    <div className="relative w-full h-[370px] sm:h-[410px] md:h-[520px] lg:h-[660px] overflow-hidden rounded-md">
                        <Image
                            src="https://www.bechtel.com/wp-content/uploads/2025/01/139005-1-682x1024.webp"
                            alt="Center main"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT column */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[320px] overflow-hidden rounded-md">
                            <Image
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/B2P_Three-Female-Volunteers_Rwanda_Jun-2023-2023-06-26-at-12.19.45-PM-80-1-675x506.webp"
                                alt="Right top"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[320px] overflow-hidden rounded-md">
                            <Image
                                src="https://www.bechtel.com/wp-content/uploads/2025/01/08.12.24.Stuff_the_Bus.P1033076-675x449.webp"
                                alt="Right bottom"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}