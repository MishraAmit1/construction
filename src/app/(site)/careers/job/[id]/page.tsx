'use client'
import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getJobById, submitJobApplication } from '@/lib/api/careers'
import type { Job } from '@/lib/api/careers'
import {
    ArrowRight,
    MapPin,
    Calendar,
    Clock,
    Users,
    Briefcase,
    Building,
    DollarSign,
    CheckCircle,
    Target,
    Award,
    Heart,
    Upload,
    Phone,
    User,
    FileText,
    Linkedin,
    Twitter,
    Facebook,
    MessageCircle,
    Mail,
    Link2,
    Loader2,
    X
} from 'lucide-react'

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [job, setJob] = useState<Job | null>(null)
    const [loading, setLoading] = useState(true)
    const [showApplicationForm, setShowApplicationForm] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [uploadingResume, setUploadingResume] = useState(false)
    const [applicationSuccess, setApplicationSuccess] = useState(false)

    // Form states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume_url: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState<Record<string, string>>({})

    useEffect(() => {
        loadJob()
    }, [id])

    const loadJob = async () => {
        try {
            const data = await getJobById(id)
            setJob(data)
        } finally {
            setLoading(false)
        }
    }

    const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        // Validate file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        if (!allowedTypes.includes(file.type)) {
            setFormErrors({ ...formErrors, resume: 'Please upload PDF or DOC file only' })
            return
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            setFormErrors({ ...formErrors, resume: 'File size should be less than 5MB' })
            return
        }

        setUploadingResume(true)
        try {
            // Upload to Supabase storage
            const { uploadResume } = await import('@/lib/api/careers')
            const { data: url, error } = await uploadResume(file)

            if (error) {
                setFormErrors({ ...formErrors, resume: 'Failed to upload resume' })
            } else if (url) {
                setFormData({ ...formData, resume_url: url })
                setFormErrors({ ...formErrors, resume: '' })
            }
        } catch (err) {
            console.error('Resume upload error:', err)
            setFormErrors({ ...formErrors, resume: 'Failed to upload resume' })
        } finally {
            setUploadingResume(false)
        }
    }

    const validateForm = () => {
        const errors: Record<string, string> = {}

        if (!formData.name.trim()) errors.name = 'Name is required'
        if (!formData.email.trim()) errors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email address'
        if (!formData.phone.trim()) errors.phone = 'Phone number is required'
        else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) errors.phone = 'Invalid phone number'
        if (!formData.resume_url) errors.resume = 'Resume is required'

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setSubmitting(true)
        try {
            const { success, error } = await submitJobApplication({
                job_id: id,
                ...formData
            })

            if (success) {
                setApplicationSuccess(true)
                setShowApplicationForm(false)
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    resume_url: '',
                    message: ''
                })
            } else {
                alert(error || 'Failed to submit application')
            }
        } catch (err) {
            console.error('Application submission error:', err)
            alert('Failed to submit application')
        } finally {
            setSubmitting(false)
        }
    }

    const formatList = (text: string) => {
        if (!text) return []
        return text.split('\n').filter(item => item.trim())
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 font-neuhas">Loading job details...</p>
                </div>
            </div>
        )
    }

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
                    <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
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
        <>
            <div className="min-h-screen bg-gray-50">
                {/* HERO SECTION */}
                <section className="font-apfel2 relative min-h-[50vh] lg:min-h-[55vh] py-12 flex items-center">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
                            alt="Job opportunity"
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
                                {job.departments?.name?.toUpperCase()}
                            </p>

                            <h1 className="text-white font-normal font-apfel2 mb-6 text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
                                {job.title}
                            </h1>

                            <div className="flex flex-wrap gap-4 text-white/90 font-neuhas mb-8">
                                {job.location && (
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        {job.location}
                                    </span>
                                )}
                                <span className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    {job.employment_type}
                                </span>
                                {job.experience && (
                                    <span className="flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        {job.experience}
                                    </span>
                                )}
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Posted {new Date(job.posted_on).toLocaleDateString()}
                                </span>
                            </div>
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
                            <Link href={`/careers/department/${job.department_id}`} className="hover:text-red-600">
                                {job.departments?.name?.toUpperCase()}
                            </Link>
                            <span className="mx-2">&gt;</span>
                            <span className="text-red-600 font-semibold uppercase line-clamp-1">{job.title}</span>
                        </nav>
                    </div>
                </div>

                {/* JOB DETAILS */}
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Job Overview */}
                            {job.job_overview && (
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-neuhas flex items-center">
                                        <FileText className="w-6 h-6 mr-2 text-red-600" />
                                        Job Overview
                                    </h2>
                                    <p className="text-gray-700 font-neuhas leading-relaxed">
                                        {job.job_overview}
                                    </p>
                                </div>
                            )}

                            {/* Key Responsibilities */}
                            {job.key_responsibilities && (
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-neuhas flex items-center">
                                        <Target className="w-6 h-6 mr-2 text-red-600" />
                                        Key Responsibilities
                                    </h2>
                                    <ul className="space-y-3">
                                        {formatList(job.key_responsibilities).map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700 font-neuhas">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Requirements */}
                            {job.requirements && (
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-neuhas flex items-center">
                                        <CheckCircle className="w-6 h-6 mr-2 text-red-600" />
                                        Requirements
                                    </h2>
                                    <ul className="space-y-3">
                                        {formatList(job.requirements).map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                <span className="text-gray-700 font-neuhas">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Preferred Skills */}
                            {job.preferred_skills && (
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-neuhas flex items-center">
                                        <Award className="w-6 h-6 mr-2 text-red-600" />
                                        Preferred Skills
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {formatList(job.preferred_skills).map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-neuhas"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Why Join Us */}
                            {job.why_join_us && (
                                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-neuhas flex items-center">
                                        <Heart className="w-6 h-6 mr-2 text-red-600" />
                                        Why Join Us?
                                    </h2>
                                    <ul className="space-y-3">
                                        {formatList(job.why_join_us).map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-red-600 mr-3">✦</span>
                                                <span className="text-gray-700 font-neuhas">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Job Info Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-neuhas">
                                        Job Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-500 font-neuhas">Department</p>
                                            <p className="font-semibold text-gray-900 font-neuhas flex items-center gap-2 mt-1">
                                                <Building className="w-4 h-4" />
                                                {job.departments?.name}
                                            </p>
                                        </div>

                                        {job.salary_range && (
                                            <div>
                                                <p className="text-sm text-gray-500 font-neuhas">Salary Range</p>
                                                <p className="font-semibold text-gray-900 font-neuhas flex items-center gap-2 mt-1">
                                                    <DollarSign className="w-4 h-4" />
                                                    {job.salary_range}
                                                </p>
                                            </div>
                                        )}

                                        {job.openings && (
                                            <div>
                                                <p className="text-sm text-gray-500 font-neuhas">Openings</p>
                                                <p className="font-semibold text-gray-900 font-neuhas flex items-center gap-2 mt-1">
                                                    <Users className="w-4 h-4" />
                                                    {job.openings} {job.openings === 1 ? 'Position' : 'Positions'}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setShowApplicationForm(true)}
                                        className="w-full mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-neuhas font-semibold"
                                    >
                                        Apply for this Position
                                    </button>
                                </div>



                                {/* Share Job */}
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-neuhas">
                                        Share this Job
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {/* LinkedIn */}
                                        <button
                                            onClick={() => {
                                                const url = window.location.href
                                                window.open(
                                                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                                                    '_blank'
                                                )
                                            }}
                                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all"
                                            title="Share on LinkedIn"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </button>

                                        {/* Twitter */}
                                        <button
                                            onClick={() => {
                                                const url = window.location.href
                                                const text = `We're hiring! ${job.title} position available. Apply now!`
                                                window.open(
                                                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
                                                    '_blank'
                                                )
                                            }}
                                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all"
                                            title="Share on Twitter"
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </button>

                                        {/* Facebook */}
                                        <button
                                            onClick={() => {
                                                const url = window.location.href
                                                window.open(
                                                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                                                    '_blank'
                                                )
                                            }}
                                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all"
                                            title="Share on Facebook"
                                        >
                                            <Facebook className="w-4 h-4" />
                                        </button>

                                        {/* WhatsApp */}
                                        <button
                                            onClick={() => {
                                                const url = window.location.href
                                                const text = `Check out this job opportunity: ${job.title}`
                                                window.open(
                                                    `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
                                                    '_blank'
                                                )
                                            }}
                                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all"
                                            title="Share on WhatsApp"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* APPLICATION MODAL */}
            {showApplicationForm && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                            <h2 className="text-2xl font-semibold text-gray-900 font-neuhas">
                                Apply for {job.title}
                            </h2>
                            <button
                                onClick={() => setShowApplicationForm(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-neuhas">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 ${formErrors.name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                {formErrors.name && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-neuhas">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-neuhas">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 ${formErrors.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        placeholder="9876543210"
                                    />
                                </div>
                                {formErrors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                                )}
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-neuhas">
                                    Resume/CV <span className="text-red-500">*</span>
                                </label>
                                <div className={`border-2 border-dashed rounded-lg p-6 text-center ${formErrors.resume ? 'border-red-500' : 'border-gray-300'
                                    }`}>
                                    {formData.resume_url ? (
                                        <div className="flex items-center justify-between">
                                            <span className="text-green-600 font-neuhas">Resume uploaded successfully</span>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, resume_url: '' })}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleResumeUpload}
                                                className="hidden"
                                                id="resume-upload"
                                                disabled={uploadingResume}
                                            />
                                            <label
                                                htmlFor="resume-upload"
                                                className="cursor-pointer text-red-600 hover:text-red-700 font-neuhas"
                                            >
                                                {uploadingResume ? (
                                                    <span className="flex items-center justify-center gap-2">
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Uploading...
                                                    </span>
                                                ) : (
                                                    'Click to upload or drag and drop'
                                                )}
                                            </label>
                                            <p className="text-xs text-gray-500 mt-2">PDF, DOC up to 5MB</p>
                                        </>
                                    )}
                                </div>
                                {formErrors.resume && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.resume}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 font-neuhas">
                                    Cover Letter / Message (Optional)
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                    rows={4}
                                    placeholder="Tell us why you're interested in this position..."
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setShowApplicationForm(false)}
                                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-neuhas font-semibold"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 font-neuhas font-semibold flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {applicationSuccess && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-neuhas">
                            Application Submitted!
                        </h2>
                        <p className="text-gray-600 font-neuhas mb-6">
                            Thank you for applying. We'll review your application and get back to you soon.
                        </p>
                        <button
                            onClick={() => setApplicationSuccess(false)}
                            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-neuhas font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}