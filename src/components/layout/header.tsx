"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "../../app/public/logo-removebg-preview (3).png"

const mainNavLinks = [
  { name: "People", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "Approach", href: "/about" },
  { name: "Careers", href: "/careers" },
];

const allLinks = [
  ...mainNavLinks,
  { name: "Certifications", href: "/certifications" },
  { name: "Project Map", href: "/map" },
  { name: "Tender Enquiry", href: "/enquiry" },
]

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if user has scrolled
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Determine if background should be white
  const shouldHaveBackground = isHovered || hasScrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${shouldHaveBackground
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background border-b border-border/40"
          : "bg-transparent"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-1 bg-red-600 transition-opacity duration-300 ${shouldHaveBackground ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-32">
            <Image
              src={logo}
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${shouldHaveBackground
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/90 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`hidden md:inline-flex ${!shouldHaveBackground && 'text-white hover:text-white/80'}`}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`hidden md:inline-flex rounded-full ${shouldHaveBackground ? 'bg-secondary' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Main Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {allLinks.map(link => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link href={link.href}>{link.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`md:hidden ${!shouldHaveBackground && 'text-white'}`}
                size="icon"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {allLinks.map(link => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link href={link.href}>{link.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}