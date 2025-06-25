"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { Vendor } from "@/types/vendor"
import { Plus, Edit, Trash2, Building2, Users, Search, Filter } from "lucide-react"

export default function VendorListPage() {
  const { status } = useSession()
  const router = useRouter()
  const [vendors, setVendors] = useState<Vendor[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await fetch("/api/vendors")
        const data = await res.json()
        setVendors(data)
      } catch (err) {
        console.error("Failed to load vendors", err)
      } finally {
        setLoading(false)
      }
    }

    if (status === "authenticated") {
      fetchVendors()
    }
  }, [status])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this vendor?")) return

    try {
      const res = await fetch(`/api/vendors/${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        setVendors((prev) => prev.filter((v) => v._id !== id))
      } else {
        alert("Delete failed")
      }
    } catch (err) {
      console.error("Delete error", err)
    }
  }

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.bankName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading vendors...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Vendor Management</h1>
                <p className="text-gray-600">Manage your business vendors efficiently</p>
              </div>
            </div>
            <Link
              href="/vendors/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Plus size={20} />
              New Vendor
            </Link>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search vendors by name or bank..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 bg-white/80 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <Filter size={20} className="text-gray-500" />
              <span className="text-gray-700">Filter</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Vendors</p>
                <p className="text-2xl font-bold text-gray-900">{vendors.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Vendors</p>
                <p className="text-2xl font-bold text-gray-900">{vendors.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Search Results</p>
                <p className="text-2xl font-bold text-gray-900">{filteredVendors.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vendors Table/Cards */}
        {filteredVendors.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No vendors found</h3>
            <p className="text-gray-600 mb-6">Get started by creating your first vendor</p>
            <Link
              href="/vendors/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform"
            >
              <Plus size={20} />
              Create First Vendor
            </Link>
          </div>
        ) : (
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-sm">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/80">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vendor Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bank Account</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bank Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/50">
                  {filteredVendors.map((vendor, index) => (
                    <tr key={vendor._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {vendor.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{vendor.name}</p>
                            <p className="text-sm text-gray-600">Vendor #{index + 1}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-mono text-sm text-gray-900">{vendor.bankAccount}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-900">{vendor.bankName}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-900">{vendor.city || "N/A"}</p>
                        <p className="text-sm text-gray-600">{vendor.country || "N/A"}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/vendors/${vendor._id}/edit`}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit vendor"
                          >
                            <Edit size={16} />
                          </Link>
                          <button
                            onClick={() => handleDelete(vendor._id!)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete vendor"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden divide-y divide-gray-200/50">
              {filteredVendors.map((vendor, index) => (
                <div key={vendor._id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-semibold">{vendor.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{vendor.name}</h3>
                        <p className="text-sm text-gray-600">Vendor #{index + 1}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/vendors/${vendor._id}/edit`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(vendor._id!)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank Account:</span>
                      <span className="font-mono text-gray-900">{vendor.bankAccount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank Name:</span>
                      <span className="text-gray-900">{vendor.bankName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="text-gray-900">
                        {vendor.city || "N/A"}, {vendor.country || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
