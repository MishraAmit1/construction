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

export default function TermsOfUsePage() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[78vh] py-12 flex items-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000"
                        alt="Terms of Use hero"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    {/* Consistent overlay tone */}
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl text-white">
                        {/* Subtitle */}
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase">
                            LEGAL
                        </p>

                        {/* Heading */}
                        <h1
                            className="text-white font-normal font-apfel2 mb-4 md:mb-6
                   text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05]"
                        >
                            Terms of Use
                        </h1>

                        {/* Description */}
                        <p
                            className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px]
                   leading-[1.6] md:leading-[36px] font-medium
                   text-white/85 sm:text-white/90 md:max-w-4xl"
                        >
                            Please read these terms carefully before using our website.
                            Your use of this site constitutes acceptance of these terms.
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
                            TERMS OF USE
                        </span>
                    </nav>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <section className="bg-white py-10 sm:py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                    <div className="max-w-4xl mx-auto">
                        {/* Introduction */}
                        <div className="mb-8 sm:mb-12">
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-6">
                                If you do not agree with the terms or have any questions, contact us before proceeding and we will be pleased to assist you. By choosing to access and use this site, you are expressly agreeing to be bound by these terms.
                            </p>
                        </div>

                        {/* License and Site Access */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                License and Site Access
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-4">
                                A&T or third parties granting rights to A&T hold title to the materials on this site, which are the copyrighted work of A&T or such third parties. A&T grants you a limited license to access and make personal, noncommercial use of this site, including the right to download and make a single electronic or hard copy of limited portions (including text, photos, videos, and graphics), provided that the A&T copyright is acknowledged on each page copied. However, you may not modify it or any portion of it. This license does not include any commercial use of this site or its contents other than our e-commerce services. It does not include any collection and use of any product listings, descriptions, or prices; any derivative use of this site or its contents; or any use of data mining, robots, or similar data gathering and extraction tools.
                            </p>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                Neither this Web site nor any portion thereof may be reproduced, duplicated, copied, sold, or otherwise exploited for any commercial purpose. You may not frame or use framing techniques to enclose any portion of this site. You may not use meta tags or any other hidden text using A&T's name or trademarks. Any unauthorized use terminates the license to use granted herein.
                            </p>
                        </div>

                        {/* Changes to Site */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Changes to Site
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                In order to improve our service to you, we reserve the right to make changes in the access, operation, and content of this site at any time without notice. We also reserve the right to make changes in the Terms and the Privacy Policy, so please check before each use for changes.
                            </p>
                        </div>

                        {/* Confidential Information */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Confidential Information
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                A&T discourages you from sending or posting to the site materials or information that you consider to be confidential or proprietary. Please note that if you do send such information, A&T will assume that it is not confidential. By sending or posting such information or material, you grant A&T an unrestricted license to use, reproduce, and distribute those materials or information, and you agree that A&T may use any ideas, concepts, know-how or techniques that you send or post for any purpose.
                            </p>
                        </div>

                        {/* No Warranties */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                No Warranties
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                The information on this site is provided for general information purposes only. While A&T strives to provide only accurate information on this Web site, you may discover some inadvertent inaccuracies in the information provided. Please bring them to our attention by using the Contact Us link at the top right of the screen. Since such mistakes may occur, A&T MAKES NO GUARANTEES, WARRANTIES, OR REPRESENTATIONS CONCERNING THE ACCURACY, RELIABILITY, FITNESS FOR ANY PARTICULAR PURPOSE, OR COMPLETENESS OF ANY INFORMATION ON THIS SITE. WE ARE PROVIDING THE INFORMATION ON AN "AS IS, WHERE IS" BASIS, AND ALL WARRANTIES (EXPRESS OR IMPLIED) ARE DISCLAIMED.
                            </p>
                        </div>

                        {/* Links to Other Sites */}
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Links to Other Sites
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px]">
                                As convenience, this Web site may contain links to other sites that are not controlled by, or affiliated or associated with, A&T. Accordingly, A&T does not make any representations concerning the privacy practices or terms of use of such sites, nor does A&T control or guarantee the accuracy, integrity, or quality of the information and materials available on such sites.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gray-50 rounded-lg">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-6">
                                Questions or Concerns?
                            </h2>
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-neuhas text-gray-700 leading-[1.6] sm:leading-[1.7] md:leading-[28px] mb-6">
                                If you have any questions about these Terms of Use or need assistance, please don't hesitate to contact us.
                            </p>
                            <CtaButton href="/contact">
                                Contact Us
                            </CtaButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}