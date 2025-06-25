"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; 

export const getSession = async () => {
  return await getServerSession(authOptions);
};
