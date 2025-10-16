'use client'
import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { getApplicationById, deleteApplication } from '@/lib/api/admin'
import {
    ChevronLeft,
    User,
    Mail,
    Phone,
    Briefcase,
    MapPin,
    Calendar,
    FileText,
    Download,
    Trash2,
    Building,
    Clock,
    MessageSquare,
    ExternalLink
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ViewApplicationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [application, setApplication] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        loadApplication()
    }, [])

    const loadApplication = async () => {
        try {
            const data = await getApplicationById(id)
            setApplication(data)
        } catch (err) {
            console.error('Error loading application:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this application?')) {
            return
        }

        setDeleteLoading(true)
        try {
            const { error } = await deleteApplication(id)
            if (error) {
                alert('Failed to delete application')
            } else {
                router.push('/admin/careers')
            }
        } finally {
            setDeleteLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        )
    }

    if (!application) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <p className="text-red-600">Application not found</p>
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
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-6">
                <Link
                    href="/admin/careers"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to Applications
                </Link>

                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Application Details</h1>
                        <p className="text-gray-600 mt-2">
                            Submitted on {new Date(application.applied_at).toLocaleString()}
                        </p>
                    </div>

                    <button
                        onClick={handleDelete}
                        disabled={deleteLoading}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2 disabled:opacity-50"
                    >
                        {deleteLoading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                            <Trash2 className="w-4 h-4" />
                        )}
                        Delete Application
                    </button>
                </div>
            </div>

            {/* Applicant Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <User className="w-5 h-5 mr-2 text-gray-600" />
                    Applicant Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <p className="text-lg font-medium text-gray-900 mt-1">
                            {application.name}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email Address</label>
                        <a
                            href={`mailto:${application.email}`}
                            className="text-lg font-medium text-indigo-600 hover:text-indigo-700 mt-1 flex items-center gap-1"
                        >
                            <Mail className="w-4 h-4" />
                            {application.email}
                        </a>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Phone Number</label>
                        <a
                            href={`tel:${application.phone}`}
                            className="text-lg font-medium text-gray-900 mt-1 flex items-center gap-1"
                        >
                            <Phone className="w-4 h-4" />
                            {application.phone}
                        </a>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Applied On</label>
                        <p className="text-lg font-medium text-gray-900 mt-1 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {new Date(application.applied_at).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            {/* Job Information */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center text-indigo-900">
                    <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                    Job Applied For
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-indigo-700">Position</label>
                        <p className="text-lg font-semibold text-gray-900 mt-1">
                            {application.jobs?.title}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm text-indigo-700">Department</label>
                            <p className="font-medium text-gray-900 mt-1 flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                {application.jobs?.departments?.name}
                            </p>
                        </div>

                        <div>
                            <label className="text-sm text-indigo-700">Location</label>
                            <p className="font-medium text-gray-900 mt-1 flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {application.jobs?.location || 'Not specified'}
                            </p>
                        </div>

                        <div>
                            <label className="text-sm text-indigo-700">Type</label>
                            <p className="font-medium text-gray-900 mt-1">
                                {application.jobs?.employment_type}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resume */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-gray-600" />
                    Resume
                </h2>

                {application.resume_url ? (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Resume Document</p>
                                <p className="text-sm text-gray-500">Click to view or download</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <a
                                href={application.resume_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View
                            </a>
                            <a
                                href={application.resume_url}
                                download
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </a>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">No resume uploaded</p>
                )}
            </div>

            {/* Message */}
            {application.message && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2 text-gray-600" />
                        Applicant's Message
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700 whitespace-pre-wrap">
                            {application.message}
                        </p>
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={`mailto:${application.email}`}
                        className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        Send Email
                    </a>
                    <a
                        href={`tel:${application.phone}`}
                        className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        Call Applicant
                    </a>
                    {application.resume_url && (
                        <a
                            href={application.resume_url}
                            download
                            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}