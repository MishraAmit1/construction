'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import logo1 from "../../app/public/Airports.png";
import logo2 from "../../app/public/GAIL.svg";
import logo3 from "../../app/public/Indian_Oil.svg";
import logo4 from "../../app/public/Ircon_International.png";
import logo5 from "../../app/public/Suzlon.svg";
import logo6 from "../../app/public/rnco.jpg";

const clients = [
    { name: 'Airports', logo: logo1 },
    { name: 'GAIL', logo: logo2 },
    { name: 'Indian_Oil', logo: logo3 },
    { name: 'Ircon_International', logo: logo4 },
    { name: 'Suzlon', logo: logo5 },
    { name: 'rnco', logo: logo6 },
];

export default function MajorClients() {
    const [index, setIndex] = useState(0);
    const visibleCount = 4;
    const step = 1;

    // move automatically every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    });

    const handleNext = () => {
        setIndex(prev => (prev + step) % clients.length);
    };
    const handlePrev = () => {
        setIndex(prev => (prev - step + clients.length) % clients.length);
    };

    // duplicated array to give continuous slide illusion
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="mb-10">
                    <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5 text-left">
                        MAJOR CLIENTS
                    </h2>
                    <div className="flex items-start gap-2">
                        <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                        <div className="h-1 w-8 bg-red-500 rounded-full" />
                        <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                    </div>
                </div>

                {/* Slider */}
                <div className="flex items-center justify-between relative overflow-hidden">
                    {/* Left arrow */}
                    <button
                        onClick={handlePrev}
                        className="p-3 border border-gray-300 rounded-md z-20 bg-white hover:bg-red-600 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    {/* Track */}
                    <div className="flex-1 mx-6 overflow-hidden">
                        <div
                            className="flex gap-6 transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${(index * 100) / visibleCount}%)`,
                            }}
                        >
                            {duplicatedClients.map((client, idx) => (
                                <div
                                    key={`${client.name}-${idx}`}
                                    className="flex-shrink-0 w-1/4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center p-4"
                                >
                                    <div className="relative w-32 h-20 sm:w-40 sm:h-24">
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                                        {client.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={handleNext}
                        className="p-3 border border-gray-300 rounded-md z-20 bg-white hover:bg-red-600 hover:text-white transition-colors"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}