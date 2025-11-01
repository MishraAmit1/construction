"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Phone, Mail, MapPin, CheckCircle2, Award, Users,
  Building2, Shield, Leaf, Star, Factory, Truck, Hammer,
  Settings, Wrench, Cpu,
  LineChartIcon,
  ListEnd,
  MoveRight,
  List,
  ListCheck,
  Check
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-bold text-red-600 mb-2">
      {prefix}{count}{suffix}
    </div>
  );
}

// Fade In Animation Component
function FadeInSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-100",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}

// ✅ EQUIPMENT TABS COMPONENT
function EquipmentTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Production Plants",
      icon: Factory,
      stats: { total: "18", uptime: "94%" },  // 19 se 18 ho jayega
      image: "/images/about7.png",
      equipment: [
        { name: "Crusher", location: "240 TPH (Banaskantha) & 150 TPH (Kutch)", qty: "4" },
        { name: "Batch Type Hot Mix Plant", location: "Multiple sites", qty: "2" },
        { name: "Drum Mix Plant", location: "Various locations", qty: "4" },
        { name: "Concrete Batching Plant", location: "On-demand deployment", qty: "4" },
        { name: "WMM Plant", location: "Road projects", qty: "2" },
        { name: "Concrete Pump", location: "Static & truck mounted", qty: "3" }
      ]
    },
    {
      name: "Earth Moving",
      icon: Truck,
      stats: { total: "90", uptime: "96%" },
      image: "/images/about8.png",

      equipment: [
        { name: "Excavator", location: "0.8 to 2.5 cum capacity", qty: "22" },
        { name: "Wheel Loader", location: "2.5 to 3.5 cum capacity", qty: "8" },
        { name: "Motor Grader", location: "140-180 HP", qty: "2" },
        { name: "Heavy Duty Tipper", location: "20-25 ton capacity", qty: "55" },
        { name: "Low-Bed Trailer", location: "40-60 ton capacity", qty: "3" }
      ]
    },
    {
      name: "Concrete Equipment",
      icon: Hammer,
      stats: { total: "20", uptime: "92%" },
      image: "/images/about9.png",

      equipment: [
        { name: "Transit Mixer", location: "7-10 cum capacity", qty: "12" },
        { name: "Bar Cutting Machine", location: "Up to 40mm capacity", qty: "5" },
        { name: "Bar Bending Machine", location: "Up to 40mm capacity", qty: "5" },
        { name: "Concrete Vibrators", location: "Needle & plate type", qty: "Multiple" },
        { name: "Finishing Equipment", location: "Trowels & screeds", qty: "Multiple" }
      ]
    },
    {
      name: "Paving & Compaction",
      icon: Settings,
      stats: { total: "17", uptime: "95%" },
      image: "/images/about10.png",

      equipment: [
        { name: "Bituminous/WMM Paver", location: "Sensor based", qty: "6" },
        { name: "Concrete Paver", location: "Slip form type", qty: "1" },
        { name: "Soil Compactor", location: "12-14 ton", qty: "4" },
        { name: "Tandem Roller", location: "8-10 ton", qty: "2" },
        { name: "Pneumatic Tyre Roller (PTR)", location: "Heavy duty", qty: "2" },
        { name: "Baby Roller", location: "Hand operated", qty: "2" }
      ]
    },
    {
      name: "Support Equipment",
      icon: Wrench,
      stats: { total: "22", uptime: "98%" },
      image: "/images/about11.png",

      equipment: [
        { name: "Bituminous Pressure Sprayer", location: "Mechanical type", qty: "6" },
        { name: "Bitumen Chip Spreader", location: "Mechanical type", qty: "1" },
        { name: "Water Tanker", location: "6000-10000 ltr capacity", qty: "15" },
        { name: "Diesel Tanker", location: "6000 ltr capacity", qty: "1" },
        { name: "Power Generator", location: "250-500 KVA", qty: "Multiple" },
        { name: "Survey Equipment", location: "Total station & GPS", qty: "Multiple" }
      ]
    },
  ];

  const activeData = tabs[activeTab];
  const Icon = activeData.icon;

  return (
    <div>
      {/* Tab Buttons */}
      <div className="grid grid-cols-3 sm:flex gap-3 mb-10 justify-center font-neuhas place-items-center">
        {tabs.map((tab, idx) => {
          const TabIcon = tab.icon;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "md:px-4 px-0 py-1 rounded-full font-neuhas transition-all duration-300 text-[12px] md:text-[16px] flex items-center gap-2 min-w-[100px] sm:min-w-[140px] justify-center",
                activeTab === idx
                  ? "bg-red-600 text-white shadow-lg scale-105"
                  : "text-black hover:bg-red-100 hover:text-red-600"
              )}
            >
              <TabIcon className="md:w-4 md:h-4 w-3 h-3" />
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl overflow-hidde">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Image & Stats */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src={activeData.image}
              alt={activeData.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-end justify-between text-white">
                <div>
                </div>
                <div className="text-right">
                  <div className="font-apfel2 text-5xl font-bold mb-1">{activeData.stats.total}</div>
                  <div className="font-neuhas text-sm text-white/80">Total Units</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Equipment List */}
          <div className="p-8 lg:p-10">
            <h3 className="font-apfel2 text-3xl mb-2 text-gray-900">
              {activeData.name}
            </h3>
            <p className="font-neuhas text-gray-600 mb-8">
              Complete list of {activeData.name.toLowerCase()} in our fleet
            </p>

            {/* Equipment Table */}
            <div className="space-y-1">
              {/* Header */}
              <div className="grid grid-cols-[2fr_2fr_1fr] gap-4 pb-3 border-b-2 border-gray-200 font-neuhas text-sm text-gray-500 uppercase tracking-wide">
                <div>Equipment</div>
                <div>Specification</div>
                <div className="text-right">Qty</div>
              </div>

              {/* Equipment Rows */}
              <div className="space-y-0 max-h-[400px] overflow-y-auto">
                {activeData.equipment.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-[2fr_2fr_1fr] gap-4 py-4 border-b border-gray-100 hover:transition-colors"
                  >
                    <div className="font-neuhas font-semibold text-gray-900">{item.name}</div>
                    <div className="font-neuhas text-sm text-gray-600">{item.location}</div>
                    <div className="text-right">
                      <span className="inline-block bg-red-100 px-3 py-1 rounded-full font-apfel2 text-red-600 font-bold text-sm">
                        {item.qty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ MAIN ABOUT COMPONENT
export function About() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="font-apfel2 relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center md:py-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000"
            alt="About A&T Infracon"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
          <div className="max-w-xs md:max-w-6xl text-white">
            <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase animate-fade-in">
              ABOUT A&T INFRACON
            </p>

            <h1 className="text-white font-normal font-apfel2 mb-4 md:mb-6 text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05]">
              Engineering Infrastructure.<br />Building the Future.
            </h1>

            <p className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px] leading-[1.6] md:leading-[36px] font-medium text-white/90 md:max-w-4xl">
              Three and a half decades of transforming landscapes across Western India,
              specializing in the most challenging terrains from deserts to high-altitude borders.
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
            <span className="text-red-600 font-semibold uppercase">ABOUT US</span>
          </nav>
        </div>
      </div>

      {/* OUR STORY SECTION */}
      <FadeInSection>
        <section className="bg-white py-6 sm:py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-start px-4 sm:px-6 md:px-8">
            <div className="lg:pl-8 xl:pl-16 2xl:pl-32 py-4 sm:py-6 md:py-8 lg:py-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight sm:leading-[1.2] md:leading-[64px] text-gray-900 mb-3 sm:mb-8 md:mb-12">
                Our Company
              </h2>

              <div className="font-neuhas space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-[15px] sm:text-[16px] md:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[32px]">
                <p>
                  A&T Infracon Pvt. Ltd. has been a trusted Civil Engineering Contractor for Road and
                  Building Works for the last 35 years. We have been executing large development works
                  in Western India, particularly in the states of Gujarat, Rajasthan, Jammu & Kashmir,
                  and Leh Ladakh.
                </p>
                <p>
                  Our Registered Office is located in Ahmedabad (Gujarat) and Branch Office in Barmer (Rajasthan).
                  This strategic positioning gives us the advantage of being well-versed with local site conditions
                  and mobilizing resources in a faster and better way.
                </p>
                <p>
                  We have extensive experience executing works in tough and hostile regions of Western Rajasthan
                  and Gujarat. Our Core Competency lies in the Construction of Roads, Earthen Embankments, Border
                  Fencing, Cross Drainage, and Building Works. We have completed many projects on the Indo-Pak Border
                  in Gujarat and Rajasthan Sector for CPWD and NBCC Departments in difficult environments and site situations.
                </p>
                <p>
                  We specialize in executing construction projects in the most remote areas of Western India having
                  very harsh and hostile climatic conditions and terrain—from the deserts of Barmer & Jaisalmer districts
                  to the Rann of Kutch in Gujarat, along the Indo-Pak Border.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 px-0 sm:px-4 md:px-6">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-md">
                <Image
                  src="/images/about2.png"
                  alt="Our Journey"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 md:bottom-8 right-2 md:left-8 text-white">
                  <p className="font-apfel2 text-2xl md:text-3xl md:mb-2">Since 1989</p>
                  <p className="font-neuhas text-xs md:text-lg">Building India's Future</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-md">
                  <Image
                    src="/images/about1.png"

                    alt="Infrastructure Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-md">
                  <Image
                    src="/images/about3.png"
                    alt="Engineering Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* COMPANY OVERVIEW */}
      <FadeInSection>
        <section className="py-16 sm:py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-8">
                  Who We Are
                </h2>

                {/* <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Infrastructure Specialists</h3>
                      <p className="font-neuhas text-gray-600 leading-relaxed">
                        Leading civil engineering contractor with expertise in roads, buildings, and
                        specialized infrastructure across Gujarat, Rajasthan, Jammu & Kashmir, and Leh Ladakh.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Border Security Experts</h3>
                      <p className="font-neuhas text-gray-600 leading-relaxed">
                        Trusted by CPWD, NBCC, and defense forces for critical border infrastructure including
                        fencing, BOPs, bunkers, and strategic roads along Indo-Pak border.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-apfel2 text-xl mb-2 text-gray-900">Quality Assured</h3>
                      <p className="font-neuhas text-gray-600 leading-relaxed">
                        Modern equipment worth crores, skilled workforce of 200+ professionals, and robust
                        banking relationships ensuring world-class quality delivery.
                      </p>
                    </div>
                  </div>
                </div> */}



                <div className="space-y-8">
                  {[
                    {
                      title: "Infrastructure Specialists",
                      description: "Expert civil engineering contractor specializing in roads, buildings, and border infrastructure across challenging terrains."
                    },
                    {
                      title: "Border Security Experts",
                      description: "Trusted by CPWD, NBCC, and defense forces for critical border infrastructure and strategic roads."
                    },
                    {
                      title: "Quality Assured",
                      description: "150+ modern equipment units, 200+ skilled professionals, and proven track record of world-class delivery."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-apfel2 text-lg">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-apfel2 text-xl mb-2 text-gray-900">{item.title}</h3>
                        <p className="font-neuhas text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <p className="font-neuhas text-gray-700 italic">
                    "We maintain a robust workforce of skilled and semi-skilled professionals, supported by
                    modern equipment and machinery, delivering excellence in the most challenging terrains."
                  </p>
                  <p className="font-apfel2 text-red-600 mt-3">- A&T Infracon Management</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-[280px] md:h-[440px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/about4.png"
                    alt="Border Infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/about5.png"
                      alt="Road Construction"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/about6.png"
                      alt="Building Projects"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* STATISTICS WITH ANIMATED COUNTERS */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          <h2 className="text-center text-gray-900 font-apfel2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="md:border-r border-gray-200 last:border-r-0">
              <AnimatedCounter end={35} suffix="+" />
              <div className="text-gray-600 font-neuhas text-lg">Years of Excellence</div>
            </div>
            <div className="md:border-r border-gray-200 last:border-r-0">
              <AnimatedCounter end={200} suffix="+" />
              <div className="text-gray-600 font-neuhas text-lg">Team Members</div>
            </div>
            <div className="md:border-r border-gray-200 last:border-r-0">
              <AnimatedCounter end={161} prefix="₹" suffix=" Cr" />
              <div className="text-gray-600 font-neuhas text-lg">Annual Turnover (FY 2023-24)</div>
            </div>
            <div>
              <AnimatedCounter end={100} suffix="+" />
              <div className="text-gray-600 font-neuhas text-lg">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION, MISSION & VALUES */}
      <FadeInSection>
        <section className="py-16 sm:py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 md:mb-16 mb-4">
              Vision, Mission & Values
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-apfel2 text-2xl md:text-3xl mb-4 text-red-600">Our Vision</h3>
                  <p className="font-neuhas text-gray-700 text-[16px] md:text-[20px] leading-relaxed">
                    To lead infrastructure development across India's most challenging regions by delivering
                    robust, sustainable, and secure civil engineering solutions.
                  </p>
                </div>

                <div>
                  <h3 className="font-apfel2 text-2xl md:text-3xl mb-4 text-red-600">Our Mission</h3>
                  <ul className="space-y-3">
                    {[
                      "Ensure timely execution of complex projects",
                      "Maintain excellence in quality and engineering practices",
                      "Promote innovation in infrastructure under extreme environmental conditions",
                      "Support national security through border infrastructure development"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start font-neuhas text-gray-700 text-[16px] md:text-[18px]">
                        <Check className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-apfel2 text-2xl md:text-3xl mb-4 text-red-600">Our Core Values</h3>
                <div className="space-y-6">
                  {[
                    { icon: Check, title: "Integrity", desc: "Honest and transparent in all our dealings with clients and stakeholders" },
                    { icon: Check, title: "Excellence", desc: "Quality-first approach using modern equipment and skilled workforce" },
                    { icon: Check, title: "Teamwork", desc: "200+ professionals working together to deliver exceptional results" },
                    { icon: Check, title: "Sustainability", desc: "Environment-conscious construction practices in sensitive terrains" }
                  ].map((value, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <value.icon className="w-8 h-8 text-red-600 flex-shrink-0 top-3 relative" />
                      <div>
                        <h4 className="font-apfel2 text-xl mb-1">{value.title}</h4>
                        <p className="font-neuhas text-gray-600">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CORE COMPETENCIES */}
      <FadeInSection>
        <section className="bg-white py-16 sm:py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-800 mb-6 sm:mb-16 md:mb-20">
              Our Services & Capabilities
            </h2>

            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {/* Road Construction */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                    Road Construction
                  </h3>
                  <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                    Expertise in high-altitude hill roads to Indo-China border, CRF projects, PMGSY rural
                    connectivity, link roads, and strategic border roads. Successfully delivered projects
                    worth over ₹500 crores across challenging terrains.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                  {[
                    "Hill Roads to Indo-China Border",
                    "CRF & State Highway Projects",
                    "PMGSY Rural Connectivity",
                    "Strategic Border Roads",
                    "Widening & Strengthening",
                    "Link Roads & Bypasses"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <span className="text-red-600 mr-2 mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Border Infrastructure */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                    Border Security Infrastructure
                  </h3>
                  <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                    Specialized in security infrastructure for BSF, ITBP, and defense forces along Indo-Pak
                    and Indo-China borders. Completed 509 BOPs and extensive fencing works worth ₹200+ crores.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                  {[
                    "Border Out Posts (BOPs)",
                    "Security Fencing Systems",
                    "Fighting Bunkers",
                    "Earthen Embankments",
                    "Naka cum Machan",
                    "Cross Drainage Works"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <span className="text-red-600 mr-2 mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Civil Contracts */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                    Building & Civil Works
                  </h3>
                  <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                    Comprehensive civil engineering solutions for institutional buildings, industrial estates,
                    bridges, and infrastructure projects for CPWD, NBCC, Ircon International, and PSUs.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                  {[
                    "Institutional Buildings",
                    "Industrial Infrastructure",
                    "Bridges & Causeways",
                    "Administrative Complexes",
                    "Campus Development",
                    "Renovation & Repair"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <span className="text-red-600 mr-2 mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Renewable Energy */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-12 items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 text-red-600 mb-4">
                    Wind & Solar Power Infrastructure
                  </h3>
                  <p className="font-neuhas text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                    Civil works for renewable energy projects including WTG foundations for Suzlon, Kintech
                    Synergy, Gujarat Fluorochemicals, and solar power installations across Gujarat and Rajasthan.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-neuhas">
                  {[
                    "Wind Turbine Foundations (0.85-2.1 MW)",
                    "Solar Power Projects (10 MW+)",
                    "Substation Civil Works",
                    "Access Road Networks",
                    "Civil Support Systems",
                    "Electrical Infrastructure"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <span className="text-red-600 mr-2 mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* EQUIPMENT & RESOURCES */}
      <FadeInSection>
        <section className="py-16 sm:py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 mb-4">
                Equipment & Resources
              </h2>
              <p className="font-neuhas text-xl text-gray-600 max-w-3xl mx-auto">
                Modern machinery fleet worth crores ensuring timely project execution
              </p>
            </div>

            <EquipmentTabs />
          </div>
        </section>
      </FadeInSection>
      {/* ORGANIZATIONS WE SERVE - REDESIGNED TO MATCH THEME */}
      <FadeInSection>
        <section className="py-16 sm:py-20 md:py-28 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-12 items-start px-4 sm:px-6 md:px-8">
            <div className="lg:pl-8 xl:pl-16 2xl:pl-32 py-4 sm:py-6 md:py-8 lg:py-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight sm:leading-[1.2] md:leading-[64px] text-gray-900 mb-6 sm:mb-8 md:mb-12">
                Organizations We Serve
              </h2>

              <div className="font-neuhas space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-[15px] sm:text-[16px] md:text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[32px]">
                <p>
                  For over 35 years, we have been the trusted infrastructure partner for India's most
                  prestigious organizations. From defense establishments to government departments,
                  from PSUs to leading corporations, our client portfolio reflects the trust placed
                  in our capabilities.
                </p>
                <p>
                  We take pride in serving those who serve the nation - executing critical infrastructure
                  for defense forces along international borders, building connectivity through government
                  projects, and supporting India's energy sector through renewable infrastructure.
                </p>
              </div>

              {/* Key Statistics */}
              <div className="mt-8 space-y-4 border-l-2 border-gray-200 pl-6">
                <div>
                  <p className="font-apfel2 text-3xl text-red-600">20+</p>
                  <p className="font-neuhas text-gray-600">Government Organizations</p>
                </div>
                <div>
                  <p className="font-apfel2 text-3xl text-red-600">15+</p>
                  <p className="font-neuhas text-gray-600">PSUs & Corporates</p>
                </div>
                <div>
                  <p className="font-apfel2 text-3xl text-red-600">90%</p>
                  <p className="font-neuhas text-gray-600">Repeat Client Rate</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 px-0 sm:px-4 md:px-6">
              {/* Defense & Security */}
              <div>
                <h3 className="font-apfel2 text-xl text-red-600 mb-3">Defense & Security Forces</h3>
                <div className="font-neuhas text-gray-600 space-y-2 text-[15px] md:text-[16px]">
                  <p>✓ Border Roads Organization (BRO)</p>
                  <p>✓ Indo-Tibetan Border Police (ITBP)</p>
                  <p>✓ Border Security Force (BSF)</p>
                  <p>✓ Military Engineering Services (MES)</p>
                </div>
              </div>

              {/* Government */}
              <div>
                <h3 className="font-apfel2 text-xl text-red-600 mb-3">Central & State Departments</h3>
                <div className="font-neuhas text-gray-600 space-y-2 text-[15px] md:text-[16px]">
                  <p>✓ Central Public Work Department (CPWD)</p>
                  <p>✓ National Building Construction Corporation (NBCC)</p>
                  <p>✓ Road & Building Division, Gujarat</p>
                  <p>✓ Public Work Department, Rajasthan</p>
                  <p>✓ Airport Authority of India</p>
                  <p>✓ Irrigation Department, Rajasthan</p>
                  <p>✓ PHED & RIICO, Rajasthan</p>
                </div>
              </div>

              {/* PSUs & Corporates */}
              <div>
                <h3 className="font-apfel2 text-xl text-red-600 mb-3">Public Sector & Corporates</h3>
                <div className="font-neuhas text-gray-600 space-y-2 text-[15px] md:text-[16px]">
                  <p>✓ Indian Oil Corporation Ltd. (IOCL)</p>
                  <p>✓ Oil & Natural Gas Corporation (ONGC)</p>
                  <p>✓ GAIL India Ltd.</p>
                  <p>✓ Ircon International Ltd.</p>
                  <p>✓ Suzlon Infrastructure Services Ltd.</p>
                  <p>✓ Cairn Energy India Pvt. Ltd.</p>
                  <p>✓ Gujarat Fluorochemicals Ltd.</p>
                  <p>✓ Kintech Synergy Pvt. Ltd.</p>
                  <p>✓ Deendayal Port Authority</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CLIENT TESTIMONIALS */}
      <FadeInSection>
        <section className="py-16 sm:py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mb-12">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 mb-4">
                Client Testimonials
              </h2>
              <p className="font-neuhas text-xl text-gray-600 max-w-3xl mx-auto">
                What our clients say about working with us
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

            <div className="flex overflow-hidden">
              <div className="flex animate-scroll hover:animation-pause">
                {[
                  {
                    client: "CPWD - Border Fencing Division",
                    testimonial: "A&T Infracon has consistently delivered quality work in the most challenging border areas. Their commitment to timelines and quality in harsh terrains is exceptional.",
                    designation: "Executive Engineer, Gujarat Sector"
                  },
                  {
                    client: "ITBP - Indo China Border",
                    testimonial: "Successfully completed high-altitude road construction to Indo-China border at 15,000+ ft. Their expertise in extreme conditions is unmatched.",
                    designation: "Project Director, Ladakh"
                  },
                  {
                    client: "Rajasthan PWD",
                    testimonial: "Their expertise in desert construction is remarkable. Multiple CRF and PMGSY projects completed on time with superior quality.",
                    designation: "Superintending Engineer"
                  },
                  {
                    client: "BSF - Border Security",
                    testimonial: "Delivered 509 BOPs along Indo-Pak border with utmost precision and confidentiality. A reliable partner for critical infrastructure.",
                    designation: "Chief Engineer, Gujarat"
                  },
                  {
                    client: "NBCC Limited",
                    testimonial: "Professional approach, modern equipment, and skilled workforce make them our preferred contractor for institutional projects.",
                    designation: "General Manager (Civil)"
                  },
                  {
                    client: "Suzlon Infrastructure",
                    testimonial: "Excellent execution of wind power civil works across multiple sites. Their technical expertise and coordination is commendable.",
                    designation: "Project Manager"
                  }
                ].concat([
                  {
                    client: "CPWD - Border Fencing Division",
                    testimonial: "A&T Infracon has consistently delivered quality work in the most challenging border areas. Their commitment to timelines and quality in harsh terrains is exceptional.",
                    designation: "Executive Engineer, Gujarat Sector"
                  },
                  {
                    client: "ITBP - Indo China Border",
                    testimonial: "Successfully completed high-altitude road construction to Indo-China border at 15,000+ ft. Their expertise in extreme conditions is unmatched.",
                    designation: "Project Director, Ladakh"
                  },
                  {
                    client: "Rajasthan PWD",
                    testimonial: "Their expertise in desert construction is remarkable. Multiple CRF and PMGSY projects completed on time with superior quality.",
                    designation: "Superintending Engineer"
                  },
                  {
                    client: "BSF - Border Security",
                    testimonial: "Delivered 509 BOPs along Indo-Pak border with utmost precision and confidentiality. A reliable partner for critical infrastructure.",
                    designation: "Chief Engineer, Gujarat"
                  },
                  {
                    client: "NBCC Limited",
                    testimonial: "Professional approach, modern equipment, and skilled workforce make them our preferred contractor for institutional projects.",
                    designation: "General Manager (Civil)"
                  },
                  {
                    client: "Suzlon Infrastructure",
                    testimonial: "Excellent execution of wind power civil works across multiple sites. Their technical expertise and coordination is commendable.",
                    designation: "Project Manager"
                  }
                ]).map((test, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[400px] mx-4">
                    <div className="bg-white rounded-lg p-6 h-full border border-gray-200">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-red-600 fill-red-600" />
                        ))}
                      </div>
                      <p className="font-neuhas text-gray-700 mb-4 italic text-[15px] leading-relaxed">
                        "{test.testimonial}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-apfel2 text-lg text-gray-900">{test.client}</p>
                        <p className="font-neuhas text-sm text-gray-600">{test.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 40s linear infinite;
            }

            .animation-pause:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>
      </FadeInSection>

      {/* CALL TO ACTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-apfel2 text-gray-900 mb-6">
            Ready to Build Something Great Together?
          </h2>
          <p className="font-neuhas text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Partner with A&T Infracon for your next infrastructure project. From deserts to high-altitude
            borders, we deliver excellence everywhere.
          </p>
          <div className="mt-8 sm:mt-10 md:mt-12">
            <Link
              href="/contact"
              className={cn(
                'group relative inline-flex items-center justify-center overflow-hidden rounded-full',
                'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5',
                'text-sm sm:text-[20px] font-semibold text-red-600',
                'transition-all duration-500 ease-out',
                'min-h-[44px] sm:min-h-[48px]',
                'w-full sm:w-auto max-w-xs sm:max-w-none mx-auto md:mx-0'
              )}
            >
              <span className="absolute inset-0 rounded-full bg-red-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center md:justify-start">
                <span className="flex items-center justify-center rounded-full bg-red-600 text-white transition-all duration-500 group-hover:w-0 group-hover:opacity-0 group-hover:scale-0 mr-2 sm:mr-3 group-hover:mr-0 h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="whitespace-nowrap transition-colors duration-500 group-hover:text-white font-neuhas">

                  Start Your Project
                </span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 transition-all duration-500 group-hover:w-4 sm:group-hover:w-5 group-hover:opacity-100 group-hover:text-white group-hover:ml-2 sm:group-hover:ml-3" />
              </span>
            </Link>
          </div>
          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-red-600" />
              <span className="font-neuhas text-gray-700">+91 79357 03085</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-red-600" />
              <span className="font-neuhas text-gray-700">atinfracon@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-red-600" />
              <span className="font-neuhas text-gray-700">Ahmedabad & Barmer</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}