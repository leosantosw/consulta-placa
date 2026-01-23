import 'server-only'
import { cookies } from "next/headers";
import { verifyJwt, type JwtPayload } from "@/lib/auth/jwt";

export const getAuthToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("auth_token")?.value ?? null;
};

export const getAuthPayload = async (): Promise<JwtPayload | null> => {
  const token = await getAuthToken();
  if (!token) {
    return null;
  }

  try {
    return await verifyJwt(token, process.env.JWT_SECRET!);
  } catch {
    return null;
  }
};

export const getUserId = async () => {
  const payload = await getAuthPayload();
  return payload?.sub ?? null;
};

export const getUserName = async () => {
  const payload = await getAuthPayload();
  return payload?.name ?? null;
};
