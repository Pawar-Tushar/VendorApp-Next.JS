import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/dbConfig/db"
import Vendor from "@/models/Vendor"
import { getToken } from "next-auth/jwt"

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await dbConnect()
  const vendor = await Vendor.findById(id)
  if (!vendor) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(vendor)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params 
  const token = await getToken({ req })
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  await dbConnect()
  const data = await req.json()
  const updated = await Vendor.findByIdAndUpdate(id, data, { new: true })
  return NextResponse.json(updated)
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params 
  const token = await getToken({ req })
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  await dbConnect()
  await Vendor.findByIdAndDelete(id)
  return NextResponse.json({ message: "Deleted" })
}
