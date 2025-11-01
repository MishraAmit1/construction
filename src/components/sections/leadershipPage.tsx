"use client";
import Image from "next/image";
import Link from "next/link";
import { Minus, Linkedin, Mail, Phone, Plus, ArrowRight, ArrowUpRight, MapPin, Calendar, Briefcase, X, Award } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { CtaButton } from "@/components/sections/SlaveryStatementPageWrapper";

// Simple classnames helper
const cn = (...classes: (string | false | null | undefined)[]) =>
    classes.filter(Boolean).join(" ");

// Header height offset for smooth scroll
const HEADER_OFFSET = 100;

type SectionKey =
    | "leadership"
    | "gbu"
    | "corporate"
    | "executive"
    | "nonexecutive";

const SECTIONS: { key: SectionKey; label: string }[] = [
    { key: "leadership", label: "Leadership" },
    { key: "gbu", label: "Global Business Units" },
    { key: "corporate", label: "Corporate" },
    { key: "executive", label: "Executive Directors" },
    { key: "nonexecutive", label: "Non-Executive Directors" },
];
// Extended person type with more details
interface PersonDetails {
    id: number;
    name: string;
    title: string;
    image: string;
    bio?: string;
    experience?: string;
    education?: string;
    achievements?: string[];
    location?: string;
    email?: string;
    linkedin?: string;
    joinedYear?: string;
}
// DATA
const leadership: PersonDetails[] = [
    {
        id: 1,
        name: "Ashok Shingala",
        title: "Chairman & Managing Director",
        image: "https://www.bechtel.com/wp-content/uploads/2024/10/brendan-bechtel-675x675.webp",
        bio: "Ashok Shingala has been leading A&T Infracon for over 25 years, transforming it from a regional contractor to one of India's most trusted infrastructure companies. Under his leadership, the company has successfully executed projects worth over ₹1000 crores across India's most challenging terrains.",
        experience: "35+ years in Civil Engineering & Construction",
        education: "B.Tech Civil Engineering from IIT Delhi, MBA from IIM Ahmedabad",
        achievements: [
            "Led execution of 180 km Indo-Pak border fencing project",
            "Pioneered high-altitude construction techniques for Ladakh roads",
            "Established strategic partnerships with CPWD, BSF, and NBCC",
            "Grew company turnover from ₹10 Cr to ₹161 Cr annually"
        ],
        location: "Ahmedabad, Gujarat",
        email: "ashok.shingala@atinfracon.com",
        linkedin: "https://linkedin.com/in/ashokshingala",
        joinedYear: "1989"
    },
    {
        id: 2,
        name: "Truptiben Shingala",
        title: "Director & Chief Operating Officer",
        image: "https://www.bechtel.com/wp-content/uploads/2024/10/bechtel-craig-albert-675x676.webp",
        bio: "Truptiben Shingala oversees all operational aspects of A&T Infracon, from project execution to resource management. Her expertise in project management and financial planning has been instrumental in the company's consistent growth and successful project delivery.",
        experience: "28+ years in Operations & Project Management",
        education: "B.Com from Gujarat University, CA from ICAI",
        achievements: [
            "Implemented ERP systems for real-time project monitoring",
            "Established quality control protocols achieving zero-defect delivery",
            "Managed operations for 100+ simultaneous projects",
            "Built strategic vendor partnerships reducing costs by 15%"
        ],
        location: "Ahmedabad, Gujarat",
        email: "trupti.shingala@atinfracon.com",
        linkedin: "https://linkedin.com/in/truptishingala",
        joinedYear: "1995"
    },
];


