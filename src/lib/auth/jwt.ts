import 'server-only'
import { SignJWT, jwtVerify } from "jose";

export type JwtPayload = {
  sub: string;
  email: string;
  name: string;
};

export const createJwt = async (
  payload: JwtPayload,
  secret: string,
  expiresInSeconds: number
) => {
  const secretKey = new TextEncoder().encode(secret);

  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${expiresInSeconds}s`)
    .sign(secretKey);
};

export const verifyJwt = async (token: string, secret: string) => {
  const secretKey = new TextEncoder().encode(secret);
  const { payload } = await jwtVerify(token, secretKey);
  return payload as JwtPayload;
};
