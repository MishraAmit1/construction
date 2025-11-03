"use client";

import { Linkedin, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    const handleSmoothScroll = (page: string, sectionId: string) => {
        if (pathname === page) {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            router.push(page);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 500);
        }
    };

    const footerLinks = {
        people: [
            { name: "Vision, Values & Commitments", href: "/vision-values" },
            { name: "Leadership", href: "/team" },
            { name: "Our Approach", href: "/approach" },
        ],
        projects: [
            { name: "View All Projects", href: "/projects" },
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
        ],
        careers: [
            {
                name: "Why A&T Infracon",
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
                name: "Life at A&T Infracon",
                href: "#life-at-ant",
                isScrollLink: true,
                page: '/careers',
                sectionId: 'life-at-ant'
            },
        ],
    };

    const companyLinks = [
        { name: "About Us", href: "/approach" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Services", href: "/services" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Use", href: "/terms-of-use" },
        { name: "Modern Slavery Act Statement", href: "/slavery-statement" },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com" },
        { icon: Facebook, href: "https://facebook.com" },
        { icon: Twitter, href: "https://twitter.com" },
        { icon: Youtube, href: "https://youtube.com" },
    ];

    return (
        <footer className="bg-[#212C36] text-gray-300 overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* TOP SECTION - Links Grid */}
                <div className="py-12 md:py-16 border-b border-gray-700">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                        {/* People */}
                        <div className="w-full">
                            <h3 className="text-white font-bold text-lg md:text-xl leading-[30px] tracking-[0.5px] mb-4 md:mb-6 font-apfel2">
                                People
                            </h3>
                            <ul className="space-y-2 md:space-y-3">
                                {footerLinks.people.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Projects */}
                        <div className="w-full">
                            <h3 className="text-white font-bold text-lg md:text-xl leading-[30px] tracking-[0.5px] mb-4 md:mb-6 font-apfel2">
                                Projects
                            </h3>
                            <ul className="space-y-2 md:space-y-3">
                                {footerLinks.projects.map((link) => (
                                    <li key={link.name}>
                                        {link.isScrollLink ? (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSmoothScroll(link.page!, link.sectionId!);
                                                }}
                                                className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal block"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Approach */}
                        <div className="w-full">
                            <h3 className="text-white font-bold text-lg md:text-xl leading-[30px] tracking-[0.5px] mb-4 md:mb-6 font-apfel2">
                                Approach
                            </h3>
                            <ul className="space-y-2 md:space-y-3">
                                {footerLinks.approach.map((link) => (
                                    <li key={link.name}>
                                        {link.isScrollLink ? (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSmoothScroll(link.page!, link.sectionId!);
                                                }}
                                                className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal block"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Careers */}
                        <div className="w-full">
                            <h3 className="text-white font-bold text-lg md:text-xl leading-[30px] tracking-[0.5px] mb-4 md:mb-6 font-apfel2">
                                Careers
                            </h3>
                            <ul className="space-y-2 md:space-y-3">
                                {footerLinks.careers.map((link) => (
                                    <li key={link.name}>
                                        {link.isScrollLink ? (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSmoothScroll(link.page!, link.sectionId!);
                                                }}
                                                className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal text-left w-full"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal block"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="w-full">
                            <h3 className="text-white font-bold text-lg md:text-xl leading-[30px] tracking-[0.5px] mb-4 md:mb-6 font-apfel2">
                                Company
                            </h3>
                            <ul className="space-y-2 md:space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm md:text-base leading-6 tracking-[0.0208px] font-neuhas font-normal block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION - 4 Columns on Desktop, 2x2 on Mobile */}
                <div className="py-8 md:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">

                        {/* 1. Logo & Contact */}
                        <div className="space-y-4 w-full">
                            <Link href="/">
                                <Image
                                    src="/images/logo_design_removebg-preview.png"
                                    alt="A&T Infracon Logo"
                                    width={120}
                                    height={50}
                                    sizes="(max-width: 768px) 100px, 140px"
                                    className="mb-4"
                                />
                            </Link>
                            <div className="space-y-3">
                                <a
                                    href="tel:+917935703085"
                                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                                >
                                    <Phone size={18} className="flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-neuhas break-words">+91 79357 03085</span>
                                </a>

                                <a
                                    href="mailto:atinfracon@gmail.com"
                                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                                >
                                    <Mail size={18} className="flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-neuhas break-words">atinfracon@gmail.com</span>
                                </a>

                                <div className="flex items-start gap-3 text-gray-300">
                                    <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                                    <div className="text-sm font-neuhas">
                                        <p className="font-semibold text-white mb-1">Registered Office:</p>
                                        <p>506, 5th Floor, Aagam Avenue</p>
                                        <p>Acher, Sabarmati</p>
                                        <p>Ahmedabad - 380005, Gujarat</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Legal Links */}
                        <div className="space-y-4 w-full">
                            <h4 className="text-white font-semibold text-lg font-apfel2">Legal</h4>
                            <ul className="space-y-2 md:space-y-3">
                                {legalLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm leading-6 tracking-[0.0208px] font-neuhas font-normal block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Company Info */}
                        <div className="space-y-4 w-full">
                            <h4 className="text-white font-semibold text-lg font-apfel2">Company Details</h4>
                            <div className="space-y-2 text-sm text-gray-400 font-neuhas">
                                <p className="break-words">CIN: U45201GJ2011PTC065598</p>
                                <p className="break-words">PAN: AAJCA5903A</p>
                                <p className="break-words">GST: 24AAJCA5903A1Z9</p>
                            </div>
                        </div>

                        {/* 4. Connect With Us - FIXED OVERFLOW */}
                        <div className="space-y-4 w-full">
                            <h4 className="text-white font-semibold text-lg font-apfel2">Connect With Us</h4>
                            <div className="flex flex-wrap gap-3 max-w-full">
                                {socialLinks.map((social, idx) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <Link
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition-colors flex items-center justify-center flex-shrink-0"
                                            aria-label={`Connect on ${social.icon.name}`}
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
                <div className="border-t border-gray-700 w-full">
                    <div className="py-4 flex flex-col md:flex-row items-center justify-between gap-2">
                        <p className="text-xs text-gray-500 font-neuhas order-2 md:order-1 text-center md:text-left">
                            © 2025 A&T Infracon Pvt. Ltd. All Rights Reserved.
                        </p>
                        <p className="text-xs text-gray-400 font-neuhas order-1 md:order-2 text-center md:text-right">
                            Website designed by{' '}
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