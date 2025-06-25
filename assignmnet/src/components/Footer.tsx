import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
          <span>© {new Date().getFullYear()} VendorApp. Built with</span>
          <Heart size={16} className="text-red-500 fill-current animate-pulse" />
          <span>using Next.js, MongoDB, and Tailwind CSS.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
            Next.js
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700">MongoDB</span>
          <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700">NextAuth</span>
        </div>
      </div>
    </footer>
  )
}
