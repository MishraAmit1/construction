'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Users,
  Building,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  Plus,
  X
} from 'lucide-react';
import { projects } from "@/lib/data";
import { HearFromPeople } from './HearFromPeople';
import {
  getAllDepartments,
  getActiveJobs,
  getJobCountByDepartment,
  type Department,
  type Job
} from '@/lib/api/careers';

export function Careers() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobCounts, setJobCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  // For Featured Projects scroll
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemsPerView, setItemsPerView] = useState(3);
  const totalItems = projects.length;

  // For Life at Bechtel cards
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [deptData, jobData, countData] = await Promise.all([
        getAllDepartments(),
        getActiveJobs(),
        getJobCountByDepartment()
      ]);

      setDepartments(deptData);
      setJobs(jobData);
      setJobCounts(countData);
    } finally {
      setLoading(false);
    }
  };

  // Responsive items per view for projects
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / totalItems;
      const index = Math.round(scrollLeft / itemWidth) + 1;
      setCurrentIndex(Math.min(index, totalItems - itemsPerView + 1));
    }
  };

  const scrollToIndex = (direction: 'prev' | 'next') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / totalItems;
      const currentScroll = scrollRef.current.scrollLeft;

      if (direction === 'next') {
        scrollRef.current.scrollTo({
          left: currentScroll + itemWidth,
          behavior: 'smooth'
        });
      } else {
        scrollRef.current.scrollTo({
          left: currentScroll - itemWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Life at Bechtel cards data
  const cardsData = [
    {
      id: 1,
      title: 'Benefits & Perks',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
      shortDesc: 'Comprehensive health, retirement, and wellness programs for you and your family.',
      description: 'The health and well-being of our colleagues and their families is our top priority. The benefits we offer vary from country to country, based on local practices, customs, and statutory conditions, but may include competitive compensation, medical benefits, retirement plans, life insurance, and paid time off. As a Bechtel colleague, you also have access to a number of professional development opportunities, including virtual courses through Bechtel University.'
    },
    {
      id: 2,
      title: 'Business Resource Groups',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      shortDesc: 'Employee-led communities fostering diversity and inclusive workplace culture.',
      description: 'Our Business Resource Groups (BRGs) are voluntary, employee-led communities that foster a diverse and inclusive workplace. These groups provide networking, mentoring, and professional development opportunities while supporting Bechtel\'s business objectives. Join colleagues who share common interests and backgrounds to make a meaningful impact.'
    },
    {
      id: 3,
      title: 'Veterans Programs',
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80',
      shortDesc: 'Dedicated support and career paths for military veterans and families.',
      description: 'We are committed to supporting veterans and their families through dedicated programs and career opportunities. Our Veterans Program helps transitioning service members find meaningful careers at Bechtel, leveraging their unique skills and leadership experience gained in military service.'
    },
    {
      id: 4,
      title: 'Early Career Programs',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      shortDesc: 'Internships, apprenticeships, and graduate programs to launch your career.',
      description: 'Launch your career with Bechtel through our internships, apprenticeships, and graduate programs. We provide hands-on experience, mentorship, and training to help you develop the skills needed for a successful career in engineering and construction.'
    },
    {
      id: 5,
      title: 'Learning & Development',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      shortDesc: 'Continuous learning through Bechtel University and training programs.',
      description: 'Continuous learning is at the heart of our culture. Through Bechtel University and various training programs, we invest in your growth with technical courses, leadership development, and certification opportunities to help you advance your career.'
    },
    {
      id: 6,
      title: 'Global Opportunities',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
      shortDesc: 'Work on iconic projects across six continents and diverse cultures.',
      description: 'Work on projects around the world and experience diverse cultures while building your career. Our global presence offers unique opportunities to work on iconic projects across six continents, expanding your perspective and professional network.'
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="font-apfel2 relative min-h-[60vh] lg:min-h-[75vh] py-12 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Construction site"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
          <div className="max-w-4xl text-white">
            <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base">
              CAREERS
            </p>

            <h1 className="text-white font-normal font-apfel2 mb-6 text-[clamp(2.4rem,6.3vw,6.3rem)] leading-[1.05]">
              Build Your Future <br />With Us
            </h1>

            <p className="font-neuhas text-[16px] md:text-[24px] leading-[1.6] md:leading-[36px] font-medium text-white/90 max-w-3xl">
              Join our team of professionals who are passionate about building infrastructure that matters.
              We offer exciting opportunities across various departments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#openings"
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-neuhas font-semibold flex items-center gap-2"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-[#edf3f5] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-4">
          <nav className="flex items-center text-sm text-gray-600 font-neuhas">
            <Link href="/" className="hover:text-red-600">
              HOME
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-red-600 font-semibold uppercase">CAREERS</span>
          </nav>
        </div>
      </div>

      {/* WHY BECHTEL SECTION */}
      <section className="bg-white py-10 sm:py-14 md:py-20">
        <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-0 items-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 px-0 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-md">
                  <Image
                    src="https://www.bechtel.com/wp-content/uploads/2025/01/PA2354399-portrait-180-1-400x400.webp"
                    alt="Industrial equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-md">
                  <Image
                    src="https://www.bechtel.com/wp-content/uploads/2025/01/PA2049639_299-400x400.webp"
                    alt="LNG storage facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-md">
                <Image
                  src="https://www.bechtel.com/wp-content/uploads/2025/01/RL1_2079-900x600.webp"
                  alt="LNG facility construction"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:pl-8 xl:pl-12 pl-5 py-4 sm:py-6 md:py-8 order-1 md:pr-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight text-gray-900 mb-6 sm:mb-8 md:mb-12">
                Why Bechtel?
              </h2>

              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-700 text-[14px] sm:text-[16px] md:text-[22px] leading-[30px] font-neuhas">
                <p>
                  At Bechtel, we are committed to fostering an inclusive culture where every
                  individual feels a profound sense of belonging and value. Rigorous safety
                  measures and comprehensive benefits support our people in achieving exceptional results with confidence.
                </p>
                <p>
                  We invest in our people through tools, training, and global opportunities.
                  Our commitment extends to the communities where we operate, striving for positive and sustainable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS SECTION */}
      <section id="openings" className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal text-gray-900 mb-6">
              Explore Opportunities by Department
            </h2>
            <p className="text-[18px] md:text-[22px] text-gray-700 font-neuhas max-w-3xl mx-auto">
              Find the perfect role that matches your skills and passion across our various departments.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => {
                const count = jobCounts[dept.id] || 0;
                return (
                  <Link
                    key={dept.id}
                    href={`/careers/department/${dept.id}`}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-red-600"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                        <Building className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-neuhas group-hover:text-red-600 transition-colors">
                      {dept.name}
                    </h3>

                    {dept.description && (
                      <p className="text-gray-600 text-sm mb-3 font-neuhas line-clamp-2">
                        {dept.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 font-neuhas">
                        {count} {count === 1 ? 'Opening' : 'Openings'}
                      </span>
                      <span className="text-sm text-red-600 font-semibold font-neuhas group-hover:underline">
                        View Jobs →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>


      {/* FEATURED PROJECTS SECTION */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-secondary/30">
        <div className="w-full">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal text-primary leading-tight mb-3 sm:mb-4 md:mb-5 text-left">
              Featured Projects
            </h2>
          </div>

          <div
            ref={scrollRef}
            className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200 scroll-smooth"
          >
            <div className="flex gap-4 sm:gap-5 md:gap-6 pb-3 sm:pb-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href="#"
                  className="group block flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[calc((100vw-7rem-3rem)/3)] xl:w-[calc((100vw-14rem-3rem)/3)]"
                >
                  <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white flex flex-col justify-end flex-grow overflow-hidden">
                      <div className="transition-transform duration-500 ease-in-out translate-y-6 sm:translate-y-8 group-hover:translate-y-0">
                        <p className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider font-neuhas">
                          {project.location}
                        </p>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-apfel2 font-normal mt-1 mb-1 sm:mb-2">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/90 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out mt-1 sm:mt-2 line-clamp-2 font-neuhas">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-3 sm:mt-4 flex justify-end">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-red-600 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent">
                          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
            <button
              onClick={() => scrollToIndex('prev')}
              disabled={currentIndex === 1}
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-red-600 font-semibold text-sm sm:text-base font-neuhas">
              {currentIndex} – {Math.min(currentIndex + itemsPerView - 1, totalItems)} of {totalItems}
            </span>

            <button
              onClick={() => scrollToIndex('next')}
              disabled={currentIndex >= totalItems - itemsPerView + 1}
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* LIFE AT BECHTEL SECTION */}
      <div className="mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal text-primary leading-tight">
            Life at Bechtel
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[22px] leading-[30px] font-neuhas text-[#30454c] max-w-full lg:max-w-2xl lg:ml-auto">
            We work every day to foster a culture that values and seeks out many perspectives, and encourages colleagues to explore, think innovatively, and grow professionally. We're proud to offer numerous benefits and opportunities to our colleagues to invest in their success and empower them to reach their full potential.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-10 sm:py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {cardsData.map((card) => (
              <div key={card.id} className="relative">
                <div
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl"
                  onClick={() => setExpandedCard(card.id)}
                >
                  <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 lg:p-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-white mb-2 sm:mb-3">
                        {card.title}
                      </h3>

                      <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out font-neuhas">
                          {card.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 transform transition-all duration-500">
                    <div className="bg-red-600 text-white rounded-full p-2 sm:p-2.5 md:p-3 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      {expandedCard && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-5 md:p-6 backdrop-blur-sm"
          onClick={() => setExpandedCard(null)}
        >
          <div
            className="bg-white rounded-lg max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-500 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {cardsData.map((card) => {
              if (card.id !== expandedCard) return null;
              return (
                <div key={card.id} className="relative">
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-red-600 text-white rounded-full p-2 sm:p-2.5 md:p-3 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6 md:p-7 lg:p-8 overflow-y-auto max-h-[calc(85vh-12rem)] sm:max-h-[calc(90vh-15rem)] md:max-h-[calc(90vh-18rem)]">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-4 sm:mb-5 md:mb-6">
                      {card.title}
                    </h2>
                    <p className="text-[14px] sm:text-[16px] md:text-[22px] leading-[30px] font-neuhas text-gray-700">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <HearFromPeople />

      {/* EQUAL OPPORTUNITY + JOB FRAUD ALERT */}
      <section className="bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-gray-700 border-t border-gray-100 overflow-hidden">
        <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto space-y-6 sm:space-y-8 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          <p className="italic break-words font-neuhas">
            <strong>Bechtel</strong> is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity and expression, age, national origin, disability, citizenship status (except as authorized by law), protected veteran status, genetic information, and any other characteristic protected by federal, state or local law.
          </p>

          <p className="italic break-words font-neuhas">
            Applicants with a disability who require a reasonable accommodation for any part of the application or hiring process may email their request to{' '}
            <Link
              href="mailto:accesstmt@bechtel.com"
              className="text-red-600 underline hover:no-underline break-all"
            >
              accesstmt@bechtel.com
            </Link>
            {' '}for assistance. Determinations on requests for reasonable accommodation will be made on a case‑by‑case basis.
          </p>

          <div
            className="group relative mt-8 sm:mt-10 md:mt-12 bg-[#f3f6f7] rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-500 hover:bg-red-600 cursor-pointer overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-apfel2 font-normal text-gray-800 mb-2 sm:mb-3 transition-all duration-500 group-hover:text-white">
                  Job Fraud Alert
                </h3>
                <p className="text-gray-700 max-w-full sm:max-w-lg md:max-w-2xl transition-all duration-500 group-hover:text-white/90 break-words text-sm sm:text-base font-neuhas">
                  If you're interested in joining our team, please only correspond with legitimate Bechtel communications to ensure your information is safe and secure.
                </p>
              </div>

              <div className="flex-shrink-0 h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] rounded-full bg-[#feecec] text-red-600 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-red-600">
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}