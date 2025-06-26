export interface Vendor {
  _id?: string;
  name: string;
  bankAccount: string;
  bankName: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  country?: string;
  zipCode?: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface VendorResponse {
  vendors: Vendor[]
  pagination: {
    currentPage: number
    totalPages: number
    totalVendors: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}
