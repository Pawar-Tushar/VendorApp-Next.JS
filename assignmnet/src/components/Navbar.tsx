"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { User, LogOut, Menu, X, FileText } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-4 sm:px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          VendorApp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/docs" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <FileText size={16} />
            Documentation
          </Link>

          {session ? (
            <>
              <Link href="/vendors" className="text-gray-600 hover:text-gray-900 transition-colors">
                My Vendors
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{session.user?.name}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 px-4 py-2 rounded-xl text-red-600 hover:text-red-700 font-medium transition-all duration-200"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link
              href="/api/auth/signin"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Login with Google
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="space-y-3">
            <Link
              href="/docs"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              <FileText size={16} />
              Documentation
            </Link>

            {session ? (
              <>
                <Link href="/vendors" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
                  My Vendors
                </Link>
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{session.user?.name}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 border border-red-200 px-4 py-2.5 rounded-xl text-red-600 font-medium"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/api/auth/signin"
                className="block text-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2.5 rounded-xl font-medium"
              >
                Login with Google
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
