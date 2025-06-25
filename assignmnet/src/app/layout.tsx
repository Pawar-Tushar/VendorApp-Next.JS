import type { ReactNode } from "react"
import ClientSessionProvider from "@/components/ClientSessionProvider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-gray-900 antialiased">
        <ClientSessionProvider>
          <Navbar />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </ClientSessionProvider>
      </body>
    </html>
  )
}
