// import VendorForm from "@/components/VendorForm";

// export default function NewVendorPage() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Create Vendor</h1>
//       <VendorForm />
//     </div>
//   );
// }
import VendorForm from "@/components/VendorForm"
import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

export default function NewVendorPage() {
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
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create New Vendor</h1>
                <p className="text-gray-600">Add a new vendor to your system</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm">
          <VendorForm />
        </div>
      </div>
    </div>
  )
}