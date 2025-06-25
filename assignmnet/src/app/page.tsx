import AuthButton from "@/components/AuthButton"
import { Shield, Zap, Users, Sparkles } from "lucide-react"

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
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50 text-sm text-gray-600 mb-8 shadow-sm">
            <Sparkles size={16} className="text-emerald-500" />
            <span>Modern Vendor Management Solution</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vendor Manager
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            A modern web app to manage your business vendors efficiently. Create, edit, delete, and manage vendors with
            secure login and real-time updates.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <AuthButton />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
              <p className="text-sm text-gray-600">Google OAuth integration for secure authentication</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-sm text-gray-600">Real-time updates with modern technology stack</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Efficient</h3>
              <p className="text-sm text-gray-600">Streamlined vendor management workflow</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">Powered by modern technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Next.js", color: "emerald" },
                { name: "MongoDB", color: "blue" },
                { name: "Tailwind CSS", color: "purple" },
                { name: "NextAuth", color: "orange" },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-4 py-2 rounded-full bg-${tech.color}-50 border border-${tech.color}-200 text-sm text-${tech.color}-700 hover:bg-${tech.color}-100 transition-colors`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