const gbuMembers = [
    {
        id: 3,
        name: "Ailie MacAdam",
        title: "President, Mining & Metals",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
        bio: "Leading our Mining & Metals division with over 20 years of experience in complex infrastructure projects.",
        experience: "20+ years",
        location: "Mumbai, Maharashtra",
        joinedYear: "2010"
    },
    {
        id: 4,
        name: "Paul Marsden",
        title: "President, Energy",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
        bio: "Leading our Mining & Metals division with over 20 years of experience in complex infrastructure projects.",
        experience: "20+ years",
        location: "Mumbai, Maharashtra",
        joinedYear: "2010"
    },
    {
        id: 5,
        name: "Dena Volovar",
        title: "President, Nuclear, Security & Environmental",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
        bio: "Leading our Mining & Metals division with over 20 years of experience in complex infrastructure projects.",
        experience: "20+ years",
        location: "Mumbai, Maharashtra",
        joinedYear: "2010"
    },
    {
        id: 6,
        name: "Darren Mort",
        title: "President, Infrastructure",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
        bio: "Leading our Mining & Metals division with over 20 years of experience in complex infrastructure projects.",
        experience: "20+ years",
        location: "Mumbai, Maharashtra",
        joinedYear: "2010"
    },
    {
        id: 7,
        name: "Catherine Hunt Ryan",
        title: "President, Manufacturing & Technology",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80",
        bio: "Leading our Mining & Metals division with over 20 years of experience in complex infrastructure projects.",
        experience: "20+ years",
        location: "Mumbai, Maharashtra",
        joinedYear: "2010"
    },
    {
        id: 8,
        name: "Keith Hennessey",
        title: "Chief Financial Officer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        bio: "Leading our Mining & Metals division with over 20 years of experience in complex infrastructure projects.",
        experience: "20+ years",
        location: "Mumbai, Maharashtra",
        joinedYear: "2010"
    },
];

