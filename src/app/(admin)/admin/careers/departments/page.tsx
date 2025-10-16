'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllDepartments, deleteDepartment, createDepartment, updateDepartment } from '@/lib/api/admin'
import {
    Plus,
    Edit,
    Trash2,
    ChevronLeft,
    Building,
    Save,
    X,
    AlertCircle,
    CheckCircle,
    Loader2
} from 'lucide-react'

export default function DepartmentsPage() {
    const [departments, setDepartments] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [editingDept, setEditingDept] = useState<any>(null)
    const [modalLoading, setModalLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })

    useEffect(() => {
        loadDepartments()
    }, [])

    const loadDepartments = async () => {
        try {
            const data = await getAllDepartments()
            setDepartments(data)
        } finally {
            setLoading(false)
        }
    }

    const openModal = (dept?: any) => {
        if (dept) {
            setEditingDept(dept)
            setFormData({
                name: dept.name,
                description: dept.description || ''
            })
        } else {
            setEditingDept(null)
            setFormData({ name: '', description: '' })
        }
        setModalOpen(true)
        setError('')
    }

    const closeModal = () => {
        setModalOpen(false)
        setEditingDept(null)
        setFormData({ name: '', description: '' })
        setError('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!formData.name.trim()) {
            setError('Department name is required')
            return
        }

        setModalLoading(true)
        try {
            if (editingDept) {
                const { error } = await updateDepartment(editingDept.id, formData)
                if (error) {
                    setError('Failed to update department')
                } else {
                    setSuccess('Department updated successfully')
                    closeModal()
                }
            } else {
                const { error } = await createDepartment(formData)
                if (error) {
                    setError('Failed to create department')
                } else {
                    setSuccess('Department created successfully')
                    closeModal()
                }
            }

            await loadDepartments()
            setTimeout(() => setSuccess(''), 3000)
        } catch (err) {
            console.error('Error:', err)
            setError('An error occurred')
        } finally {
            setModalLoading(false)
        }
    }

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete "${name}"?`)) {
            return
        }

        try {
            const { error } = await deleteDepartment(id)
            if (error) {
                setError(error.message || 'Failed to delete department')
                setTimeout(() => setError(''), 5000)
            } else {
                await loadDepartments()
                setSuccess('Department deleted successfully')
                setTimeout(() => setSuccess(''), 3000)
            }
        } catch (err) {
            console.error('Error:', err)
            setError('Failed to delete department')
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
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
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to Careers
                    </Link>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Departments</h1>
                            <p className="text-gray-600 mt-2">Manage job departments and categories</p>
                        </div>
                        <button
                            onClick={() => openModal()}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Add Department
                        </button>
                    </div>
                </div>

                {/* Alerts */}
                {error && !modalOpen && (
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

                {/* Departments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departments.length === 0 ? (
                        <div className="col-span-full bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                            <Building className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500">No departments found</p>
                            <button
                                onClick={() => openModal()}
                                className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                            >
                                Create your first department
                            </button>
                        </div>
                    ) : (
                        departments.map((dept) => (
                            <div
                                key={dept.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <Building className="w-8 h-8 text-indigo-600 opacity-20" />
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => openModal(dept)}
                                            className="p-1.5 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                            title="Edit"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(dept.id, dept.name)}
                                            className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {dept.name}
                                </h3>

                                {dept.description ? (
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {dept.description}
                                    </p>
                                ) : (
                                    <p className="text-sm text-gray-400 italic">
                                        No description
                                    </p>
                                )}

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-500">
                                        Created {new Date(dept.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">
                                {editingDept ? 'Edit Department' : 'Add New Department'}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="p-1 hover:bg-gray-100 rounded-lg"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {error && (
                            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start">
                                <AlertCircle className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-red-600">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Department Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    placeholder="e.g., Engineering"
                                    required
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    rows={3}
                                    placeholder="Brief description of the department..."
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                    disabled={modalLoading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2 disabled:opacity-50"
                                    disabled={modalLoading}
                                >
                                    {modalLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            {editingDept ? 'Updating...' : 'Creating...'}
                                        </>
                                    ) : (
                                        <>
                                            <Save className="w-4 h-4" />
                                            {editingDept ? 'Update' : 'Create'}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}