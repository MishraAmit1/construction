"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CtaButton } from "@/components/sections/SlaveryStatementPageWrapper";
import { useRouter, usePathname } from 'next/navigation';
import { atServices } from "@/lib/data";

const mainNavLinks = [
  { name: "PROJECTS", href: "/projects" },
  { name: "SERVICES", href: "/services" },
  { name: "COMPANY", href: "/about-us" },
  { name: "BLOG", href: "/blog" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
];

const megaEnabled = new Set(["PROJECTS", "SERVICES", "COMPANY", "CAREERS"]);

const INFO_CARDS = [
  {
    title: "Markets",
    desc: "From border infrastructure to renewable energy, road construction to building works - we deliver specialized civil engineering solutions across challenging terrains.",
    href: "/markets",
    img: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=800&auto=format&fit=crop",
  },
];

/* ---------- Data: Company ---------- */
const COMPANY_LEFT_LIST = [
  {
    title: "Safety",
    desc: "Rigorous safety protocols across all project sites. Industry-leading safety standards in challenging terrains.",
    img: "https://www.bechtel.com/wp-content/uploads/2024/10/image-7-506x338.webp",
    href: "/approach#safety"
  },
  {
    title: "Quality",
    desc: "35+ years of maintaining highest quality standards in India's most challenging construction environments.",
    img: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
    href: "/approach#quality"
  },
  {
    title: "Sustainability",
    desc: "Renewable energy infrastructure and sustainable construction practices for a better tomorrow.",
    img: "https://www.bechtel.com/wp-content/uploads/2024/10/154508-1-506x380.webp",
    href: "/approach#sustainability"
  },
];

const COMPANY_RIGHT = [
  {
    title: "About Us",
    desc: "35+ years of excellence delivering critical infrastructure across India's most challenging terrains.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop",
    href: "/about-us",
  },
  {
    title: "Leadership",
    desc: "Our leadership team brings decades of experience in executing complex infrastructure projects.",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1400&auto=format&fit=crop",
    href: "/leadership",
  },
  {
    title: "Our Strength",
    desc: "200+ skilled professionals, modern equipment fleet, and strategic presence across Western India.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1400&auto=format&fit=crop",
    href: "/strength",
  },
  {
    title: "Vision, Mission & Values",
    desc: "To lead infrastructure development across India's most challenging regions with sustainable solutions.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    href: "/vision-values",
  },
  {
    title: "Our Approach",
    desc: "Integrated execution strategy combining engineering excellence and proven project management.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    href: "/approach",
  },
];

/* ---------- Data: Careers ---------- */
const CAREER_FEATURES = [
  {
    title: "Career Opportunities",
    desc: "Join our team of 200+ professionals working on nation-building projects across challenging terrains.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
    href: "/careers#openings",
  },
  {
    title: "Life at A&T Infracon",
    desc: "Work on prestigious projects for CPWD, BSF, ITBP, and leading PSUs with modern equipment and training.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400&auto=format&fit=crop",
    href: "/careers#life-at-ant",
  },
  {
    title: "Testimonials",
    desc: "Hear from our team members building critical infrastructure from Ladakh to the Rann of Kutch.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop",
    href: "/careers#testimonials",
  },
];

/* ---------------- Header ---------------- */
export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Dynamic markets data
  const [marketCategories, setMarketCategories] = useState<any[]>([]);

  // Mega: which one is open
  const [activeMega, setActiveMega] = useState<null | "PROJECTS" | "SERVICES" | "COMPANY" | "CAREERS">(null);
  const megaOpen = !!activeMega;

  // Hover-intent close
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const armClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMega(null), 160);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // Header height for panel top
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerH, setHeaderH] = useState(80);

  // Fetch market categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { getCategories } = await import('@/lib/api/categories');
        const categories = await getCategories();
        setMarketCategories(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!headerRef.current) return;
      setHeaderH(headerRef.current.getBoundingClientRect().height || 80);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHasScrolled(y > 10);

      if (!megaOpen) {
        if (y < lastScrollY) setIsVisible(true);
        else if (y > lastScrollY && y > 80) setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, megaOpen]);

  // Lock body scroll when mobile or mega open
  useEffect(() => {
    const lock = mobileMenuOpen || megaOpen;
    document.body.style.overflow = lock ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, megaOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMega(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shouldHaveBackground = isHovered || hasScrolled || mobileMenuOpen || megaOpen;

  const handleLinkClick = () => {
    setActiveMega(null);
  };

  return (
    <>
      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .mega-menu-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .mega-menu-scroll::-webkit-scrollbar-track {
          background: #f3f3f3;
          border-radius: 10px;
        }
        .mega-menu-scroll::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 10px;
        }
        .mega-menu-scroll::-webkit-scrollbar-thumb:hover {
          background: #b91c1c;
        }
        /* For Firefox */
        .mega-menu-scroll {
          scrollbar-width: thin;
          scrollbar-color: #dc2626 #f3f3f3;
        }
      `}</style>

      <header
        ref={headerRef}
        className={`font-apfel2 fixed top-0 z-[9999] w-full transition-all duration-300 ${megaOpen ? "translate-y-0" : isVisible ? "translate-y-0" : "-translate-y-full"
          } ${shouldHaveBackground
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background"
            : "bg-transparent"
          }`}
        onMouseEnter={() => {
          setIsHovered(true);
          cancelClose();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (megaOpen) armClose();
        }}
      >
        {/* Top red bar */}
        <div className={`font-apfel2 h-[3px] sm:h-1 bg-red-600 transition-opacity duration-300 ${shouldHaveBackground ? "opacity-100" : "opacity-0"}`} />

        <div className="font-apfel2 container flex h-16 sm:h-18 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative h-10 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32">
              <Image
                src="/images/logo_design_removebg-preview.png"
                alt="A&T Infracon Logo"
                fill
                sizes="(max-width: 768px) 100px, 140px"
                priority
                className={`object-contain transition-opacity duration-300 ${shouldHaveBackground ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src="/images/logo-removebg-preview.png"
                alt="A&T Infracon Logo"
                fill
                priority
                sizes="(max-width: 768px) 100px, 140px"
                className={`object-contain transition-opacity duration-300 ${shouldHaveBackground ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
            <nav className="flex items-center gap-6 xl:gap-12 font-neuhas">
              {mainNavLinks.map((link) => {
                const isMega = megaEnabled.has(link.name);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => {
                      if (isMega) {
                        cancelClose();
                        setActiveMega(link.name as typeof activeMega);
                      } else {
                        setActiveMega(null);
                      }
                    }}
                    onFocus={() => {
                      if (isMega) setActiveMega(link.name as typeof activeMega);
                    }}
                    onClick={() => {
                      setActiveMega(null);
                    }}
                    className={`text-[13px] lg:text-sm xl:text-[15px] tracking-wider transition-colors ${shouldHaveBackground ? "text-[#30454c] hover:text-foreground" : "text-white/90 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setActiveMega(null);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className={`lg:hidden relative z-50 ${mobileMenuOpen ? "text-foreground" : !shouldHaveBackground ? "text-white hover:text-white/80 hover:bg-white/10" : "hover:bg-secondary/80"
              }`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {/* Desktop Mega Panel */}
      <MegaPanel
        open={megaOpen}
        top={headerH}
        which={activeMega}
        onIntentClose={armClose}
        onCancelClose={cancelClose}
        marketCategories={marketCategories}
        onLinkClick={handleLinkClick}
      />

      {/* Mobile Menu - FIXED OVERFLOW & UPDATED STRUCTURE */}
      <div className={`font-apfel2 fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${mobileMenuOpen ? "opacity-50" : "opacity-0"}`} onClick={() => setMobileMenuOpen(false)} />

        <div className={`absolute top-0 left-0 right-0 bg-white shadow-lg transition-transform duration-500 ease-in-out transform overflow-hidden ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="h-16 sm:h-18 md:h-20" />
          <div className="h-1 bg-red-600 w-full" />

          <nav className="px-4 py-6 sm:px-6 sm:py-8 max-h-[calc(100vh-5rem)] overflow-y-auto overflow-x-hidden">
            <div className="space-y-1 font-neuhas w-full">
              {/* HOME */}
              <Link
                href="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdown(null);
                }}
                className="block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider w-full"
              >
                HOME
              </Link>

              {/* PROJECTS Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "PROJECTS" ? null : "PROJECTS")}
                  className="w-full flex items-center justify-between px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
                >
                  <span>PROJECTS</span>
                  <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${mobileDropdown === "PROJECTS" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "PROJECTS" && (
                  <div className="ml-4 mt-2 space-y-2 w-full">
                    <Link
                      href="/projects"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      View All Projects
                    </Link>
                    <Link
                      href="/markets"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      Markets
                    </Link>
                  </div>
                )}
              </div>

              {/* SERVICES Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "SERVICES" ? null : "SERVICES")}
                  className="w-full flex items-center justify-between px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
                >
                  <span>SERVICES</span>
                  <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${mobileDropdown === "SERVICES" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "SERVICES" && (
                  <div className="ml-4 mt-2 space-y-2 w-full max-h-[300px] overflow-y-auto">
                    <Link
                      href="/services"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      View All Services
                    </Link>
                    {atServices.map((service) => (
                      <a
                        key={service.id}
                        href={`/services#service-${service.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          setMobileDropdown(null);
                          router.push('/services');
                          setTimeout(() => {
                            const element = document.getElementById(`service-${service.id}`);
                            if (element) {
                              const headerOffset = 100;
                              const elementPosition = element.getBoundingClientRect().top;
                              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                          }, 500);
                        }}
                        className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full cursor-pointer"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* COMPANY Dropdown - CLEANED UP */}
              <div className="w-full">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "COMPANY" ? null : "COMPANY")}
                  className="w-full flex items-center justify-between px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
                >
                  <span>COMPANY</span>
                  <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${mobileDropdown === "COMPANY" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "COMPANY" && (
                  <div className="ml-4 mt-2 space-y-2 w-full">
                    <Link
                      href="/about-us"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/leadership"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/strength"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      Our Strength
                    </Link>
                    <Link
                      href="/vision-values"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      Vision, Mission & Values
                    </Link>
                    <Link
                      href="/approach"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      Our Approach
                    </Link>
                  </div>
                )}
              </div>

              {/* BLOG */}
              <Link
                href="/blog"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdown(null);
                }}
                className="block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider w-full"
              >
                BLOG
              </Link>

              {/* CAREERS Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "CAREERS" ? null : "CAREERS")}
                  className="w-full flex items-center justify-between px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
                >
                  <span>CAREERS</span>
                  <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${mobileDropdown === "CAREERS" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "CAREERS" && (
                  <div className="ml-4 mt-2 space-y-2 w-full">
                    <Link
                      href="/careers"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full"
                    >
                      View Careers
                    </Link>
                    <a
                      href="/careers#openings"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                        router.push('/careers');
                        setTimeout(() => {
                          const element = document.getElementById('openings');
                          if (element) {
                            const headerOffset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                          }
                        }, 500);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full cursor-pointer"
                    >
                      Career Opportunities
                    </a>
                    <a
                      href="/careers#life-at-ant"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                        router.push('/careers');
                        setTimeout(() => {
                          const element = document.getElementById('life-at-ant');
                          if (element) {
                            const headerOffset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                          }
                        }, 500);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full cursor-pointer"
                    >
                      Life at A&T Infracon
                    </a>
                    <a
                      href="/careers#testimonials"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setMobileDropdown(null);
                        router.push('/careers');
                        setTimeout(() => {
                          const element = document.getElementById('testimonials');
                          if (element) {
                            const headerOffset = 100;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                          }
                        }, 500);
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded w-full cursor-pointer"
                    >
                      Testimonials
                    </a>
                  </div>
                )}
              </div>

              {/* CONTACT */}
              <Link
                href="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdown(null);
                }}
                className="block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider w-full"
              >
                CONTACT
              </Link>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-gray-200 w-full">
              <Link
                href="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdown(null);
                }}
                className="block w-full text-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                GET A QUOTE
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

