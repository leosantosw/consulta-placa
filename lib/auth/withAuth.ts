import 'server-only'
import { NextResponse } from "next/server";
import { verifyJwt, type JwtPayload } from "@/lib/auth/jwt";

const getTokenFromCookie = (request: Request) => {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) {
    return null;
  }
  const pairs = cookieHeader.split(";").map((item) => item.trim());
  for (const pair of pairs) {
    const [key, value] = pair.split("=");
    if (key === "auth_token" && value) {
      return decodeURIComponent(value);
    }
  }
  return null;
};

const getTokenFromAuthHeader = (request: Request) => {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return null;
  }
  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer" || !token) {
    return null;
  }
  return token;
};

const getTokenFromRequest = (request: Request) => {
  return getTokenFromAuthHeader(request) ?? getTokenFromCookie(request);
};

type AuthHandler = (request: Request, payload: JwtPayload) => Promise<Response>;

export const withAuth = (handler: AuthHandler) => {
  return async (request: Request) => {
    const token = getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json({ error: "Token ausente." }, { status: 401 });
    }

    try {
      const payload = await verifyJwt(token, process.env.JWT_SECRET!);
      return handler(request, payload);
    } catch {
      return NextResponse.json({ error: "Token inválido." }, { status: 401 });
    }
  };
};
