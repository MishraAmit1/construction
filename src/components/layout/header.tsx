"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../app/assets/logo_design_f__2_-removebg-preview.png";
import logo1 from "../../app/assets/logo-removebg-preview (3).png";
import { CtaButton } from "@/app/(site)/slavery-statement/page";
import { useRouter, usePathname } from 'next/navigation';

const mainNavLinks = [
  { name: "PROJECTS", href: "/projects" },
  { name: "SERVICES", href: "/services" },
  { name: "APPROACH", href: "/approach" },
  { name: "BLOG", href: "/blog" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
];

// Which items open mega
const megaEnabled = new Set(["PROJECTS", "APPROACH", "CAREERS"]);

const INFO_CARDS = [
  {
    title: "Markets",
    desc: "From border infrastructure to renewable energy, road construction to building works - we deliver specialized civil engineering solutions across challenging terrains.",
    href: "/markets",
    img: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=800&auto=format&fit=crop",
  },
];

/* ---------- Data: Approach ---------- */
const APPROACH_RIGHT = [
  {
    title: "Our Services",
    desc: "Road construction, border infrastructure, building works, bridges, and renewable energy projects executed with precision.",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop",
    href: "/approach#services",
  },
  {
    title: "Safety",
    desc: "Rigorous safety protocols across all project sites. Our workforce returns home safely, every day.",
    img: "https://www.bechtel.com/wp-content/uploads/2024/10/image-7-506x338.webp",
    href: "/approach#safety",
  },
  {
    title: "Quality",
    desc: "35+ years of maintaining highest quality standards in India's most challenging construction environments.",
    img: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
    href: "/approach#quality",
  },
  {
    title: "Ethics",
    desc: "Building trust through integrity, transparency, and ethical practices in every project we undertake.",
    img: "https://www.bechtel.com/wp-content/uploads/2024/10/Reston-104937191-1-506x337.webp",
    href: "/approach#ethics",
  },
  {
    title: "Sustainability",
    desc: "Renewable energy infrastructure and sustainable construction practices for a better tomorrow.",
    img: "https://www.bechtel.com/wp-content/uploads/2024/10/154508-1-506x380.webp",
    href: "/approach#sustainability",
  },
  {
    title: "Communities",
    desc: "Contributing to local communities across Gujarat, Rajasthan, Jammu & Kashmir, and Ladakh.",
    img: "https://i.pinimg.com/1200x/a4/27/cf/a427cf2bd4915d03ae201f4f85285282.jpg",
    href: "/approach#communities",
  },
];

const APPROACH_LEFT_LIST = [
  {
    title: "Engineering",
    desc: "Advanced engineering solutions designed for extreme conditions - from high-altitude roads to desert infrastructure.",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Procurement",
    desc: "Strategic sourcing of materials and equipment through established supplier networks across Western India.",
    img: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Construction",
    desc: "Expert execution of infrastructure projects in hostile terrains with modern equipment and skilled workforce.",
    img: "https://images.unsplash.com/photo-1463259379373-1b8b76c09ba4?q=80&w=400&auto=format&fit=crop",
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
  const [activeMega, setActiveMega] = useState<null | "PROJECTS" | "APPROACH" | "CAREERS">(null);
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

  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split('#');

    // If hash exists
    if (hash) {
      e.preventDefault();

      // Close menus
      setActiveMega(null);
      setMobileMenuOpen(false);

      // Check if we're already on the target page
      if (pathname === path) {
        // Same page - just smooth scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Different page - navigate first, then scroll
        router.push(path);

        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); // Small delay for page to render
      }
    }
  };

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

  // Close mega menu when clicking on a link
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
                src={logo}
                alt="A&T Infracon Logo"
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${shouldHaveBackground ? "opacity-0" : "opacity-100"}`}
              />
              <Image
                src={logo1}
                alt="A&T Infracon Logo"
                fill
                priority
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
                      if (!isMega) setActiveMega(null);
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

      {/* Desktop Mega Panel (Projects / Approach / Careers) */}
      <MegaPanel
        open={megaOpen}
        top={headerH}
        which={activeMega}
        onIntentClose={armClose}
        onCancelClose={cancelClose}
        marketCategories={marketCategories}
        onLinkClick={handleLinkClick}
      />

      {/* Mobile Menu */}
      <div className={`font-apfel2 fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${mobileMenuOpen ? "opacity-50" : "opacity-0"}`} onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 left-0 right-0 bg-white shadow-lg transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="h-16 sm:h-18 md:h-20" />
          <div className="h-1 bg-red-600" />
          <nav className="px-4 py-6 sm:px-6 sm:py-8 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="space-y-1 font-neuhas">
              {/* Regular Links */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
              >
                HOME
              </Link>

              {/* Projects Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "PROJECTS" ? null : "PROJECTS")}
                  className="w-full flex items-center justify-between px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
                >
                  PROJECTS
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileDropdown === "PROJECTS" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "PROJECTS" && (
                  <div className="ml-6 mt-2 space-y-2">
                    <Link
                      href="/projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded"
                    >
                      View Projects
                    </Link>
                    <Link
                      href="/projects#market"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded"
                    >
                      Markets
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Link */}
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
              >
                SERVICES
              </Link>

              {/* Approach Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "APPROACH" ? null : "APPROACH")}
                  className="w-full flex items-center justify-between px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
                >
                  APPROACH
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileDropdown === "APPROACH" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "APPROACH" && (
                  <div className="ml-6 mt-2 space-y-2">
                    <a
                      href="/approach#services"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'services';
                        setMobileMenuOpen(false);

                        if (pathname === '/approach') {
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
                          router.push('/approach');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Services
                    </a>

                    <a
                      href="/approach#safety"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'safety';
                        setMobileMenuOpen(false);

                        if (pathname === '/approach') {
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
                          router.push('/approach');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Safety
                    </a>

                    <a
                      href="/approach#quality"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'quality';
                        setMobileMenuOpen(false);

                        if (pathname === '/approach') {
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
                          router.push('/approach');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Quality
                    </a>

                    <a
                      href="/approach#ethics"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'ethics';
                        setMobileMenuOpen(false);

                        if (pathname === '/approach') {
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
                          router.push('/approach');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Ethics
                    </a>

                    <a
                      href="/approach#sustainability"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'sustainability';
                        setMobileMenuOpen(false);

                        if (pathname === '/approach') {
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
                          router.push('/approach');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Sustainability
                    </a>

                    <a
                      href="/approach#communities"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'communities';
                        setMobileMenuOpen(false);

                        if (pathname === '/approach') {
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
                          router.push('/approach');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Communities
                    </a>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
              >
                BLOG
              </Link>

              {/* Careers Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "CAREERS" ? null : "CAREERS")}
                  className="w-full flex items-center justify-between px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
                >
                  CAREERS
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileDropdown === "CAREERS" ? "rotate-180" : ""}`} />
                </button>
                {mobileDropdown === "CAREERS" && (
                  <div className="ml-6 mt-2 space-y-2">
                    <a
                      href="/careers#openings"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'openings';
                        setMobileMenuOpen(false);

                        if (pathname === '/careers') {
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
                          router.push('/careers');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Career Opportunities
                    </a>

                    <a
                      href="/careers#life-at-ant"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'life-at-ant';
                        setMobileMenuOpen(false);

                        if (pathname === '/careers') {
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
                          router.push('/careers');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Life at A&T Infracon
                    </a>

                    <a
                      href="/careers#testimonials"
                      onClick={(e) => {
                        e.preventDefault();
                        const hash = 'testimonials';
                        setMobileMenuOpen(false);

                        if (pathname === '/careers') {
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
                          router.push('/careers');
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
                      }}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded cursor-pointer"
                    >
                      Testimonials
                    </a>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider"
              >
                CONTACT
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors">
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
  which: "PROJECTS" | "APPROACH" | "CAREERS" | null;
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
        {/* Full width container with scrolling and red scrollbar */}
        <div className="h-full px-8 lg:px-12 xl:px-16 py-10 overflow-y-auto mega-menu-scroll">
          <div className="max-w-[1600px] mx-auto">
            {which === "PROJECTS" && <ProjectsContent marketCategories={marketCategories} onLinkClick={onLinkClick} />}
            {which === "APPROACH" && <ApproachContent onLinkClick={onLinkClick} />}
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
              <Link key={it.title} href="/projects#market" onClick={onLinkClick} className="flex items-start gap-4 rounded-lg hover:bg-gray-50 p-2 transition-colors">
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
        <div className="border-b border-gray-200">
          <div className="flex items-center gap-10">
            <h3 className="uppercase tracking-wide text-[13px] font-semibold pb-3 text-red-600 border-b-2 border-red-600 font-apfel2">
              Explore Projects by Market
            </h3>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {/* Dynamic Market Categories from Backend */}
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

/* ---------------- Approach Content ---------------- */
function ApproachContent({ onLinkClick }: { onLinkClick: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleApproachClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split('#');

    onLinkClick(); // Close mega menu

    if (hash) {
      if (pathname === path) {
        // Same page - smooth scroll with header offset
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 50);
      } else {
        // Different page - navigate then scroll with offset
        router.push(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
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
    } else {
      router.push(href);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Left */}
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-3xl md:text-[32px] font-semibold text-gray-900 font-apfel2">Excellence in Execution</h2>
        <p className="mt-4 text-gray-600 leading-7 font-neuhas">
          At A&T Infracon, we're committed to operating safely, ethically, and sustainably across all our projects. With 35 years of experience in challenging environments, we maintain the highest standards in quality, safety, and delivery - from the deserts of Rajasthan to the high-altitude regions of Ladakh.
        </p>

        <CtaButton href="/approach" onClick={onLinkClick} className="mt-6 inline-flex items-center gap-4 group">
          Our Approach
        </CtaButton>
        <div className="mt-10 pt-6 border-t">
          <div className="text-[12px] font-semibold tracking-wider text-gray-600 uppercase font-apfel2">What We Do</div>
          <div className="mt-4 space-y-5">
            {APPROACH_LEFT_LIST.map((it) => (
              <div key={it.title} className="flex items-start gap-4 rounded-lg hover:bg-gray-50 p-2 transition-colors">
                <div className="relative h-20 w-28 flex-shrink-0 rounded-md overflow-hidden bg-gray-200">
                  <Image src={it.img} alt={it.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 font-apfel2">{it.title}</div>
                  <div className="text-sm text-gray-600 mt-1 font-neuhas">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {APPROACH_RIGHT.map((c) => (
            <a
              key={c.title}
              href={c.href}
              onClick={(e) => handleApproachClick(e, c.href)}
              className="group block cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-200">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="mt-3 font-semibold text-gray-900 group-hover:text-red-600 font-apfel2">{c.title}</div>
              <div className="text-sm text-gray-600 mt-1 font-neuhas">{c.desc}</div>
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

    onLinkClick(); // Close mega menu

    if (hash) {
      if (pathname === path) {
        // Same page - smooth scroll with header offset
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 50);
      } else {
        // Different page - navigate then scroll with offset
        router.push(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
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
    } else {
      router.push(href);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Left */}
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

      {/* Right */}
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