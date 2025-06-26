import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/dbConfig/db"
import Vendor from "@/models/Vendor"
import { getToken } from "next-auth/jwt"

export async function GET(req: NextRequest) {
  const token = await getToken({ req })
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await dbConnect()
  const { searchParams } = new URL(req.url)
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")
  const search = searchParams.get("search") || ""

  const skip = (page - 1) * limit

  const searchQuery = search
    ? {
        userId: token.sub, 
        $or: [
          { name: { $regex: search, $options: "i" } },
          { bankName: { $regex: search, $options: "i" } },
          { city: { $regex: search, $options: "i" } },
          { country: { $regex: search, $options: "i" } },
        ],
      }
    : { userId: token.sub }

  try {
    const vendors = await Vendor.find(searchQuery).sort({ createdAt: -1 }).skip(skip).limit(limit)
    const totalVendors = await Vendor.countDocuments(searchQuery)
    const totalPages = Math.ceil(totalVendors / limit)

    return NextResponse.json({
      vendors,
      pagination: {
        currentPage: page,
        totalPages,
        totalVendors,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    })
  } catch (error) {
    console.error("Error fetching vendors:", error)
    return NextResponse.json({ error: "Failed to fetch vendors" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req })
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await dbConnect()

  try {
    const data = await req.json()
    const vendorData = {
      ...data,
      userId: token.sub,
    }

    const newVendor = await Vendor.create(vendorData)
    return NextResponse.json(newVendor, { status: 201 })
  } catch (error) {
    console.error("Error creating vendor:", error)
    return NextResponse.json({ error: "Failed to create vendor" }, { status: 500 })
  }
}
