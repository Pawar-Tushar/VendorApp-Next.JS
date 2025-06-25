import VendorForm from "@/components/VendorForm"
import type { Vendor } from "@/types/vendor"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"

async function getVendor(id: string): Promise<Vendor | null> {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/vendors/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function EditVendorPage({ params }: { params: { id: string } }) {
  const vendor = await getVendor(params.id)

  if (!vendor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-red-200/50 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vendor Not Found</h3>
            <p className="text-gray-600 mb-6">The vendor you're looking for doesn't exist or has been deleted.</p>
            <Link
              href="/vendors"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform"
            >
              <ArrowLeft size={20} />
              Back to Vendors
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/vendors" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Edit className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Edit Vendor</h1>
                <p className="text-gray-600">Update vendor information</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm">
          <VendorForm initialData={vendor} isEdit />
        </div>
      </div>
    </div>
  )
}
