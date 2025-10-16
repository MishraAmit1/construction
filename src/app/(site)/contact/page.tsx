import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Building2, Globe, Users } from 'lucide-react';
import ContactForm from '@/components/sections/contact-form';

export const metadata = {
    title: 'Contact Us | A&T Infracon',
    description: 'Get in touch with A&T Infracon for your construction and infrastructure projects.',
};

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="font-apfel2 relative min-h-[35vh] sm:min-h-[45vh] md:min-h-[55vh] py-12 flex items-center"
            >
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://hdurfgtlqgpgjjnlbctu.supabase.co/storage/v1/object/public/project-images/categories/roadconstruct%20(2).webp"
                        alt="Contact A&T Infracon"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    {/* Overlay tone — matches other headers */}
                    <div className="absolute inset-0 bg-black/80 sm:bg-black/75 md:bg-black/70" />
                </div>

                {/* Foreground content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mt-10">
                    <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl text-white">
                        <p className="font-neuhas text-yellow-400 font-thin tracking-widest mb-2 text-sm sm:text-base md:text-[16px] uppercase">
                            Contact
                        </p>

                        <h1
                            className="text-white font-normal font-apfel2 mb-4 md:mb-6
                   text-[clamp(2.2rem,6vw,6rem)] leading-[1.05]
                   [text-wrap:balance]"
                        >
                            Let's Build Together
                        </h1>

                        <p
                            className="font-neuhas text-[15px] sm:text-[16px] md:text-[24px]
                   leading-[1.6] md:leading-[36px] font-medium
                   text-white/85 sm:text-white/90 md:max-w-3xl"
                        >
                            Transform your infrastructure vision into reality with India’s trusted contractor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content - Swapped Layout */}
            <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Contact Form - Left Side (3 columns) */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-12">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-apfel2 font-normal text-gray-900 mb-2">Send Us Your Project Inquiry</h2>
                                <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[28px] font-neuhas text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info - Right Side (2 columns) */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Main Contact Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-apfel2 font-normal text-gray-900 mb-6 flex items-center">
                                    <Building2 className="h-6 w-6 text-red-600 mr-3" />
                                    Head Office
                                </h3>

                                <div className="space-y-5">
                                    {/* Address */}
                                    <div className="flex items-start group">
                                        <MapPin className="h-5 w-5 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                                        <div className="ml-4">
                                            <p className="font-semibold text-gray-900 font-neuhas">A&T Infracon Pvt. Ltd.</p>
                                            <p className="text-sm sm:text-base font-neuhas text-gray-600 mt-1">
                                                506, 5th Floor, Aagam Avenue<br />
                                                Acher, Sabarmati<br />
                                                Ahmedabad - 380005, Gujarat
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start group">
                                        <Phone className="h-5 w-5 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                                        <div className="ml-4">
                                            <p className="font-semibold text-gray-900 mb-1 font-neuhas">Call Us</p>
                                            <a href="tel:+917935703085" className="text-sm sm:text-base font-neuhas text-gray-600 hover:text-red-600 transition-colors">
                                                +91 79357 03085
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start group">
                                        <Mail className="h-5 w-5 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                                        <div className="ml-4">
                                            <p className="font-semibold text-gray-900 mb-1 font-neuhas">Email Us</p>
                                            <a href="mailto:atinfracon@gmail.com" className="text-sm sm:text-base font-neuhas text-gray-600 hover:text-red-600 transition-colors">
                                                atinfracon@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start group">
                                        <Clock className="h-5 w-5 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                                        <div className="ml-4">
                                            <p className="font-semibold text-gray-900 mb-1 font-neuhas">Working Hours</p>
                                            <p className="text-sm sm:text-base font-neuhas text-gray-600">
                                                Mon - Fri: 9:00 AM - 6:00 PM<br />
                                                Saturday: 9:00 AM - 2:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-red-600 font-apfel2">35+</div>
                                            <div className="text-xs text-gray-600 font-neuhas">Years Experience</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-red-600 font-apfel2">500+</div>
                                            <div className="text-xs text-gray-600 font-neuhas">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-red-600 font-apfel2">4</div>
                                            <div className="text-xs text-gray-600 font-neuhas">States</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Branch Office */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center font-neuhas">
                                        <Globe className="h-4 w-4 text-red-600 mr-2" />
                                        Branch Office
                                    </h4>
                                    <p className="text-gray-600 text-sm font-neuhas">
                                        Barmer, Rajasthan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section with Better Design */}
            <section className="py-0">
                <div className="relative h-[400px] sm:h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7139746818574!2d72.55920931496769!3d23.034373384945576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1665647337054!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale"
                    ></iframe>
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
            </section>

            {/* CTA Section with Better Design */}
            <section className="relative py-20 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-apfel2 font-normal leading-tight mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-[14px] sm:text-[16px] md:text-[22px] leading-[30px] font-neuhas text-gray-700 mb-10 max-w-3xl mx-auto">
                        Join hundreds of satisfied clients who trust A&T Infracon for their critical infrastructure projects
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:+917935703085"
                            className="group px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-neuhas"
                        >
                            <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                            Call Now: +91 79357 03085
                        </a>
                        <a
                            href="mailto:atinfracon@gmail.com"
                            className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-neuhas"
                        >
                            <Mail className="mr-3 h-5 w-5 text-red-600 group-hover:animate-pulse" />
                            Email Your Requirements
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}