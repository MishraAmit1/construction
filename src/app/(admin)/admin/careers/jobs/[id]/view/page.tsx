'use client'
import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
    getJobById,
    deleteJob,
    toggleJobStatus,
    getJobApplicationsCount,
    deleteJobApplications
} from '@/lib/api/admin'
import {
    ChevronLeft,
    Edit,
    Briefcase,
    MapPin,
    Calendar,
    DollarSign,
    Users,
    Building,
    Clock,
    CheckCircle,
    XCircle,
    FileText,
    Target,
    Award,
    Heart,
    Trash2,
    AlertCircle,
    ToggleLeft,
    ToggleRight,
    AlertTriangle
} from 'lucide-react'

export default function ViewJobPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const router = useRouter()
    const [job, setJob] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [toggleLoading, setToggleLoading] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [applicationCount, setApplicationCount] = useState(0)

    useEffect(() => {
        loadJob()
    }, [])

    const loadJob = async () => {
        try {
            const data = await getJobById(id)
            setJob(data)
        } catch (err) {
            console.error('Error loading job:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleToggleStatus = async () => {
        if (!job) return

        setToggleLoading(true)
        try {
            const { error } = await toggleJobStatus(id, job.is_active)
            if (error) {
                alert('Failed to update job status')
            } else {
                // Update local state
                setJob({ ...job, is_active: !job.is_active })
            }
        } catch (err) {
            console.error('Error toggling status:', err)
            alert('Failed to update job status')
        } finally {
            setToggleLoading(false)
        }
    }

    const checkApplications = async () => {
        const { count, error } = await getJobApplicationsCount(id)
        if (!error) {
            setApplicationCount(count)
        }
        setShowDeleteModal(true)
    }

    const handleDeleteConfirm = async () => {
        setDeleteLoading(true)
        setShowDeleteModal(false)

        try {
            // First delete applications if any
            if (applicationCount > 0) {
                const { error: appsError } = await deleteJobApplications(id)
                if (appsError) {
                    alert('Failed to delete applications')
                    setDeleteLoading(false)
                    return
                }
            }

            // Then delete the job
            const { error } = await deleteJob(id)
            if (error) {
                alert(error.message || 'Failed to delete job')
            } else {
                router.push('/admin/careers')
            }
        } finally {
            setDeleteLoading(false)
        }
    }

    const formatList = (text: string) => {
        if (!text) return []
        return text.split('\n').filter(item => item.trim())
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading job details...</p>
                </div>
            </div>
        )
    }

    if (!job) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <p className="text-red-600">Job not found</p>
                    </div>
                    <Link
                        href="/admin/careers"
                        className="inline-block mt-4 text-indigo-600 hover:text-indigo-700"
                    >
                        ← Back to Careers
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <Link
                        href="/admin/careers"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 hover:bg-gray-100 px-2 py-1 rounded-lg transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to Careers
                    </Link>

                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-gray-600">
                                <span className="flex items-center gap-1">
                                    <Building className="w-4 h-4" />
                                    {job.departments?.name || 'No Department'}
                                </span>
                                {job.location && (
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Posted {new Date(job.posted_on).toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {/* Toggle Status Button */}
                            <button
                                onClick={handleToggleStatus}
                                disabled={toggleLoading}
                                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${job.is_active
                                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    } disabled:opacity-50`}
                                title={job.is_active ? 'Click to deactivate' : 'Click to activate'}
                            >
                                {toggleLoading ? (
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                                ) : job.is_active ? (
                                    <ToggleRight className="w-5 h-5" />
                                ) : (
                                    <ToggleLeft className="w-5 h-5" />
                                )}
                                {job.is_active ? 'Active' : 'Inactive'}
                            </button>

                            <Link
                                href={`/admin/careers/jobs/${id}/edit`}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 transition-colors"
                            >
                                <Edit className="w-4 h-4" />
                                Edit
                            </Link>

                            <button
                                onClick={checkApplications}
                                disabled={deleteLoading}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2 transition-colors disabled:opacity-50"
                            >
                                {deleteLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Deleting...
                                    </>
                                ) : (
                                    <>
                                        <Trash2 className="w-4 h-4" />
                                        Delete
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Status Badge - Now shows current status */}
                <div className="mb-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${job.is_active
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-gray-50 text-gray-600 border border-gray-200'
                        }`}>
                        {job.is_active ? (
                            <>
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Currently accepting applications
                            </>
                        ) : (
                            <>
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                Not accepting applications
                            </>
                        )}
                    </div>
                </div>

                {/* Rest of the content remains same... */}
                {/* Job Details Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Type</p>
                                <p className="font-semibold text-gray-900 mt-1">{job.employment_type}</p>
                            </div>
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-indigo-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Experience</p>
                                <p className="font-semibold text-gray-900 mt-1">{job.experience || 'Not specified'}</p>
                            </div>
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Clock className="w-5 h-5 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Salary</p>
                                <p className="font-semibold text-gray-900 mt-1">{job.salary_range || 'Negotiable'}</p>
                            </div>
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-yellow-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Openings</p>
                                <p className="font-semibold text-gray-900 mt-1">
                                    {job.openings} {job.openings === 1 ? 'Position' : 'Positions'}
                                </p>
                            </div>
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-purple-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* All other sections remain same - Job Overview, Responsibilities, etc. */}
                {job.job_overview && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <FileText className="w-5 h-5 mr-2 text-gray-600" />
                            Job Overview
                        </h2>
                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {job.job_overview}
                            </p>
                        </div>
                    </div>
                )}

                {job.key_responsibilities && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-gray-600" />
                            Key Responsibilities
                        </h2>
                        <ul className="space-y-3">
                            {formatList(job.key_responsibilities).map((item, index) => (
                                <li key={index} className="flex items-start group">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700">{item.replace(/^[•\-\d.]\s*/, '')}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {job.requirements && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2 text-gray-600" />
                            Requirements
                        </h2>
                        <ul className="space-y-3">
                            {formatList(job.requirements).map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{item.replace(/^[•\-]\s*/, '')}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {job.preferred_skills && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-gray-600" />
                            Preferred Skills
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {formatList(job.preferred_skills).map((item, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-200"
                                >
                                    {item.replace(/^[•\-]\s*/, '')}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {job.why_join_us && (
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4 flex items-center text-indigo-900">
                            <Heart className="w-5 h-5 mr-2 text-indigo-600" />
                            Why Join Us?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {formatList(job.why_join_us).map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
                                        <span className="text-indigo-600">✦</span>
                                    </div>
                                    <span className="text-gray-700">{item.replace(/^[•\-]\s*/, '')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                <AlertTriangle className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">Confirm Deletion</h2>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700 mb-3">
                                Are you sure you want to delete <strong>"{job.title}"</strong>?
                            </p>

                            {applicationCount > 0 && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <p className="text-yellow-800 font-medium mb-1">
                                        ⚠️ This job has {applicationCount} application{applicationCount > 1 ? 's' : ''}
                                    </p>
                                    <p className="text-yellow-700 text-sm">
                                        All applications will be permanently deleted along with the job posting.
                                    </p>
                                </div>
                            )}

                            <p className="text-red-600 text-sm mt-3">
                                This action cannot be undone.
                            </p>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirm}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Delete Job {applicationCount > 0 && `& ${applicationCount} Application${applicationCount > 1 ? 's' : ''}`}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}