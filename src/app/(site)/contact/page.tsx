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
            <section className="relative h-[30vh] sm:h-[40vh] min-h-[250px] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://hdurfgtlqgpgjjnlbctu.supabase.co/storage/v1/object/public/project-images/categories/roadconstruct%20(2).webp"
                        alt="Contact A&T Infracon"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                    <div className="max-w-3xl text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Let's Build Together
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90">
                            Transform your infrastructure vision into reality with India's trusted contractor
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
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send Us Your Project Inquiry</h2>
                                <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info - Right Side (2 columns) */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Main Contact Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Building2 className="h-6 w-6 text-red-600 mr-3" />
                                    Head Office
                                </h3>

                                <div className="space-y-5">
                                    {/* Address */}
                                    <div className="flex items-start group">
                                        <MapPin className="h-5 w-5 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-900">A&T Infracon Pvt. Ltd.</p>
                                            <p className="text-gray-600 mt-1">
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
                                            <p className="font-medium text-gray-900 mb-1">Call Us</p>
                                            <a href="tel:+917935703085" className="text-gray-600 hover:text-red-600 transition-colors">
                                                +91 79357 03085
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start group">
                                        <Mail className="h-5 w-5 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-900 mb-1">Email Us</p>
                                            <a href="mailto:atinfracon@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors">
                                                atinfracon@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start group">
                                        <Clock className="h-5 w-5 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-900 mb-1">Working Hours</p>
                                            <p className="text-gray-600">
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
                                            <div className="text-2xl font-bold text-red-600">35+</div>
                                            <div className="text-xs text-gray-600">Years Experience</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-red-600">500+</div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-red-600">4</div>
                                            <div className="text-xs text-gray-600">States</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Branch Office */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                        <Globe className="h-4 w-4 text-red-600 mr-2" />
                                        Branch Office
                                    </h4>
                                    <p className="text-gray-600 text-sm">
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
            <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Join hundreds of satisfied clients who trust A&T Infracon for their critical infrastructure projects
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:+917935703085"
                            className="group px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                            Call Now: +91 79357 03085
                        </a>
                        <a
                            href="mailto:atinfracon@gmail.com"
                            className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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