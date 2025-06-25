import { NextResponse } from "next/server";
import dbConnect from "@/dbConfig/db";
import Vendor from "@/models/Vendor";
import { getToken } from "next-auth/jwt";

export async function GET(req: Request) {
  await dbConnect();
  const vendors = await Vendor.find({}).sort({ createdAt: -1 });
  return NextResponse.json(vendors);
}

export async function POST(req: Request) {
  const token = await getToken({ req });
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const data = await req.json();
  const newVendor = await Vendor.create(data);
  return NextResponse.json(newVendor, { status: 201 });
}
