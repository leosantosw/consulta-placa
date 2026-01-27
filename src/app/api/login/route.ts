import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { parseLoginInput } from "@/lib/auth/validations/login";
import { createJwt } from "@/lib/auth/jwt";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const input = parseLoginInput(body);
  if (!input) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email: input.email },
      select: { id: true, name: true, email: true, password_hash: true }
    });

    if (!user || user.password_hash !== input.password) {
      return NextResponse.json(
        { error: "Email ou senha inválidos." },
        { status: 401 }
      );
    }

    const token = await createJwt(
      { sub: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET!,
      60 * 60 * 24 * 7
    );

    const cookieStore = await cookies();
    
    cookieStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });

    return NextResponse.json(
      { id: user.id, name: user.name, email: user.email },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Não foi possível autenticar." },
      { status: 500 }
    );
  }
}
