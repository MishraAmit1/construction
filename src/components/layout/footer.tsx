import { Building2, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import logo from "../../app/public/logo-removebg-preview (3).png"

const footerLinks = {
    people: [
        { name: "Our Vision", href: "/about" },
        { name: "Leadership", href: "/team" },
    ],
    projects: [
        { name: "View More Projects", href: "/projects" },
        { name: "Our Expertise", href: "/about" },
    ],
    approach: [
        { name: "Safety", href: "/about" },
        { name: "Services", href: "/about" },
        { name: "Ethics", href: "/about" },
    ],
    careers: [
        { name: "Why Veritas", href: "/careers" },
        { name: "Career Opportunities", href: "/careers" },
    ],
    company: [
        { name: "History", href: "/projects" },
        { name: "Contact", href: "/enquiry" },
        { name: "Media", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Suppliers", href: "#" },
        { name: "Annual Reports", href: "#" },
    ]
};


export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* People */}
                    <div className="col-span-1">
                        <h3 className="font-headline text-lg font-bold mb-4">People</h3>
                        <ul className="space-y-3">
                            {footerLinks.people.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Projects */}
                    <div className="col-span-1">
                        <h3 className="font-headline text-lg font-bold mb-4">Projects</h3>
                        <ul className="space-y-3">
                            {footerLinks.projects.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Approach */}
                    <div className="col-span-1">
                        <h3 className="font-headline text-lg font-bold mb-4">Approach</h3>
                        <ul className="space-y-3">
                            {footerLinks.approach.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Careers */}
                    <div className="col-span-1">
                        <h3 className="font-headline text-lg font-bold mb-4">Careers</h3>
                        <ul className="space-y-3">
                            {footerLinks.careers.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Company */}
                    <div className="col-span-1">
                        <ul className="space-y-3">
                            {footerLinks.company.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="font-headline text-lg font-bold text-primary-foreground hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-primary-foreground/20 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-3 flex items-center gap-4">
                            <Link href="/" className="flex items-center gap-2">
                                <Building2 className="h-8 w-8" />
                                <span className="font-headline text-xl font-bold leading-tight">
                                    A&T
                                </span>
                            </Link>
                        </div>
                        <div className="md:col-span-6">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                                <div>
                                    <Link href="/privacy" className="text-primary-foreground/80 hover:text-white">Privacy Policy</Link>
                                </div>
                                <div>
                                    <Link href="#" className="text-primary-foreground/80 hover:text-white">Modern Slavery Act Statement</Link>
                                </div>
                                <div>
                                    <Link href="/terms" className="text-primary-foreground/80 hover:text-white">Terms of Use</Link>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
                            <div className="flex gap-4">
                                <Link href="#" className="text-primary-foreground/80 hover:text-white"><Linkedin className="h-5 w-5" /></Link>
                                <Link href="#" className="text-primary-foreground/80 hover:text-white"><Facebook className="h-5 w-5" /></Link>
                                <Link href="#" className="text-primary-foreground/80 hover:text-white"><Twitter className="h-5 w-5" /></Link>
                                <Link href="#" className="text-primary-foreground/80 hover:text-white"><Youtube className="h-5 w-5" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center md:text-right text-sm text-primary-foreground/60">
                        <p>&copy; {new Date().getFullYear()} A&TInfrastructure Group. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
