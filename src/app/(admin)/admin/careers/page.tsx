'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    getAllJobs,
    getAllApplications,
    deleteJob,
    toggleJobStatus,
    getJobApplicationsCount,
    deleteJobApplications
} from '@/lib/api/admin'
import {
    Plus,
    Edit,
    Trash2,
    Eye,
    Search,
    Briefcase,
    Users,
    FileText,
    Calendar,
    MapPin,
    Building,
    ToggleLeft,
    ToggleRight,
    AlertTriangle,
    X,
    Loader2
} from 'lucide-react'

export default function AdminCareers() {
    const [activeTab, setActiveTab] = useState('jobs')
    const [jobs, setJobs] = useState<any[]>([])
    const [applications, setApplications] = useState<any[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
    const [toggleLoading, setToggleLoading] = useState<string | null>(null)

    // Modal states
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [jobToDelete, setJobToDelete] = useState<any>(null)
    const [applicationCount, setApplicationCount] = useState(0)
    const [checkingApplications, setCheckingApplications] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            const [jobsData, appsData] = await Promise.all([
                getAllJobs(),
                getAllApplications()
            ])
            setJobs(jobsData)
            setApplications(appsData)
        } finally {
            setLoading(false)
        }
    }

    const handleToggleStatus = async (jobId: string, currentStatus: boolean) => {
        setToggleLoading(jobId)
        try {
            const { error } = await toggleJobStatus(jobId, currentStatus)
            if (!error) {
                // Update local state
                setJobs(jobs.map(job =>
                    job.id === jobId ? { ...job, is_active: !currentStatus } : job
                ))
            } else {
                alert('Failed to update job status')
            }
        } catch (err) {
            console.error('Error toggling status:', err)
            alert('Failed to update job status')
        } finally {
            setToggleLoading(null)
        }
    }

    const initiateDelete = async (job: any) => {
        setJobToDelete(job)
        setCheckingApplications(true)
        setShowDeleteModal(true)

        // Check application count
        try {
            const { count } = await getJobApplicationsCount(job.id)
            setApplicationCount(count || 0)
        } catch (err) {
            console.error('Error checking applications:', err)
            setApplicationCount(0)
        } finally {
            setCheckingApplications(false)
        }
    }

    const confirmDelete = async () => {
        if (!jobToDelete) return

        setDeleteLoading(jobToDelete.id)
        setShowDeleteModal(false)

        try {
            // First delete applications if any
            if (applicationCount > 0) {
                const { error: appsError } = await deleteJobApplications(jobToDelete.id)
                if (appsError) {
                    alert('Failed to delete applications')
                    setDeleteLoading(null)
                    return
                }
            }

            // Then delete the job
            const { error } = await deleteJob(jobToDelete.id)
            if (error) {
                alert(error.message || 'Failed to delete job')
            } else {
                await loadData() // Reload data
            }
        } finally {
            setDeleteLoading(null)
            setJobToDelete(null)
            setApplicationCount(0)
        }
    }

    const cancelDelete = () => {
        setShowDeleteModal(false)
        setJobToDelete(null)
        setApplicationCount(0)
    }

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department_name?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const filteredApplications = applications.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.job_title?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        )
    }

    return (
        <>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Careers Management</h1>
                        <p className="text-gray-600 mt-2">Manage job postings and applications</p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="/admin/careers/departments"
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
                        >
                            <Building className="w-4 h-4" />
                            Departments
                        </Link>
                        <Link
                            href="/admin/careers/jobs/new"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Add New Job
                        </Link>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Active Jobs</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">
                                    {jobs.filter(j => j.is_active).length}
                                </p>
                            </div>
                            <Briefcase className="w-10 h-10 text-indigo-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Total Applications</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">
                                    {applications.length}
                                </p>
                            </div>
                            <FileText className="w-10 h-10 text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">This Week</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">
                                    {applications.filter(a => {
                                        const weekAgo = new Date()
                                        weekAgo.setDate(weekAgo.getDate() - 7)
                                        return new Date(a.applied_at) > weekAgo
                                    }).length}
                                </p>
                            </div>
                            <Users className="w-10 h-10 text-purple-600" />
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="border-b border-gray-200">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('jobs')}
                                className={`px-6 py-3 font-medium text-sm ${activeTab === 'jobs'
                                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Job Postings ({jobs.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('applications')}
                                className={`px-6 py-3 font-medium text-sm ${activeTab === 'applications'
                                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Applications ({applications.length})
                            </button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder={activeTab === 'jobs' ? 'Search jobs...' : 'Search applications...'}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    {activeTab === 'jobs' ? (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            Job Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            Department
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            Location
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            Posted
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredJobs.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                                No jobs found
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredJobs.map((job) => (
                                            <tr key={job.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {job.title}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {job.employment_type} • {job.openings} openings
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-gray-600">
                                                        {job.department_name}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <MapPin className="w-3 h-3 mr-1" />
                                                        {job.location || 'Not specified'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        {new Date(job.posted_on).toLocaleDateString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex justify-center">
                                                        <button
                                                            onClick={() => handleToggleStatus(job.id, job.is_active)}
                                                            disabled={toggleLoading === job.id}
                                                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all ${job.is_active
                                                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                                } disabled:opacity-50`}
                                                        >
                                                            {toggleLoading === job.id ? (
                                                                <Loader2 className="w-3 h-3 animate-spin" />
                                                            ) : job.is_active ? (
                                                                <ToggleRight className="w-3 h-3" />
                                                            ) : (
                                                                <ToggleLeft className="w-3 h-3" />
                                                            )}
                                                            {job.is_active ? 'Active' : 'Inactive'}
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link
                                                            href={`/admin/careers/jobs/${job.id}/view`}
                                                            className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                                            title="View"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                        </Link>
                                                        <Link
                                                            href={`/admin/careers/jobs/${job.id}/edit`}
                                                            className="p-1.5 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                            title="Edit"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </Link>
                                                        <button
                                                            onClick={() => initiateDelete(job)}
                                                            disabled={deleteLoading === job.id}
                                                            className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                                                            title="Delete"
                                                        >
                                                            {deleteLoading === job.id ? (
                                                                <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                                                            ) : (
                                                                <Trash2 className="w-4 h-4" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            Applicant
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            Applied For
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                            Applied On
                                        </th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredApplications.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                                No applications found
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredApplications.map((app) => (
                                            <tr key={app.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {app.name}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {app.email} • {app.phone}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <div className="text-sm text-gray-900">
                                                            {app.job_title}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {app.department_name} • {app.job_location}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-gray-600">
                                                        {new Date(app.applied_at).toLocaleDateString()}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link
                                                            href={`/admin/careers/applications/${app.id}`}
                                                            className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                                                        >
                                                            <Eye className="w-4 h-4" />
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900">Delete Job Posting</h2>
                            </div>
                            <button
                                onClick={cancelDelete}
                                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                Are you sure you want to delete the job posting:
                            </p>

                            <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                <p className="font-semibold text-gray-900">{jobToDelete?.title}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                    {jobToDelete?.department_name} • {jobToDelete?.location}
                                </p>
                            </div>

                            {checkingApplications ? (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <Loader2 className="w-4 h-4 animate-spin text-yellow-600 mr-2" />
                                        <p className="text-yellow-800 text-sm">Checking for applications...</p>
                                    </div>
                                </div>
                            ) : applicationCount > 0 ? (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="flex items-start">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-red-800 font-semibold">
                                                Warning: This job has {applicationCount} application{applicationCount > 1 ? 's' : ''}!
                                            </p>
                                            <p className="text-red-700 text-sm mt-1">
                                                All applications associated with this job will be permanently deleted.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-blue-800 text-sm">
                                        This job has no applications and can be safely deleted.
                                    </p>
                                </div>
                            )}

                            <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                                <p className="text-gray-600 text-xs">
                                    <strong>Note:</strong> This action cannot be undone. The job posting
                                    {applicationCount > 0 && ` and all ${applicationCount} application${applicationCount > 1 ? 's' : ''}`} will
                                    be permanently removed from the system.
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 rounded-b-xl">
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                {applicationCount > 0
                                    ? `Delete Job & ${applicationCount} Application${applicationCount > 1 ? 's' : ''}`
                                    : 'Delete Job'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}