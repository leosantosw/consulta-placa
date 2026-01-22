import { SignJWT } from "jose";

type JwtPayload = {
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
