'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createJob, getAllDepartments } from '@/lib/api/admin'
import {
    Save,
    ChevronLeft,
    AlertCircle,
    CheckCircle,
    Loader2,
    Briefcase,
    MapPin,
    Calendar,
    DollarSign,
    Users
} from 'lucide-react'

export default function NewJobPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [departments, setDepartments] = useState<any[]>([])

    const [formData, setFormData] = useState({
        department_id: '',
        title: '',
        location: '',
        employment_type: 'Full-time',
        experience: '',
        salary_range: '',
        openings: 1,
        job_overview: '',
        key_responsibilities: '',
        requirements: '',
        preferred_skills: '',
        why_join_us: '',
        is_active: true
    })

    useEffect(() => {
        loadDepartments()
    }, [])

    const loadDepartments = async () => {
        const data = await getAllDepartments()
        setDepartments(data)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!formData.title || !formData.department_id) {
            setError('Please fill all required fields')
            return
        }

        setLoading(true)

        try {
            const { error } = await createJob(formData)

            if (error) {
                setError('Error creating job: ' + error.message)
            } else {
                setSuccess('Job posted successfully! Redirecting...')
                setTimeout(() => {
                    router.push('/admin/careers')
                }, 1500)
            }
        } catch (err) {
            console.error('Error:', err)
            setError('Failed to create job')
        } finally {
            setLoading(false)
        }
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
                    Back to Careers
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">Post New Job</h1>
                <p className="text-gray-600 mt-2">Create a new job posting</p>
            </div>

            {/* Alerts */}
            {error && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">{error}</p>
                </div>
            )}

            {success && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-green-600">{success}</p>
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold mb-6 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-gray-600" />
                        Job Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="e.g., Quality Control Chemist"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Department <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.department_id}
                                onChange={(e) => setFormData({ ...formData, department_id: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                required
                            >
                                <option value="">Select Department</option>
                                {departments.map((dept) => (
                                    <option key={dept.id} value={dept.id}>
                                        {dept.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    placeholder="e.g., Jammu & Kashmir"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Employment Type
                            </label>
                            <select
                                value={formData.employment_type}
                                onChange={(e) => setFormData({ ...formData, employment_type: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Experience Required
                            </label>
                            <input
                                type="text"
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="e.g., 2-4 years"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Salary Range
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={formData.salary_range}
                                    onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    placeholder="e.g., ₹4-6 LPA"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Openings
                            </label>
                            <div className="relative">
                                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="number"
                                    value={formData.openings}
                                    onChange={(e) => setFormData({ ...formData, openings: parseInt(e.target.value) || 1 })}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    min="1"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Description */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold mb-6">Job Description</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Overview
                            </label>
                            <textarea
                                value={formData.job_overview}
                                onChange={(e) => setFormData({ ...formData, job_overview: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                rows={4}
                                placeholder="Brief overview of the position..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Key Responsibilities
                            </label>
                            <textarea
                                value={formData.key_responsibilities}
                                onChange={(e) => setFormData({ ...formData, key_responsibilities: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                rows={4}
                                placeholder="• Responsibility 1&#10;• Responsibility 2&#10;• Responsibility 3"
                            />
                            <p className="text-xs text-gray-500 mt-1">Enter each responsibility on a new line</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Requirements
                            </label>
                            <textarea
                                value={formData.requirements}
                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                rows={4}
                                placeholder="• Requirement 1&#10;• Requirement 2&#10;• Requirement 3"
                            />
                            <p className="text-xs text-gray-500 mt-1">Enter each requirement on a new line</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Skills
                            </label>
                            <textarea
                                value={formData.preferred_skills}
                                onChange={(e) => setFormData({ ...formData, preferred_skills: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                rows={3}
                                placeholder="• Skill 1&#10;• Skill 2&#10;• Skill 3"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Why Join Us?
                            </label>
                            <textarea
                                value={formData.why_join_us}
                                onChange={(e) => setFormData({ ...formData, why_join_us: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                rows={3}
                                placeholder="Benefits and perks of joining..."
                            />
                        </div>
                    </div>
                </div>

                {/* Settings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold mb-6">Settings</h2>

                    <label className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                        <input
                            type="checkbox"
                            checked={formData.is_active}
                            onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                            className="mr-4 h-4 w-4 text-indigo-600 rounded"
                        />
                        <div>
                            <span className="text-sm font-medium text-gray-900">Active Job Posting</span>
                            <p className="text-xs text-gray-500 mt-1">Make this job visible on the careers page</p>
                        </div>
                    </label>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4 bg-gray-50 px-6 py-4 rounded-lg border border-gray-200">
                    <Link
                        href="/admin/careers"
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 font-medium flex items-center"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Posting...
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4 mr-2" />
                                Post Job
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}