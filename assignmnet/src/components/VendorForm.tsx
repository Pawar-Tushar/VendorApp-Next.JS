// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Vendor } from "@/types/vendor";

// type Props = {
//   initialData?: Vendor;
//   isEdit?: boolean;
// };

// export default function VendorForm({ initialData, isEdit = false }: Props) {
//   const router = useRouter();
//   const [form, setForm] = useState<Vendor>({
//     name: "",
//     bankAccount: "",
//     bankName: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     country: "",
//     zipCode: "",
//   });

//   useEffect(() => {
//     if (initialData) setForm(initialData);
//   }, [initialData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const method = isEdit ? "PUT" : "POST";
//     const url = isEdit ? `/api/vendors/${form._id}` : "/api/vendors";

//     const res = await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       router.push("/vendors");
//     } else {
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
//       <div>
//         <label className="block font-medium">Vendor Name*</label>
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-medium">Bank Account No*</label>
//         <input
//           name="bankAccount"
//           value={form.bankAccount}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-medium">Bank Name*</label>
//         <input
//           name="bankName"
//           value={form.bankName}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-medium">Address Line 1</label>
//         <input
//           name="addressLine1"
//           value={form.addressLine1}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-medium">Address Line 2</label>
//         <input
//           name="addressLine2"
//           value={form.addressLine2}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-medium">City</label>
//         <input
//           name="city"
//           value={form.city}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-medium">Country</label>
//         <input
//           name="country"
//           value={form.country}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <div>
//         <label className="block font-medium">Zip Code</label>
//         <input
//           name="zipCode"
//           value={form.zipCode}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         {isEdit ? "Update Vendor" : "Create Vendor"}
//       </button>
//     </form>
//   );
// }


"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Vendor } from "@/types/vendor"
import { Save, X, Building2, CreditCard, MapPin } from "lucide-react"

type Props = {
  initialData?: Vendor
  isEdit?: boolean
}

export default function VendorForm({ initialData, isEdit = false }: Props) {
  const router = useRouter()
  const [form, setForm] = useState<Vendor>({
    name: "",
    bankAccount: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipCode: "",
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (initialData) setForm(initialData)
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const method = isEdit ? "PUT" : "POST"
      const url = isEdit ? `/api/vendors/${form._id}` : "/api/vendors"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        router.push("/vendors")
      } else {
        alert("Something went wrong!")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Building2 className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vendor Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter vendor name"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* Banking Information Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Banking Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank Account Number <span className="text-red-500">*</span>
            </label>
            <input
              name="bankAccount"
              value={form.bankAccount}
              onChange={handleChange}
              required
              placeholder="Enter bank account number"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-mono"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank Name <span className="text-red-500">*</span>
            </label>
            <input
              name="bankName"
              value={form.bankName}
              onChange={handleChange}
              required
              placeholder="Enter bank name"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* Address Information Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold text-gray-900">Address Information</h2>
          <span className="text-sm text-gray-500">(Optional)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1</label>
            <input
              name="addressLine1"
              value={form.addressLine1}
              onChange={handleChange}
              placeholder="Enter street address"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
            <input
              name="addressLine2"
              value={form.addressLine2}
              onChange={handleChange}
              placeholder="Apartment, suite, etc."
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Enter country"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
            <input
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
              placeholder="Enter zip code"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              {isEdit ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>
              <Save size={20} />
              {isEdit ? "Update Vendor" : "Create Vendor"}
            </>
          )}
        </button>
        <button
          type="button"
          onClick={() => router.push("/vendors")}
          className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-medium transition-all duration-200"
        >
          <X size={20} />
          Cancel
        </button>
      </div>
    </form>
  )
}