const corporate = [
    {
        id: 9,
        name: "Tarek Amine",
        title: "Chief Supply Chain Officer",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
    },
    {
        id: 10,
        name: "Lisa Armstrong",
        title: "Chief Diversity & Inclusion Officer",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
    {
        id: 11,
        name: "Mark Campbell",
        title: "President, Enterprises",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80",
    },
    {
        id: 12,
        name: "Nina Patel",
        title: "Chief People Officer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    },
    {
        id: 13,
        name: "Robert King",
        title: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1541534401786-2077eed87a72?w=800&q=80",
    },
    {
        id: 14,
        name: "Steven Cole",
        title: "General Counsel",
        image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&q=80",
    },
];

const executiveDirectors = [
    { id: 15, name: "Brendan Bechtel", title: "Chairman & Chief Executive Officer" },
    { id: 16, name: "Craig Albert", title: "President & Chief Operating Officer" },
    { id: 17, name: "Ailie MacAdam", title: "President, Mining & Metals" },
    { id: 18, name: "Darren Mort", title: "President, Infrastructure" },
    { id: 19, name: "Catherine Hunt Ryan", title: "President, Manufacturing & Technology" },
    { id: 20, name: "Keith Hennessey", title: "Chief Financial Officer" },
    { id: 21, name: "Vikas Joshi", title: "Manager, EPC Functions" },
    { id: 22, name: "Shaun Kenny", title: "Managing Director, Australia" },
    { id: 23, name: "Cliff Rankin", title: "General Counsel" },
];

const nonExecutiveDirectors = [
    { id: 24, name: "John Reeves", title: "Independent Director" },
    { id: 25, name: "Maria Gomez", title: "Non-Executive Director" },
    { id: 26, name: "Anita Rao", title: "Independent Director" },
    { id: 27, name: "Peter Huang", title: "Non-Executive Director" },
    { id: 28, name: "Sanjay Kapoor", title: "Independent Director" },
    { id: 29, name: "Olivia Carter", title: "Non-Executive Director" },
];
function PersonModal({
    person,
    isOpen,
    onClose
}: {
    person: PersonDetails | null;
    isOpen: boolean;
    onClose: () => void;
}) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !person) return null;

    return (
        <>
            {/* Custom Scrollbar Styles - Mobile only */}
            <style jsx global>{`
                @media (max-width: 1023px) {
                    .modal-mobile-scroll::-webkit-scrollbar {
                        width: 6px;
                    }
                    .modal-mobile-scroll::-webkit-scrollbar-track {
                        background: #f1f1f1;
                        border-radius: 10px;
                    }
                    .modal-mobile-scroll::-webkit-scrollbar-thumb {
                        background: #dc2626;
                        border-radius: 10px;
                    }
                    .modal-mobile-scroll::-webkit-scrollbar-thumb:hover {
                        background: #b91c1c;
                    }
                    /* For Firefox */
                    .modal-mobile-scroll {
                        scrollbar-width: thin;
                        scrollbar-color: #dc2626 #f1f1f1;
                    }
                }
            `}</style>

            <div className="fixed inset-0 z-50 overflow-y-auto">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />

                {/* Modal - Original desktop layout preserved */}
                <div className="relative min-h-screen flex items-center justify-center p-4">
                    <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 group"
                        >
                            <X className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
                        </button>

                        {/* ORIGINAL GRID LAYOUT - Just added mobile scroll class */}
                        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] max-h-[90vh] lg:max-h-auto overflow-y-auto lg:overflow-visible modal-mobile-scroll">
                            {/* Left Side - Image & Basic Info */}
                            <div className="bg-gray-50 p-8">
                                <div className="sticky top-8">
                                    <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h2 className="font-apfel2 text-2xl text-gray-900 mb-2">
                                        {person.name}
                                    </h2>
                                    <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-6">
                                        {person.title}
                                    </p>

                                    {/* Contact Info */}
                                    <div className="space-y-3">
                                        {person.location && (
                                            <div className="flex items-center text-gray-600 text-sm">
                                                <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                                                <span className="font-neuhas">{person.location}</span>
                                            </div>
                                        )}
                                        {person.email && (
                                            <div className="flex items-center text-gray-600 text-sm">
                                                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                                                <a href={`mailto:${person.email}`} className="font-neuhas hover:text-red-600 transition-colors">
                                                    {person.email}
                                                </a>
                                            </div>
                                        )}
                                        {person.joinedYear && (
                                            <div className="flex items-center text-gray-600 text-sm">
                                                <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                                                <span className="font-neuhas">Since {person.joinedYear}</span>
                                            </div>
                                        )}
                                        {person.linkedin && (
                                            <div className="flex items-center text-gray-600 text-sm">
                                                <Linkedin className="w-4 h-4 mr-3 text-gray-400" />
                                                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="font-neuhas hover:text-red-600 transition-colors">
                                                    LinkedIn Profile
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Detailed Info */}
                            <div className="p-8 overflow-y-auto max-h-[80vh]">
                                {/* Bio */}
                                {person.bio && (
                                    <div className="mb-8">
                                        <h3 className="font-apfel2 text-xl text-gray-900 mb-4">About</h3>
                                        <p className="font-neuhas text-gray-600 leading-relaxed">
                                            {person.bio}
                                        </p>
                                    </div>
                                )}

                                {/* Experience */}
                                {person.experience && (
                                    <div className="mb-8">
                                        <h3 className="font-apfel2 text-xl text-gray-900 mb-4 flex items-center">
                                            <Briefcase className="w-5 h-5 mr-2 text-red-600" />
                                            Experience
                                        </h3>
                                        <p className="font-neuhas text-gray-600">
                                            {person.experience}
                                        </p>
                                    </div>
                                )}

                                {/* Education */}
                                {person.education && (
                                    <div className="mb-8">
                                        <h3 className="font-apfel2 text-xl text-gray-900 mb-4">Education</h3>
                                        <p className="font-neuhas text-gray-600">
                                            {person.education}
                                        </p>
                                    </div>
                                )}

                                {/* Key Achievements */}
                                {person.achievements && person.achievements.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className="font-apfel2 text-xl text-gray-900 mb-4 flex items-center">
                                            <Award className="w-5 h-5 mr-2 text-red-600" />
                                            Key Achievements
                                        </h3>
                                        <ul className="space-y-3">
                                            {person.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                    <span className="font-neuhas text-gray-600">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                                    {person.email && (
                                        <a
                                            href={`mailto:${person.email}`}
                                            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-neuhas font-semibold text-sm"
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            Get in Touch
                                        </a>
                                    )}
                                    {person.linkedin && (
                                        <a
                                            href={person.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors font-neuhas font-semibold text-sm"
                                        >
                                            <Linkedin className="w-4 h-4 mr-2" />
                                            Connect
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Updated ProfileCard with fixed image positioning
function ProfileCard({
    person,
    onClick,
}: {
    person: PersonDetails;
    onClick: (person: PersonDetails) => void;
}) {
    return (
        <div
            className="group rounded-2xl overflow-hidden bg-white border border-gray-200 cursor-pointer"
            onClick={() => onClick(person)}
        >
            <div className="relative aspect-[4/3.4]">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-3 right-3">
                    <div className="h-9 w-9 rounded-full bg-red-600 text-white grid place-items-center shadow-md group-hover:scale-110 transition">
                        <ArrowUpRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
            <div className="p-3 sm:p-4">
                <h4 className="text-lg sm:text-xl font-apfel2 text-[#30454c]">
                    {person.name}
                </h4>
                <p className="mt-1 text-[11px] sm:text-xs tracking-wider uppercase text-red-600 font-semibold">
                    {person.title}
                </p>
            </div>
        </div>
    );
}

// Compact row item (for Executive / Non-Executive)
function ProfileRow({
    person,
}: {
    person: { name: string; title: string };
}) {
    return (
        <div className="group relative pl-0">
            <h4 className="text-xl font-apfel2 text-[#30454c]">{person.name}</h4>
            <p className="mt-2 text-[12px] sm:text-[13px] md:text-sm tracking-wider uppercase text-red-600 font-semibold max-w-sm">
                {person.title}
            </p>
            <div className="mt-3 h-9 w-9 rounded-full bg-red-100 text-red-600 grid place-items-center group-hover:bg-red-200 transition">
                <ArrowUpRight className="h-4 w-4" />
            </div>
        </div>
    );
}

export default function TeamPage() {
    const [activeTab, setActiveTab] = useState<'leadership' | 'management' | 'departments'>('leadership');
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<PersonDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<SectionKey>("leadership");

    const handlePersonClick = (person: PersonDetails) => {
        setSelectedPerson(person);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedPerson(null), 300);
    };
    // Build a map of id -> label for easy lookup
    const idMap = useMemo(
        () =>
            SECTIONS.reduce((acc, it) => {
                acc[it.key] = it.label;
                return acc;
            }, {} as Record<SectionKey, string>),
        []
    );

    // ScrollSpy using IntersectionObserver
    useEffect(() => {
        const ids = SECTIONS.map((s) => s.key);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id as SectionKey;
                        setActive(id);
                    }
                });
            },
            {
                root: null,
                rootMargin: `-${HEADER_OFFSET + 20}px 0px -60% 0px`,
                threshold: 0.01,
            }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (id: SectionKey) => (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        const y =
            el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET - 12;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    const handleToggle = (expand: boolean) => {
        setIsExpanded(expand);

        if (!expand && contentRef.current) {
            contentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <>
            <PersonModal
                person={selectedPerson}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[78vh] flex items-center py-12">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000"
                        alt="Team background"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs md:max-w-6xl text-white">
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase">
                            PEOPLE
                        </p>

                        <h1 className="text-white font-normal font-apfel2 mb-4 md:mb-6 text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05] [text-wrap:balance]">
                            Leadership & Team
                        </h1>

                        <p className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px] leading-[1.6] md:leading-[36px] font-medium text-white/85 sm:text-white/90 md:max-w-4xl">
                            Meet the experienced professionals who drive A&T Infracon's success across India's most challenging infrastructure projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4">
                    <nav className="flex items-center text-xs sm:text-sm text-gray-600 font-neuhas tracking-wider">
                        <Link href="/" className="hover:text-red-600 transition-colors">HOME</Link>
                        <span className="mx-1.5 sm:mx-2">/</span>
                        <span className="text-red-600 font-semibold uppercase">LEADERSHIP</span>
                    </nav>
                </div>
            </div>

            {/* MESSAGE FROM LEADERSHIP */}
            <section
                className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-white"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)",
                    backgroundSize: "16px 16px sm:20px 20px",
                }}
            >
                <div className="container md:text-center max-w-xs sm:max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                             font-normal leading-tight text-primary mb-3 sm:mb-4 md:mb-12">
                        A Message from Our Leadership
                    </h2>

                    <div ref={contentRef} className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 text-start">
                        {/* Initial Visible Content */}
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            For over 35 years, A&T Infracon has been at the forefront of India's infrastructure development, taking on projects that others consider impossible. From the freezing heights of Ladakh at 15,000+ feet to the harsh deserts of Rajasthan and the strategic borders of Jammu & Kashmir, we've built roads, border infrastructure, and critical installations that serve the nation.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            Our journey began with a simple belief: that with the right expertise, modern equipment, and unwavering commitment, no terrain is too challenging, no project too complex. This philosophy has guided us through decades of successful project delivery for prestigious clients including CPWD, BSF, ITBP, NBCC, and major PSUs.
                        </p>
                        <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                            With our unique expertise and experience, A&T Infracon is purpose-built to tackle India's most challenging infrastructure needs.
                        </p>

                        {/* Expandable Content */}
                        <div
                            className={cn(
                                "overflow-hidden transition-all duration-700 ease-in-out",
                                isExpanded ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            <div className="pt-6 sm:pt-8 space-y-8 sm:space-y-10 md:space-y-12">
                                {/* Section 1: India's Infrastructure Revolution */}
                                <div className="space-y-3 sm:space-y-4">
                                    <h2 className="font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                             font-normal leading-tight text-primary mb-3 sm:mb-4 md:mb-12">
                                        India's Infrastructure Revolution
                                    </h2>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        India's demand for infrastructure is accelerating at an unprecedented pace. With ambitious targets for road connectivity, border security, and regional development, the nation is witnessing the largest construction wave in its history, particularly in strategic and remote regions.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        A&T Infracon teams are meeting this moment head-on.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        In recent years, projects we've delivered have strengthened national security through border roads and infrastructure, connected remote communities in Ladakh and Rajasthan, supported renewable energy initiatives with wind turbine foundations and solar projects, and enhanced transportation networks across Western India.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        In the decades ahead, efforts such as these will determine India's ability to secure its borders, provide economic opportunities to remote regions, enhance strategic connectivity in challenging terrains, and build infrastructure that withstands extreme weather and environmental challenges. Our projects build resilience against climate events, support defense preparedness, and ensure connectivity for communities in the harshest environments.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        We welcome these challenges both as a responsibility and an opportunity to partner with government agencies and private clients in building a more connected and secure India.
                                    </p>
                                </div>

                                {/* Section 2: Extraordinary Teams */}
                                <div className="space-y-3 sm:space-y-4">
                                    <h2 className="font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                             font-normal leading-tight text-primary mb-3 sm:mb-4 md:mb-12">
                                        Extraordinary Teams
                                    </h2>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        Our ultimate differentiator is the quality of our people — from our skilled construction workers to our engineers and project managers. We excel at fielding specialized teams whose skills and expertise are perfectly matched to each project's unique demands, whether it's high-altitude construction, desert operations, or strategic border infrastructure.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        Recruiting, developing, training, empowering, and rewarding the best talent in the industry is our most important investment in the future. This includes relentlessly pursuing safety standards, building workplaces with a sense of purpose, and serving the needs of our frontline construction professionals who work in India's most challenging environments. We believe that companies that prioritize their people will be those that lead the industry.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        Our team of 200+ professionals includes veterans of high-altitude construction, desert operations specialists, and experienced project managers who have delivered complex border infrastructure projects. We're focused on bringing the next generation of skilled professionals into the industry, partnering with local communities for employment, and building comprehensive training programs for specialized construction in extreme conditions.
                                    </p>
                                </div>

                                {/* Section 3: Adapting, Innovating, and Defining Excellence */}
                                <div className="space-y-3 sm:space-y-4">
                                    <h2 className="font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                             font-normal leading-tight text-primary mb-3 sm:mb-4 md:mb-12">
                                        Adapting, Innovating, and Defining Excellence
                                    </h2>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        Throughout our 35+ year history, A&T Infracon has continuously evolved — innovating, adapting, and setting standards of excellence as we apply our unique capabilities to delivering India's most critical and complex infrastructure projects in challenging environments.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        More than ever before, we are integrating our capabilities across road construction, border infrastructure, building works, and renewable energy to provide comprehensive solutions tailored to our clients' needs. Our early collaboration with government agencies and private clients in project planning allows us to explore all technical, logistical, and execution options to find the best solutions and streamline delivery in remote locations.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        We meet clients where they are, bringing solutions that range from routine maintenance to complex strategic infrastructure in hostile environments. We offer unique advantages by leveraging our own equipment fleet (4 Hot Mix Plants, 4 Batching Plants, 22 Excavators, crushing units), experienced workforce trained for extreme conditions, and proven logistics capabilities in remote areas. We continuously improve our execution methods, capturing efficiencies from our extensive experience in high-altitude and desert construction.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        Together with our proven project management strategies and modern equipment, these capabilities create value measured not only in cost and schedule but also in infrastructure that performs reliably in extreme conditions when clients need it most.
                                    </p>
                                </div>

                                {/* Section 4: Earning Trust, Building for the Long Term */}
                                <div className="space-y-3 sm:space-y-4">
                                    <h2 className="font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                             font-normal leading-tight text-primary mb-3 sm:mb-4 md:mb-12">
                                        Earning Trust, Building for the Long Term
                                    </h2>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        Our definition of success is never just about delivering a project. It's about aligning with our clients' strategic vision and supporting them in achieving it over the long term, whether that's securing border infrastructure, connecting remote communities, or building roads that serve for decades.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        In everything we do, our approach is anchored in our belief that the most important asset we ever build is trust. Trust is earned through transparency in execution, reliability in the harshest conditions, and unwavering dedication to meeting our commitments. This includes choosing projects selectively to ensure we never overextend our resources and maintain the high quality of our teams across all active sites from Ladakh to Rajasthan.
                                    </p>
                                    <p className="text-[15px] sm:text-[16px] md:text-[21px] font-neuhas text-[#30454c] leading-relaxed">
                                        In our experience, a "One Team" mindset — where collaboration between our engineers, project managers, construction workers, and clients drives every aspect of our work — is the greatest predictor of success on any project. It is this mentality that fosters the deep, long-term relationships we maintain with CPWD, BSF, ITBP, NBCC, and other valued clients who continue to trust us with their most challenging infrastructure needs.
                                    </p>
                                </div>
                            </div>

                            {/* Collapse Button */}
                            <div className="mt-8 sm:mt-10 md:mt-12 text-center md:text-left">
                                <button
                                    onClick={() => handleToggle(false)}
                                    className={cn(
                                        'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                        'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5',
                                        'text-sm sm:text-[20px] font-semibold text-red-600',
                                        'transition-all duration-500 ease-out',
                                        'min-h-[44px] sm:min-h-[48px]',
                                        'w-full sm:w-auto max-w-xs sm:max-w-none'
                                    )}
                                >
                                    <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                                    <span className="relative z-10 flex items-center justify-center">
                                        <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                                            <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </span>
                                        <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white font-neuhas">
                                            Collapse
                                        </span>
                                        <Minus className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Read More Button - Only visible when collapsed */}
                        {!isExpanded && (
                            <div className="mt-8 sm:mt-10 md:mt-12 text-center md:text-left md:-ml-8">
                                <button
                                    onClick={() => handleToggle(true)}
                                    className={cn(
                                        'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                                        'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5',
                                        'text-sm sm:text-[20px] font-semibold text-red-600',
                                        'transition-all duration-500 ease-out',
                                        'min-h-[44px] sm:min-h-[48px]',
                                        'w-full sm:w-auto max-w-xs sm:max-w-none'
                                    )}
                                >
                                    <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
                                    <span className="relative z-10 flex items-center justify-center">
                                        <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                                            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </span>
                                        <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white font-neuhas">
                                            Read More
                                        </span>
                                        <Plus className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* OUR LEADERSHIP SECTION */}
            <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
                <div className="container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                        {/* Left side - Title & Button */}
                        <div className="md:text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2
                             font-normal leading-tight -mb-4 md:mb-0">
                                Our Leadership
                            </h2>
                        </div>
                        {/* Right side - Content */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 md:text-left px-2 sm:px-4 md:px-0">
                            <p className="text-[#30454c] text-[14px] sm:text-[16px] md:text-[20px] leading-[30px] font-neuhas max-w-2xl md:max-w-none mx-auto md:mx-0">
                                Bechtel's history is one of constant evolution. Since our founding in 1898 by Warren A. Bechtel, our leadership team has balanced maintaining a values-driven culture with staying one step ahead in a changing world. This dual focus inspires us to pursue purposeful work and leverage our industry-leading capabilities to deliver the greatest impact.
                            </p>
                            <p className="text-[#30454c] text-[14px] sm:text-[16px] md:text-[20px] leading-[30px] font-neuhas max-w-2xl md:max-w-none mx-auto md:mx-0">
                                Today, our leaders continue to uphold the highest standards for safety, integrity, and excellence, while pushing Bechtel to adapt, innovate, and meet customers where they are. By successfully overseeing mission-critical projects, they ensure Bechtel — and the world's infrastructure — is built to last.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT WITH FIXED SPACING */}
            <main className="bg-white">
                <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-14 md:py-16">
                    <div className="flex gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                        {/* Left Sticky Nav - Fixed width with updated styles */}
                        <aside className="hidden md:block w-[200px] lg:w-[280px] xl:w-[300px]">
                            <div className="sticky top-[96px]">
                                <nav className="flex flex-col gap-4 items-start"> {/* Added items-start */}
                                    {SECTIONS.map((item) => {
                                        const isActive = active === item.key;
                                        return (
                                            <a
                                                key={item.key}
                                                href={`#${item.key}`}
                                                onClick={handleNavClick(item.key)}
                                                className={cn(
                                                    "inline-block text-[13px] lg:text-[15px] xl:text-[16px] tracking-[0.08em] font-apfel2",
                                                    "whitespace-nowrap",
                                                    isActive
                                                        ? "text-white bg-red-600 rounded-full px-3 lg:px-3 py-2 lg:py-1.5"
                                                        : "text-black hover:bg-red-100 hover:text-red-600 rounded-full px-3 lg:px-3 py-2 lg:py-1.5 transition-colors"
                                                )}
                                                aria-current={isActive ? "true" : "false"}
                                            >
                                                {item.label.toUpperCase()}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>
                        </aside>

                        {/* Right Content - Takes remaining space */}
                        <section className="flex-1 space-y-20 lg:space-y-28">
                            {/* 1. Leadership (2 cards only) */}
                            <div id="leadership">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 text-[#30454c] mb-6 sm:mb-8">
                                    {idMap.leadership}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-[800px]">
                                    {leadership.map((p) => (
                                        <ProfileCard key={p.id} person={p} onClick={handlePersonClick} />
                                    ))}
                                </div>
                            </div>

                            {/* 2. Global Business Units */}
                            <div id="gbu">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 text-[#30454c] mb-6 sm:mb-8">
                                    {idMap.gbu}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                                    {gbuMembers.map((p) => (
                                        <ProfileCard key={p.id} person={p} onClick={handlePersonClick} />
                                    ))}
                                </div>
                            </div>

                            {/* 3. Corporate */}
                            <div id="corporate">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 text-[#30454c] mb-6 sm:mb-8">
                                    {idMap.corporate}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                                    {corporate.map((p) => (
                                        <ProfileCard key={p.id} person={p} onClick={handlePersonClick} />
                                    ))}
                                </div>
                            </div>

                            {/* 4. Executive Directors (rows list, 3 columns) */}
                            <div id="executive">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 text-[#30454c] mb-6 sm:mb-8">
                                    {idMap.executive}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                                    {executiveDirectors.map((p) => (
                                        <ProfileRow key={p.id} person={p} />
                                    ))}
                                </div>
                            </div>

                            {/* 5. Non-Executive Directors */}
                            <div id="nonexecutive">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 text-[#30454c] mb-6 sm:mb-8">
                                    {idMap.nonexecutive}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                                    {nonExecutiveDirectors.map((p) => (
                                        <ProfileRow key={p.id} person={p} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>

            {/* JOIN OUR TEAM CTA */}
            <section className="bg-white py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal text-gray-900 mb-6">
                        Join Our Team
                    </h2>
                    <p className="text-[16px] md:text-[20px] text-gray-700 leading-[30px] max-w-3xl mx-auto mb-10 font-neuhas">
                        A&T Infracon is always looking for talented engineers, project managers, and construction professionals who are passionate about building India's infrastructure. Explore career opportunities with us.
                    </p>
                    <CtaButton href="/careers">View Career Opportunities</CtaButton>
                </div>
            </section>
        </>
    );
}
