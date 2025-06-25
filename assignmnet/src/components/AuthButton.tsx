// "use client"

// import { signIn, signOut, useSession } from "next-auth/react"

// export default function AuthButton() {
//   const { data: session } = useSession()

//   if (session) {
//     return (
//       <div className="flex gap-4 items-center">
//         <span>Hello, {session.user?.name}</span>
//         <button onClick={() => signOut()} className="btn">Logout</button>
//       </div>
//     )
//   }

//   return (
//     <button onClick={() => signIn("google")} className="btn">
//       Sign in with Google
//     </button>
//   )
// }

"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { LogIn, LogOut, User, ArrowRight } from "lucide-react"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-500">Welcome back,</p>
            <p className="font-semibold text-gray-900">{session.user?.name}</p>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 px-6 py-3 rounded-2xl text-red-600 hover:text-red-700 font-medium transition-all duration-200 hover:scale-105"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
    >
      <LogIn size={20} />
      Sign in with Google
      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
    </button>
  )
}
