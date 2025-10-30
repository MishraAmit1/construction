"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function CtaButton({
    href,
    children,
    variant = "default",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "default" | "download";
}) {
    const icon =
        variant === "download" ? (
            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
        ) : (
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        );

    return (
        <Link
            href={href}
            className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-full",
                "px-4 sm:px-5 md:px-6 py-2 sm:py-2.5",
                "text-sm sm:text-[20px] font-semibold text-red-600 font-neuhas",
                "transition-all duration-500 ease-out mt-3",
                "min-h-[44px] sm:min-h-[48px]",
                "w-full sm:w-auto max-w-xs sm:max-w-none mx-auto md:mx-0"
            )}
        >
            {/* Background animation — fills red on hover */}
            <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />

            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center md:justify-start">

                {/* Left red icon bubble (collapses on hover) */}
                <span
                    className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 
                     group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 
                     h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
                >
                    {icon}
                </span>

                {/* Text */}
                <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                    {children}
                </span>

                {/* Right arrow fades in on hover */}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
            </span>
        </Link>
    );
}

export default function ModernSlaveryStatementPage() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[78vh] py-12 flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000"
                        alt="Modern Slavery Statement hero"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    {/* Overlay tone — same as the rest */}
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl text-white">
                        {/* Subtitle */}
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase">
                            LEGAL & COMPLIANCE
                        </p>

                        {/* Title */}
                        <h1
                            className="text-white font-normal font-apfel2 mb-4 md:mb-6
                   text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05]"
                        >
                            Modern Slavery <br className="hidden sm:block" />
                            Act Statement
                        </h1>

                        {/* Supporting text */}
                        <p
                            className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px]
                   leading-[1.6] md:leading-[36px] font-medium
                   text-white/85 sm:text-white/90 md:max-w-4xl"
                        >
                            Our commitment to preventing modern slavery and human trafficking in
                            our operations and supply chains.
                        </p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600 font-neuhas tracking-wider">

                        <Link href="/" className="hover:text-red-600">
                            HOME
                        </Link>
                        <span className="mx-1.5 sm:mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">
                            MODERN SLAVERY ACT STATEMENT
                        </span>
                    </nav>
                </div>
            </div>

            {/* DOWNLOAD SECTION */}
            <section className="bg-white py-10 sm:py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-4xl mx-auto">
                        {/* Download Statement Card */}
                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 md:p-10 mb-10 sm:mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4">
                                2024 Modern Slavery Act Statements
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-6">
                                Download our latest Modern Slavery Act Statement for the financial year.
                            </p>
                            <CtaButton href="/documents/modern-slavery-statement-2024.pdf" variant="download">
                                View Document
                            </CtaButton>
                        </div>

                        {/* Reporting Companies Section */}
                        <div className="mb-10 sm:mb-14">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-6">
                                Reporting Companies
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-8">
                                The A&T group of companies, or A&T, refers to A&T Group, Inc. and its direct and indirect subsidiaries collectively. A&T's principles, policies, management instructions, and functional procedures apply across the A&T group of companies and its organizations, including the following reporting commercial organizations and reporting entities.
                            </p>

                            {/* UK Section */}
                            <div className="mb-8 sm:mb-10">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-4">
                                    UK Modern Slavery Act 2015 reporting "Commercial Organization"
                                </h3>
                                <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                    This statement is made on behalf of A&T Limited (BLTD), a member of the A&T group of companies pursuant to the reporting requirements of Clause 54, Part 6 of the U.K. Modern Slavery Act 2015, and constitutes its Modern Slavery Act Statement for the financial year 1 January 2023 – 31 December 2023. BLTD is a private company limited by shares, registered in England & Wales (company number 506133) with its registered office at 2 Lakeside Drive, Park Royal, London NW10 7FQ, England. BLTD's board of directors approved this statement on 16 April 2024.
                                </p>
                            </div>

                            {/* Australian Section */}
                            <div className="mb-8 sm:mb-10">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-4">
                                    Australian Modern Slavery Act 2018 "Reporting Entities"
                                </h3>
                                <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                    This statement is also made on behalf of A&T Australia Proprietary Limited (BAPL) and A&T (Western Australia) Pty Ltd (BWAPL), both members of the A&T group of companies, pursuant to the reporting requirements of Part 2 of the Australia Modern Slavery Act 2018 and constitutes their Modern Slavery Act Statement for the financial year 1 January 2023 – 31 December 2023. BAPL is a proprietary company registered in Australia (company number ACN 006 334 505) with its registered office at Level 3, 540 Wickham Street, Brisbane, QLD, 4006, Australia. BAPL's board of directors approved this statement on 24 April 2024. BWAPL is a proprietary company registered in Australia (company number ACN 147 531 226) with its registered office at Level 12, 140 St. Georges Terrace, Perth, WA 6000, Australia. BWAPL's board of directors approved this statement on 24 April 2024.
                                </p>
                            </div>

                            {/* Canadian Section */}
                            <div className="mb-8 sm:mb-10">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-4">
                                    Canada's Fighting Against Forced Labour and Child Labour in Supply Chains Act
                                </h3>
                                <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                    This statement is also made on behalf of A&T Canada Co. (BCANDCO) and Northbech Co. (NOBC), both members of the A&T group of companies, pursuant to the reporting requirements of Part 2 of the Canadian Modern Slavery Act and constitutes their annual report for the financial year 1 January 2023 – 31 December 2023. BCANDCO is a proprietary company registered in Nova Scotia, Canada (company number 3053855), with its registered office at 600-1741 Lower Water Street, Halifax, NS, B3J 0J2, Canada. BCANDCO's board of directors approved this statement on 9 April 2024. BCANDCO is a wholly owned subsidiary of NOBC, which is a non-operating holding company. NOBC is a proprietary company registered in Nova Scotia, Canada (company number 3056281) with its registered office at Queen's Marque, 600-1741 Lower State Street, P.O. Box 997, Halifax, NS, B3J 2X2, Canada. NOBC's board of directors approved this statement on 16 April 2024.
                                </p>
                            </div>
                        </div>

                        {/* Additional Information Box */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 sm:p-8 rounded-r-lg">
                            <h3 className="text-xl sm:text-2xl font-apfel2 font-normal text-gray-900 mb-3">
                                Our Commitment
                            </h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                A&T is committed to maintaining the highest standards of ethical business conduct and compliance with all applicable laws. We have zero tolerance for modern slavery and human trafficking in our operations and supply chains.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}