import AuthButton from "@/components/AuthButton"
import { Shield, Zap, Users, Sparkles, FileText, ArrowRight, Code, Database, Palette } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50 text-sm text-gray-600 mb-8 shadow-sm">
            <Sparkles size={16} className="text-emerald-500" />
            <span>Modern Vendor Management Solution</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              VendorApp
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            A comprehensive vendor management system built with modern web technologies. Manage your business vendors
            efficiently with secure authentication, real-time updates, and intuitive user experience.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <AuthButton />
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 text-gray-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Code size={20} />
              Technical Details
            </Link>
          </div>
          {/* Documentation CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-2xl p-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">For Developers & Recruiters</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Explore the complete technical documentation to understand the architecture, features, and skills
              demonstrated in this project. Perfect for code reviews and technical assessments.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <FileText size={18} />
              View Documentation
              <ArrowRight size={18} />
            </Link>
          </div>

          

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Authentication</h3>
              <p className="text-sm text-gray-600">
                Google OAuth integration with JWT-based session management and user data isolation
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-sm text-gray-600">
                Real-time updates, server-side pagination, and optimized database queries
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User-Centric Design</h3>
              <p className="text-sm text-gray-600">
                Intuitive interface with advanced search, filtering, and responsive design
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
                <p className="text-sm text-gray-600">Next.js 15 with TypeScript, API routes, and server components</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Database Design</h3>
                <p className="text-sm text-gray-600">MongoDB with Mongoose ODM, efficient queries, and data modeling</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern UI/UX</h3>
                <p className="text-sm text-gray-600">Tailwind CSS, glass morphism effects, and responsive design</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700 mb-6">Built with Industry-Standard Technologies</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { name: "Next.js 15", color: "emerald", desc: "React Framework" },
                { name: "TypeScript", color: "blue", desc: "Type Safety" },
                { name: "MongoDB", color: "green", desc: "Database" },
                { name: "NextAuth.js", color: "purple", desc: "Authentication" },
                { name: "Tailwind CSS", color: "cyan", desc: "Styling" },
                { name: "Vercel", color: "gray", desc: "Deployment" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`group px-4 py-3 rounded-xl bg-${tech.color}-50 border border-${tech.color}-200 hover:bg-${tech.color}-100 transition-all duration-200 hover:scale-105 cursor-default`}
                >
                  <div className={`text-sm font-semibold text-${tech.color}-700`}>{tech.name}</div>
                  <div className={`text-xs text-${tech.color}-600 opacity-75`}>{tech.desc}</div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200/50 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-700 mb-4">
                <strong>Ready to explore?</strong> Check out the live application or dive into the technical
                documentation to see the code architecture and implementation details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/vendors"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2.5 rounded-lg font-medium hover:scale-105 transition-transform"
                >
                  Try Live Demo
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  <FileText size={16} />
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
