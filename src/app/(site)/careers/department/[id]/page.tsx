'use client'
import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    getJobsByDepartment,
    getDepartmentById,
    type Job,
    type Department
} from '@/lib/api/careers'
import {
    ArrowLeft,
    ArrowRight,
    Search,
    Filter,
    MapPin,
    Calendar,
    Clock,
    Users,
    Briefcase,
    ChevronDown,
    X,
    Building
} from 'lucide-react'

export default function DepartmentJobsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [department, setDepartment] = useState<Department | null>(null)
    const [jobs, setJobs] = useState<Job[]>([])
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true)

    // Filter states
    const [searchTerm, setSearchTerm] = useState('')
    const [locationFilter, setLocationFilter] = useState('')
    const [employmentTypeFilter, setEmploymentTypeFilter] = useState('')
    const [showFilters, setShowFilters] = useState(false)

    useEffect(() => {
        loadData()
    }, [id])

    useEffect(() => {
        filterJobs()
    }, [jobs, searchTerm, locationFilter, employmentTypeFilter])

    const loadData = async () => {
        try {
            const [deptData, jobsData] = await Promise.all([
                getDepartmentById(id),
                getJobsByDepartment(id)
            ])

            setDepartment(deptData)
            setJobs(jobsData)
        } finally {
            setLoading(false)
        }
    }

    const filterJobs = () => {
        let filtered = [...jobs]

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(job =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.job_overview?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        // Location filter
        if (locationFilter) {
            filtered = filtered.filter(job =>
                job.location?.toLowerCase().includes(locationFilter.toLowerCase())
            )
        }

        // Employment type filter
        if (employmentTypeFilter) {
            filtered = filtered.filter(job =>
                job.employment_type === employmentTypeFilter
            )
        }

        setFilteredJobs(filtered)
    }

    const clearFilters = () => {
        setSearchTerm('')
        setLocationFilter('')
        setEmploymentTypeFilter('')
    }

    // Get unique values for filters
    const uniqueLocations = [...new Set(jobs.map(job => job.location).filter(Boolean))]
    const uniqueEmploymentTypes = [...new Set(jobs.map(job => job.employment_type).filter(Boolean))]

    const hasActiveFilters = searchTerm || locationFilter || employmentTypeFilter

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 font-neuhas">Loading jobs...</p>
                </div>
            </div>
        )
    }

    if (!department) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Department Not Found</h1>
                    <p className="text-gray-600 mb-6">The department you're looking for doesn't exist.</p>
                    <Link
                        href="/careers"
                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-neuhas"
                    >
                        Back to Careers
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* HERO SECTION */}
            <section className="font-apfel2 relative min-h-[50vh] lg:min-h-[60vh] py-12 flex items-center">
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
                            CAREERS / {department.name.toUpperCase()}
                        </p>

                        <h1 className="text-white font-normal font-apfel2 mb-6 text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
                            {department.name} <br />Opportunities
                        </h1>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <div className="bg-[#edf3f5] border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-4">
                    <nav className="flex items-center text-sm text-gray-600 font-neuhas">
                        <Link href="/" className="hover:text-red-600">HOME</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/careers" className="hover:text-red-600">CAREERS</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-red-600 font-semibold uppercase">{department.name}</span>
                    </nav>
                </div>
            </div>

            {/* Filters Section */}
            <div id="jobs" className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 font-neuhas"
                                />
                            </div>
                        </div>

                        {/* Filter Toggle (Mobile) */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-neuhas"
                        >
                            <Filter className="w-5 h-5" />
                            Filters
                            {hasActiveFilters && (
                                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                            )}
                        </button>

                        {/* Desktop Filters */}
                        <div className="hidden lg:flex gap-4">
                            {/* Location Filter */}
                            <select
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 font-neuhas min-w-[150px]"
                            >
                                <option value="">All Locations</option>
                                {uniqueLocations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>

                            {/* Employment Type Filter */}
                            <select
                                value={employmentTypeFilter}
                                onChange={(e) => setEmploymentTypeFilter(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 font-neuhas min-w-[150px]"
                            >
                                <option value="">All Types</option>
                                {uniqueEmploymentTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>

                            {/* Clear Filters */}
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="px-4 py-3 text-gray-600 hover:text-red-600 font-neuhas flex items-center gap-2"
                                >
                                    <X className="w-4 h-4" />
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Filters Dropdown */}
                    {showFilters && (
                        <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                            <select
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 font-neuhas"
                            >
                                <option value="">All Locations</option>
                                {uniqueLocations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>

                            <select
                                value={employmentTypeFilter}
                                onChange={(e) => setEmploymentTypeFilter(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 font-neuhas"
                            >
                                <option value="">All Types</option>
                                {uniqueEmploymentTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>

                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="w-full px-4 py-3 text-gray-600 hover:text-red-600 font-neuhas flex items-center justify-center gap-2"
                                >
                                    <X className="w-4 h-4" />
                                    Clear All Filters
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Results Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8">
                {/* Results Count */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-600 font-neuhas">
                        {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
                        {hasActiveFilters && ' (filtered)'}
                    </p>

                    {hasActiveFilters && (
                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 font-neuhas">
                            <span>Active filters:</span>
                            {searchTerm && (
                                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                                    Search: {searchTerm}
                                </span>
                            )}
                            {locationFilter && (
                                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                                    Location: {locationFilter}
                                </span>
                            )}
                            {employmentTypeFilter && (
                                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                                    Type: {employmentTypeFilter}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Jobs List */}
                {filteredJobs.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl">
                        <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-neuhas">
                            {hasActiveFilters ? 'No jobs match your filters' : 'No jobs available'}
                        </h3>
                        <p className="text-gray-600 font-neuhas mb-6">
                            {hasActiveFilters
                                ? 'Try adjusting your search criteria or clearing filters.'
                                : 'Check back later for new opportunities in this department.'
                            }
                        </p>
                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-neuhas"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-600 transition-all group"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-neuhas group-hover:text-red-600 transition-colors">
                                            {job.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-neuhas mb-3">
                                            {job.location && (
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {job.location}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {job.employment_type}
                                            </span>
                                            {job.experience && (
                                                <span className="flex items-center gap-1">
                                                    <Users className="w-4 h-4" />
                                                    {job.experience}
                                                </span>
                                            )}
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                Posted {new Date(job.posted_on).toLocaleDateString()}
                                            </span>
                                        </div>

                                        {job.job_overview && (
                                            <p className="text-gray-600 font-neuhas line-clamp-2">
                                                {job.job_overview}
                                            </p>
                                        )}

                                        {/* Additional Info */}
                                        <div className="flex flex-wrap gap-3 mt-3">
                                            {job.salary_range && (
                                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-neuhas">
                                                    {job.salary_range}
                                                </span>
                                            )}
                                            {job.openings && job.openings > 1 && (
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-neuhas">
                                                    {job.openings} Openings
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <Link
                                            href={`/careers/job/${job.id}`}
                                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-neuhas font-semibold"
                                        >
                                            View Details
                                        </Link>
                                        <Link
                                            href={`/careers/job/${job.id}#apply`}
                                            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-neuhas font-semibold"
                                        >
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}