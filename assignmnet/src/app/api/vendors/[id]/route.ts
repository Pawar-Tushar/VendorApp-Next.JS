import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/dbConfig/db"
import Vendor from "@/models/Vendor"
import { getToken } from "next-auth/jwt"

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const token = await getToken({ req })
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await dbConnect()

  try {
    const vendor = await Vendor.findOne({ _id: id, userId: token.sub })
    if (!vendor) return NextResponse.json({ error: "Vendor not found" }, { status: 404 })
    return NextResponse.json(vendor)
  } catch (error) {
    console.error("Error fetching vendor:", error)
    return NextResponse.json({ error: "Failed to fetch vendor" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const token = await getToken({ req })
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  await dbConnect()

  try {
    const data = await req.json()
    const updated = await Vendor.findOneAndUpdate({ _id: id, userId: token.sub }, data, { new: true })
    if (!updated) return NextResponse.json({ error: "Vendor not found" }, { status: 404 })
    return NextResponse.json(updated)
  } catch (error) {
    console.error("Error updating vendor:", error)
    return NextResponse.json({ error: "Failed to update vendor" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const token = await getToken({ req })
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  await dbConnect()

  try {
    const deleted = await Vendor.findOneAndDelete({ _id: id, userId: token.sub })
    if (!deleted) return NextResponse.json({ error: "Vendor not found" }, { status: 404 })
    return NextResponse.json({ message: "Vendor deleted successfully" })
  } catch (error) {
    console.error("Error deleting vendor:", error)
    return NextResponse.json({ error: "Failed to delete vendor" }, { status: 500 })
  }
}
