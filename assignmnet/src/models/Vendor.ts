import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bankAccount: { type: String, required: true },
    bankName: { type: String, required: true },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    country: { type: String },
    zipCode: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Vendor || mongoose.model("Vendor", VendorSchema);
