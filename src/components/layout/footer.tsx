"use client";

import { Linkedin, Facebook, Twitter, Youtube, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../app/assets/logo_design_f__2_-removebg-preview.png";

export function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    const handleSmoothScroll = (page: string, sectionId: string) => {
        if (pathname === page) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.style.scrollMarginTop = '150px';
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            router.push(page);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.style.scrollMarginTop = '150px';
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 500);
        }
    };

    const footerLinks = {
        people: [
            { name: "Vision, Values & Commitments", href: "/vision-values" },
            { name: "Leadership", href: "/team" },
            { name: "A&T.org", href: "/approach" },
        ],
        projects: [
            { name: "View More Projects", href: "/projects" },
            {
                name: "Markets",
                href: "#markets-section",
                isScrollLink: true,
                page: '/projects',
                sectionId: 'markets-section'
            },
            {
                name: "Regions",
                href: "#regions-section",
                isScrollLink: true,
                page: '/projects',
                sectionId: 'regions-section'
            },
        ],
        approach: [
            {
                name: "Safety",
                href: "#safety",
                isScrollLink: true,
                page: '/approach',
                sectionId: 'safety'
            },
            {
                name: "Quality",
                href: "#quality",
                isScrollLink: true,
                page: '/approach',
                sectionId: 'quality'
            },
            {
                name: "Ethics",
                href: "#ethics",
                isScrollLink: true,
                page: '/approach',
                sectionId: 'ethics'
            },
            {
                name: "More",
                href: "/approach"
            },
        ],
        careers: [
            {
                name: "Why A&T",
                href: "#why-ant",
                isScrollLink: true,
                page: '/careers',
                sectionId: 'why-ant'
            },
            {
                name: "Career Opportunities",
                href: "#openings",
                isScrollLink: true,
                page: '/careers',
                sectionId: 'openings'
            },
            {
                name: "Life at A&T",
                href: "#life-at-ant",
                isScrollLink: true,
                page: '/careers',
                sectionId: 'life-at-ant'
            },
        ],
    };

    const companyLinks = [
        { name: "History", href: "/history" },
        { name: "Contact", href: "/contact" },
        { name: "Media", href: "/media" },
        { name: "Blog", href: "/blog" },
        { name: "Suppliers", href: "/suppliers" },
        { name: "Annual Reports", href: "/reports" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Modern Slavery Act Statement", href: "/slavery-statement" },
        { name: "Ethics", href: "/ethics-policy" },
        { name: "Australia Privacy Policy", href: "/au-privacy" },
        { name: "Terms of Use", href: "/terms-of-use" },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com" },
        { icon: Facebook, href: "https://facebook.com" },
        { icon: Twitter, href: "https://twitter.com" },
        { icon: Youtube, href: "https://youtube.com" },
    ];

    return (
        <footer className="bg-[#212C36] text-gray-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* TOP SECTION */}
                <div className="py-16 border-b border-gray-700">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {/* People */}
                        <div>
                            <h3 className="text-white font-bold text-xl leading-[30px] tracking-[0.5px] mb-6 font-apfel2">
                                People
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.people.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects */}
                        <div>
                            <h3 className="text-white font-bold text-xl leading-[30px] tracking-[0.5px] mb-6 font-apfel2">
                                Projects
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.projects.map((link) => (
                                    <li key={link.name}>
                                        {link.isScrollLink ? (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSmoothScroll(link.page!, link.sectionId!);
                                                }}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Approach */}
                        <div>
                            <h3 className="text-white font-bold text-xl leading-[30px] tracking-[0.5px] mb-6 font-apfel2">
                                Approach
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.approach.map((link) => (
                                    <li key={link.name}>
                                        {link.isScrollLink ? (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSmoothScroll(link.page!, link.sectionId!);
                                                }}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Careers */}
                        <div>
                            <h3 className="text-white font-bold text-xl leading-[30px] tracking-[0.5px] mb-6 font-apfel2">
                                Careers
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.careers.map((link) => (
                                    <li key={link.name}>
                                        {link.isScrollLink ? (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSmoothScroll(link.page!, link.sectionId!);
                                                }}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-bold text-xl leading-[30px] tracking-[0.5px] mb-6 font-apfel2">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-3 space-y-4">
                            <Link href="/">
                                <Image src={logo} alt="Company Logo" width={120} height={50} className="mb-4" />
                            </Link>
                            <a href="tel:+15713926300" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <Phone size={18} className="flex-shrink-0" />
                                <span className="text-base font-neuhas">+1 571-392-6300</span>
                            </a>
                            <a href="mailto:webmas@AT.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <Mail size={18} className="flex-shrink-0" />
                                <span className="text-base font-neuhas">webmas@AT.com</span>
                            </a>
                        </div>

                        <div className="md:col-span-5">
                            <div className="grid grid-cols-2 gap-8">
                                <ul className="space-y-3">
                                    {legalLinks.slice(0, 3).map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-3">
                                    {legalLinks.slice(3).map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-base leading-6 tracking-[0.0208px] font-neuhas font-normal"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between">
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <Link
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition-colors flex items-center justify-center"
                                        >
                                            <IconComponent size={18} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* DEVELOPER CREDIT */}
                <div className="border-t border-gray-700">
                    <div className="py-4 flex flex-col md:flex-row items-center justify-between">
                        <p className="text-xs text-gray-500 font-neuhas order-2 md:order-1">
                            © 2025 A&T Corporation. All Rights Reserved.
                        </p>
                        <p className="text-xs text-gray-400 font-neuhas order-1 md:order-2">
                            Website designed by {' '}
                            <Link
                                href="https://flauraa.com"
                                target="_blank"
                                className="text-red-600 hover:text-red-500 transition-colors font-semibold pl-1"
                            >
                                Flauraa
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}