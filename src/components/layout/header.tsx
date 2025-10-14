"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../app/public/logo_design_f__2_-removebg-preview.png";
import logo1 from "../../app/public/logo-removebg-preview (3).png";

const mainNavLinks = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "APPROACH", href: "/approach" },
  { name: "BLOG", href: "/blog" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 10);

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const shouldHaveBackground = isHovered || hasScrolled || mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          } ${shouldHaveBackground
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background"
            : "bg-transparent"
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top red bar */}
        <div
          className={`h-[3px] sm:h-1 bg-red-600 transition-opacity duration-300 ${shouldHaveBackground ? "opacity-100" : "opacity-0"
            }`}
        ></div>

        {/* Main Navigation Container */}
        <div className="container flex h-16 sm:h-18 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative h-10 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32">
              <Image
                src={logo}
                alt="A&T Logo"
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${shouldHaveBackground ? "opacity-0" : "opacity-100"
                  }`}
              />
              <Image
                src={logo1}
                alt="A&T Logo"
                fill
                priority
                className={`object-contain transition-opacity duration-300 ${shouldHaveBackground ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
            <nav className="flex items-center gap-6 xl:gap-12">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] lg:text-sm xl:text-[15px] font-semibold tracking-wider transition-colors ${shouldHaveBackground
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden relative z-50 ${mobileMenuOpen
                ? "text-foreground"
                : !shouldHaveBackground
                  ? "text-white hover:text-white/80 hover:bg-white/10"
                  : "hover:bg-secondary/80"
              }`}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${mobileMenuOpen ? "opacity-50" : "opacity-0"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white shadow-lg transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          {/* Header spacer */}
          <div className="h-16 sm:h-18 md:h-20" />
          <div className="h-1 bg-red-600" />

          {/* Menu items */}
          <nav className="px-4 py-6 sm:px-6 sm:py-8">
            <div className="space-y-1">
              {mainNavLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base sm:text-lg font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-600 rounded-lg tracking-wider transition-all duration-300 ${mobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                    }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
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