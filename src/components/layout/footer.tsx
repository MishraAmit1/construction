import { Linkedin, Facebook, Twitter, Youtube, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// IMPORTANT: Apne logo ko `public` folder me rakhein aur yahaan path ko `/` se shuru karein.
// For example: public/logo.png -> "/logo.png"
// Maine aapke original path ko aese hi assume kiya hai.
import logo from "../../app/assets/logo-removebg-preview (3).png";

// Image ke hisaab se links update kiye gaye hain
const footerLinkColumns = {
    people: [
        { name: "Vision, Values & Commitments", href: "/about" },
        { name: "Leadership", href: "/team" },
        { name: "A&T.org", href: "#" },
    ],
    projects: [
        { name: "View More Projects", href: "/projects" },
        { name: "Markets", href: "/projects" },
        { name: "Regions", href: "/projects" },
    ],
    approach: [
        { name: "Safety", href: "/about" },
        { name: "Services", href: "/about" },
        { name: "Ethics", href: "/about" },
        { name: "More", href: "/about" },
    ],
    careers: [
        { name: "Why A&T", href: "/careers" },
        { name: "Career Opportunities", href: "/careers" },
        { name: "Life at A&T", href: "/careers" },
    ],
};

// Ye links heading jaise hain, isliye alag se define kiye hain
const companyLinks = [
    { name: "History", href: "/projects" },
    { name: "Contact", href: "/enquiry" },
    { name: "Media", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Suppliers", href: "#" },
    { name: "Annual Reports", href: "#" },
];

const legalLinks = {
    column1: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Modern Slavery Act Statement", href: "#" },
        { name: "Ethics", href: "#" },
    ],
    column2: [
        { name: "Australia Privacy Policy", href: "#" },
        { name: "Terms of Use", href: "/terms" },
    ]
}

export function Footer() {
    return (
        // Image jaisa background color use kiya hai (#212C36)
        <footer className="font-apfel2 bg-[#212C36] text-gray-300">
            <div className="container mx-auto max-w-7xl px-4 py-16">
                {/* === TOP LINKS SECTION === */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                    {/* People, Projects, etc. ke liye mapping */}
                    {Object.entries(footerLinkColumns).map(([key, links]) => (
                        <div key={key} className="col-span-1">
                            <h3 className="text-white font-bold mb-4 capitalize">{key}</h3>
                            <ul className="space-y-3">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* Company links (History, Contact, etc.) */}
                    <div className="md:col-span-2">
                        <ul className="space-y-3">
                            {companyLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white font-bold hover:text-gray-300 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* === BOTTOM SECTION === */}
                <div className="mt-16 border-t border-gray-700 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                        {/* Column 1: Logo & Contact Info */}
                        <div className="md:col-span-4 lg:col-span-3 space-y-4 text-sm">
                            <Link href="/">
                                {/* Next.js Image component use kiya hai optimization ke liye */}
                                <Image src={logo} alt="Company Logo" width={150} height={50} className="mb-4" />
                            </Link>
                            <a href="tel:+15713926300" className="flex items-center gap-2 hover:text-white">
                                <Phone size={16} />
                                <span>+1 571-392-6300</span>
                            </a>
                            <a href="mailto:webmas@A&T.com" className="flex items-center gap-2 hover:text-white">
                                <Mail size={16} />
                                <span>webmas@A&T.com</span>
                            </a>
                        </div>

                        {/* Column 2: Legal Links */}
                        <div className="md:col-span-5 lg:col-span-6 grid grid-cols-2 gap-8 text-sm">
                            <ul className="space-y-3">
                                {legalLinks.column1.map(link => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 hover:text-white">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {legalLinks.column2.map(link => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 hover:text-white">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Social Media & Copyright */}
                        <div className="md:col-span-3 lg:col-span-3 flex flex-col items-start md:items-end">
                            <div className="flex gap-3">
                                <Link href="#" className="bg-white text-gray-800 rounded-full p-2 block hover:bg-gray-200 transition-colors"><Linkedin size={18} /></Link>
                                <Link href="#" className="bg-white text-gray-800 rounded-full p-2 block hover:bg-gray-200 transition-colors"><Facebook size={18} /></Link>
                                <Link href="#" className="bg-white text-gray-800 rounded-full p-2 block hover:bg-gray-200 transition-colors"><Twitter size={18} /></Link>
                                <Link href="#" className="bg-white text-gray-800 rounded-full p-2 block hover:bg-gray-200 transition-colors"><Youtube size={18} /></Link>
                            </div>
                            <p className="mt-8 text-xs text-gray-500">
                                &copy; {new Date().getFullYear()} A&T Corporation. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}