/* ---------------- Mega Panel Router ---------------- */
function MegaPanel({
  open,
  top,
  which,
  onIntentClose,
  onCancelClose,
  marketCategories,
  onLinkClick
}: {
  open: boolean;
  top: number;
  which: "PROJECTS" | "SERVICES" | "COMPANY" | "CAREERS" | null;
  onIntentClose: () => void;
  onCancelClose: () => void;
  marketCategories: any[];
  onLinkClick: () => void;
}) {
  const style: React.CSSProperties = { top, height: `calc(100vh - ${top}px)` };

  return (
    <div
      className={`font-apfel2 fixed inset-x-0 z-[9998] hidden lg:block ${open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      style={style}
      onMouseLeave={onIntentClose}
      onMouseEnter={onCancelClose}
      aria-hidden={!open}
    >
      <div
        className={`h-full bg-white transition-transform duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
      >
        <div className="h-full px-8 lg:px-12 xl:px-16 py-10 overflow-y-auto mega-menu-scroll">
          <div className="max-w-[1600px] mx-auto">
            {which === "PROJECTS" && <ProjectsContent marketCategories={marketCategories} onLinkClick={onLinkClick} />}
            {which === "SERVICES" && <ServicesContent onLinkClick={onLinkClick} />}
            {which === "COMPANY" && <CompanyContent onLinkClick={onLinkClick} />}
            {which === "CAREERS" && <CareersContent onLinkClick={onLinkClick} />}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Projects Content ---------------- */
function ProjectsContent({ marketCategories, onLinkClick }: { marketCategories: any[]; onLinkClick: () => void }) {
  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Left */}
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-3xl md:text-[32px] font-semibold text-gray-900 font-apfel2">Engineering Infrastructure. Building the Future.</h2>
        <p className="mt-4 text-gray-600 leading-[21px] font-light font-neuhas">
          With 35+ years of expertise in civil engineering, A&T Infracon Pvt. Ltd. delivers critical infrastructure across India's most challenging terrains. From high-altitude roads at 15,000+ feet in Ladakh to strategic border infrastructure, road networks in desert regions, and renewable energy projects - we build projects that serve the nation and stand the test of time.
        </p>

        <CtaButton href="/projects" onClick={onLinkClick} className="mt-6 inline-flex items-center gap-4 group">
          View All Projects
        </CtaButton>

        <div className="mt-10 pt-6 border-t">
          <div className="text-[12px] font-semibold tracking-wider text-gray-600 uppercase font-apfel2">Our Expertise</div>
          <div className="mt-4 space-y-5">
            {INFO_CARDS.map((it) => (
              <Link key={it.title} href="/markets" onClick={onLinkClick} className="flex items-start gap-4 rounded-lg hover:bg-gray-50 p-2 transition-colors">
                <div className="relative h-20 w-28 flex-shrink-0 rounded-md overflow-hidden bg-gray-200">
                  <Image src={it.img} alt={it.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 font-apfel2">{it.title}</div>
                  <div className="text-sm text-gray-600 mt-1 font-neuhas">{it.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="col-span-12 lg:col-span-8">
        <div className="border-b border-gray-200 mb-6">
          <h3 className="uppercase tracking-wide text-[13px] font-semibold pb-3 text-red-600 border-b-2 border-red-600 font-apfel2">
            Explore Projects by Market
          </h3>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {marketCategories.length > 0 ? (
            marketCategories.map((category) => (
              <Link key={category.category_id} href={`/markets/${category.category_slug}`} onClick={onLinkClick} className="group block">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={category.thumbnail_image || 'https://via.placeholder.com/600x400'}
                    alt={category.category_name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 font-semibold text-gray-900 group-hover:text-red-600 font-apfel2">
                  {category.category_name}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-500 font-neuhas">Loading markets...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Company Content ---------------- */
function CompanyContent({ onLinkClick }: { onLinkClick: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCompanyClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split('#');

    onLinkClick();

    if (hash) {
      if (pathname === path) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 50);
      } else {
        router.push(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 500);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Left */}
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-3xl md:text-[32px] font-semibold text-gray-900 font-apfel2">
          A&T Infracon Pvt. Ltd.
        </h2>
        <p className="mt-4 text-gray-600 leading-7 font-neuhas">
          Engineering Infrastructure. Building the Future. With 35+ years of expertise delivering critical infrastructure across India's most challenging terrains - from high-altitude roads in Ladakh to strategic border installations and renewable energy projects.
        </p>

        <CtaButton href="/about-us" onClick={onLinkClick} className="mt-6 inline-flex items-center gap-4 group">
          Learn More About Us
        </CtaButton>

        <div className="mt-10 pt-6 border-t">
          <div className="text-[12px] font-semibold tracking-wider text-gray-600 uppercase font-apfel2">
            Our Commitment
          </div>
          <div className="mt-4 space-y-5">
            {COMPANY_LEFT_LIST.map((it) => (
              <a
                key={it.title}
                href={it.href}
                onClick={(e) => handleCompanyClick(e, it.href)}
                className="flex items-start gap-4 rounded-lg hover:bg-gray-50 p-2 transition-colors cursor-pointer"
              >
                <div className="relative h-20 w-28 flex-shrink-0 rounded-md overflow-hidden bg-gray-200">
                  <Image src={it.img} alt={it.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 font-apfel2">{it.title}</div>
                  <div className="text-sm text-gray-600 mt-1 font-neuhas">{it.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {COMPANY_RIGHT.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              onClick={onLinkClick}
              className="group block"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-200">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="mt-3 font-semibold text-gray-900 group-hover:text-red-600 font-apfel2">
                {c.title}
              </div>
              <div className="text-sm text-gray-600 mt-1 font-neuhas">{c.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Services Content ---------------- */
function ServicesContent({ onLinkClick }: { onLinkClick: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, serviceId: number) => {
    e.preventDefault();
    onLinkClick();

    if (pathname === '/services') {
      setTimeout(() => {
        const element = document.getElementById(`service-${serviceId}`);
        if (element) {
          const cardRect = element.getBoundingClientRect();
          const cardTop = cardRect.top + window.pageYOffset;
          const headerOffset = 100;
          const extraOffset = 50;
          const targetScrollPosition = cardTop - headerOffset - extraOffset;

          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
          });

          setTimeout(() => {
            const scrollContainer = element.closest('.overflow-x-auto');
            if (scrollContainer) {
              const cardOffsetInContainer = element.offsetLeft;
              let targetScroll = 0;

              if (serviceId <= 2) {
                targetScroll = cardOffsetInContainer - 20;
              } else if (serviceId <= 4) {
                const containerWidth = scrollContainer.clientWidth;
                const cardWidth = element.offsetWidth;
                targetScroll = cardOffsetInContainer - (containerWidth / 2) + (cardWidth / 2);
              } else {
                const containerWidth = scrollContainer.clientWidth;
                const cardWidth = element.offsetWidth;
                targetScroll = cardOffsetInContainer - containerWidth + cardWidth + 20;
              }

              targetScroll = Math.max(0, targetScroll);
              targetScroll = Math.min(targetScroll, scrollContainer.scrollWidth - scrollContainer.clientWidth);

              scrollContainer.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
              });

              element.style.transition = 'all 0.3s ease';
              element.style.transform = 'scale(1.02)';
              element.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.5)';

              setTimeout(() => {
                element.style.transform = '';
                element.style.boxShadow = '';
              }, 2000);
            }
          }, 800);
        }
      }, 100);
    } else {
      router.push('/services');

      setTimeout(() => {
        const element = document.getElementById(`service-${serviceId}`);
        if (element) {
          const cardRect = element.getBoundingClientRect();
          const cardTop = cardRect.top + window.pageYOffset;
          const headerOffset = 100;
          const extraOffset = 50;
          const targetScrollPosition = cardTop - headerOffset - extraOffset;

          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
          });

          setTimeout(() => {
            const scrollContainer = element.closest('.overflow-x-auto');
            if (scrollContainer) {
              let targetScroll = 0;
              const cardWidth = element.offsetWidth;
              const containerWidth = scrollContainer.clientWidth;
              const cardOffsetInContainer = element.offsetLeft;

              if (serviceId <= 2) {
                targetScroll = Math.max(0, cardOffsetInContainer - 20);
              } else if (serviceId <= 4) {
                targetScroll = cardOffsetInContainer - (containerWidth / 2) + (cardWidth / 2);
              } else {
                targetScroll = cardOffsetInContainer - containerWidth + cardWidth + 40;
              }

              targetScroll = Math.max(0, Math.min(targetScroll, scrollContainer.scrollWidth - containerWidth));

              scrollContainer.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
              });

              element.style.transition = 'all 0.3s ease';
              element.style.transform = 'scale(1.02)';
              element.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.5)';

              setTimeout(() => {
                element.style.transform = '';
                element.style.boxShadow = '';
              }, 2000);
            }
          }, 1200);
        }
      }, 600);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Left */}
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-3xl md:text-[32px] font-semibold text-gray-900 font-apfel2">
          Comprehensive Infrastructure Solutions
        </h2>
        <p className="mt-4 text-gray-600 leading-7 font-neuhas">
          From road construction in extreme terrains to strategic border infrastructure, building works, and renewable energy projects - A&T Infracon delivers specialized civil engineering solutions across India's most challenging environments.
        </p>

        <CtaButton href="/services" onClick={onLinkClick} className="mt-6 inline-flex items-center gap-4 group">
          View All Services
        </CtaButton>

        <div className="mt-10 pt-6 border-t">
          <div className="text-[12px] font-semibold tracking-wider text-gray-600 uppercase font-apfel2">
            Service Areas
          </div>
          <div className="mt-4 space-y-3 text-sm text-gray-600 font-neuhas">
            <p>✓ Gujarat • Rajasthan • Jammu & Kashmir • Ladakh</p>
            <p>✓ High-Altitude Construction up to 15,000+ feet</p>
            <p>✓ Desert & Marshy Terrain Expertise</p>
            <p>✓ Border Security Infrastructure</p>
            <p>✓ Government & PSU Projects</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="col-span-12 lg:col-span-8">
        <div className="border-b border-gray-200 w-full mb-6">
          <h3 className="uppercase tracking-wide text-[13px] font-semibold pb-3 text-red-600 border-b-2 border-red-600 inline-block font-apfel2">
            Our Core Services
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {atServices.map((service) => (
            <a
              key={service.id}
              href={`/services#service-${service.id}`}
              onClick={(e) => handleServiceClick(e, service.id)}
              className="group block cursor-pointer transition-all duration-300"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={service.image.imageUrl}
                  alt={service.image.description}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 font-semibold text-gray-900 group-hover:text-red-600 font-apfel2">
                {service.title}
              </div>
              <div className="text-sm text-gray-600 mt-1 font-neuhas line-clamp-2">
                {service.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Careers Content ---------------- */
function CareersContent({ onLinkClick }: { onLinkClick: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCareerClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split('#');

    onLinkClick();

    if (hash) {
      if (pathname === path) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 50);
      } else {
        router.push(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 500);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-3xl md:text-[32px] font-semibold text-gray-900 font-apfel2">
          Build Your Career With Us
        </h2>
        <p className="mt-4 text-gray-600 leading-7 font-neuhas">
          Join A&T Infracon's team of 200+ skilled professionals working on India's most critical and challenging infrastructure projects. From border security installations to high-altitude roads and renewable energy projects - make your mark on nation-building while building a rewarding career.
        </p>

        <CtaButton href="/careers" onClick={onLinkClick} className="mt-6 inline-flex items-center gap-4 group">
          Explore Careers
        </CtaButton>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {CAREER_FEATURES.map((c) => (
            <a
              key={c.title}
              href={c.href}
              onClick={(e) => handleCareerClick(e, c.href)}
              className="group block cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-200">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="mt-3 font-semibold text-gray-900 group-hover:text-red-600 font-apfel2">
                {c.title}
              </div>
              <div className="text-sm text-gray-600 mt-1 font-neuhas">{c.desc}</div>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t flex items-center justify-between text-xs uppercase tracking-wider text-gray-600">
          <div className="font-apfel2">A&T Infracon Careers</div>
          <a
            href="/careers#openings"
            onClick={(e) => handleCareerClick(e, '/careers#openings')}
            className="text-red-600 font-semibold hover:underline font-apfel2 cursor-pointer"
          >
            See all available positions →
          </a>
        </div>
      </div>
    </div>
  );
}