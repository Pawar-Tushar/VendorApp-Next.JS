import {
  Code,
  Database,
  Shield,
  Zap,
  Users,
  Search,
  Layers,
  Smartphone,
  Globe,
  BarChart3,
  FileText,
  Github,
  ExternalLink,
  CheckCircle,
  Star,
  Palette,
  Settings,
} from "lucide-react"
import Link from "next/link"



export default function DocumentationPage() {
  const techStack = [
    {
      category: "Frontend",
      icon: <Code className="w-5 h-5" />,
      color: "emerald",
      technologies: [
        { name: "Next.js 15", description: "React framework with App Router" },
        { name: "TypeScript", description: "Type-safe JavaScript development" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Lucide React", description: "Beautiful icon library" },
        { name: "React Hooks", description: "Modern state management" },
      ],
    },
    {
      category: "Backend",
      icon: <Database className="w-5 h-5" />,
      color: "blue",
      technologies: [
        { name: "Next.js API Routes", description: "Serverless API endpoints" },
        { name: "MongoDB", description: "NoSQL database with Mongoose ODM" },
        { name: "NextAuth.js", description: "Authentication with Google OAuth" },
        { name: "JWT Tokens", description: "Secure user session management" },
        { name: "Server Actions", description: "Server-side form handling" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Settings className="w-5 h-5" />,
      color: "purple",
      technologies: [
        { name: "Vercel", description: "Deployment and hosting platform" },
        { name: "ESLint", description: "Code linting and formatting" },
        { name: "Git", description: "Version control system" },
        { name: "Environment Variables", description: "Secure configuration management" },
        { name: "TypeScript Compiler", description: "Build-time type checking" },
      ],
    },
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Authentication",
      description: "Google OAuth integration with JWT-based session management",
      details: [
        "NextAuth.js implementation",
        "Protected routes",
        "User session persistence",
        "Secure logout functionality",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Specific Data",
      description: "Each user can only access and manage their own vendors",
      details: [
        "Data isolation by userId",
        "Secure API endpoints",
        "User-specific CRUD operations",
        "Privacy protection",
      ],
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search & Pagination",
      description: "Real-time search with efficient server-side pagination",
      details: [
        "Multi-field search capability",
        "Configurable page sizes",
        "Smart pagination controls",
        "Search result highlighting",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Optimized for all devices with mobile-first approach",
      details: [
        "Mobile-responsive tables",
        "Touch-friendly interfaces",
        "Adaptive layouts",
        "Cross-browser compatibility",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Instant UI updates with optimistic rendering",
      details: ["Fast API responses", "Loading states", "Error handling", "Smooth transitions"],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern UI/UX",
      description: "Clean, fresh design with glass morphism effects",
      details: ["Gradient backgrounds", "Backdrop blur effects", "Smooth animations", "Intuitive navigation"],
    },
  ]

  const skills = [
    { name: "React/Next.js", level: 95, color: "emerald" },
    { name: "TypeScript", level: 90, color: "blue" },
    { name: "Node.js/API Development", level: 88, color: "green" },
    { name: "Database Design", level: 85, color: "purple" },
    { name: "Authentication & Security", level: 87, color: "red" },
    { name: "UI/UX Design", level: 82, color: "orange" },
    { name: "Responsive Design", level: 92, color: "pink" },
    { name: "Performance Optimization", level: 80, color: "indigo" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50 text-sm text-gray-600 mb-8 shadow-sm">
              <FileText size={16} className="text-emerald-500" />
              <span>Project Documentation & Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                VendorApp
              </span>
              <br />
              Documentation
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive vendor management system built with modern web technologies. This documentation showcases
              the technical implementation, features, and skills demonstrated in this project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Globe size={20} />
                View Live App
              </Link>
                <a
                href="https://github.com/Pawar-Tushar/VendorApp-Next.JS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 text-gray-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                <Github size={20} />
                View Source Code
                </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-emerald-600" />
              Project Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What is VendorApp?</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  VendorApp is a modern, full-stack web application designed for efficient vendor management. It
                  provides businesses with a secure, user-friendly platform to manage their vendor relationships,
                  banking information, and contact details.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Built with cutting-edge technologies, this application demonstrates proficiency in modern web
                  development, database design, authentication systems, and responsive UI/UX design.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  {[
                    "Full-stack Next.js 15 application with TypeScript",
                    "Secure authentication with Google OAuth",
                    "User-specific data isolation and privacy",
                    "Advanced search and pagination functionality",
                    "Responsive design with modern UI/UX",
                    "RESTful API with proper error handling",
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive functionality designed with user experience and security in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern, industry-standard technologies chosen for performance, scalability, and developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 bg-${stack.color}-100 rounded-lg flex items-center justify-center`}>
                    <div className={`text-${stack.color}-600`}>{stack.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{stack.category}</h3>
                </div>
                <div className="space-y-4">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-medium text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Demonstration */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-emerald-600" />
              Skills Demonstrated
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Proficiency</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Development Practices</h3>
                <div className="space-y-4">
                  {[
                    { title: "Clean Code Architecture", desc: "Modular, maintainable code structure" },
                    { title: "Type Safety", desc: "Full TypeScript implementation" },
                    { title: "Security Best Practices", desc: "JWT authentication, data validation" },
                    { title: "Performance Optimization", desc: "Efficient queries, lazy loading" },
                    { title: "Responsive Design", desc: "Mobile-first, cross-browser compatibility" },
                    { title: "Error Handling", desc: "Comprehensive error management" },
                    { title: "User Experience", desc: "Intuitive interfaces, loading states" },
                    { title: "Code Documentation", desc: "Clear comments and documentation" },
                  ].map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-gray-900">{practice.title}</h4>
                        <p className="text-sm text-gray-600">{practice.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8 text-emerald-600" />
              System Architecture
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Architecture</h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Next.js App Router:</strong> Modern routing with server and client components
                  </p>
                  <p>
                    <strong>Component Structure:</strong> Reusable, modular React components
                  </p>
                  <p>
                    <strong>State Management:</strong> React hooks for local state, server state via API
                  </p>
                  <p>
                    <strong>Styling:</strong> Tailwind CSS with custom design system
                  </p>
                  <p>
                    <strong>Type Safety:</strong> Full TypeScript coverage with strict mode
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Architecture</h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>API Routes:</strong> RESTful endpoints with proper HTTP methods
                  </p>
                  <p>
                    <strong>Database:</strong> MongoDB with Mongoose ODM for data modeling
                  </p>
                  <p>
                    <strong>Authentication:</strong> NextAuth.js with Google OAuth provider
                  </p>
                  <p>
                    <strong>Security:</strong> JWT tokens, user data isolation, input validation
                  </p>
                  <p>
                    <strong>Error Handling:</strong> Comprehensive error responses and logging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Hire Me Section */}
        <section>
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Hire?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              This project demonstrates my ability to build modern, scalable web applications with clean code, security
              best practices, and excellent user experience. Lets discuss how I can contribute to your team!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://pawartushar.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                    >
                    <ExternalLink size={20} />
                    View Portfolio
                </a>
                <Link
                href="https://github.com/Pawar-Tushar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200"
                >
                <Github size={20} />
                GitHub Profile
                </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
