"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

export default function ProjectsSearchBar() {
    const [query, setQuery] = useState("");

    return (
        <section className="bg-[#f2f5f7] border-b">
            <div className="container mx-auto px-6 sm:px-8 py-6">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Link
                        href="/"
                        className="text-gray-500 hover:text-primary transition-colors"
                    >
                        HOME
                    </Link>
                    <span className="mx-2 text-gray-400">{">"}</span>
                    <span className="font-semibold text-red-600">PROJECTS</span>
                </div>

                {/* Search Bar */}
                <div className="relative bg-white shadow-sm border border-gray-200 rounded-md overflow-hidden">
                    <div className="flex items-center">
                        {/* Search icon */}
                        <div className="pl-4 text-red-500">
                            <Search className="h-5 w-5" />
                        </div>
                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search for Projects..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full px-3 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                        />
                        {/* Red circle button */}
                        <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-3 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200"
                            aria-label="Search"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}