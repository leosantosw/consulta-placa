import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { parseRegisterInput } from "@/lib/auth/validation";
import { createJwt } from "@/lib/auth/jwt";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Dados inválidos." },
      { status: 400 }
    );
  }

  const input = parseRegisterInput(body);
  if (!input) {
    return NextResponse.json(
      { error: "Dados inválidos." },
      { status: 400 }
    );
  }

  try {
    const existingUser = await prisma.users.findUnique({
      where: { email: input.email },
      select: { id: true }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email já cadastrado." },
        { status: 409 }
      );
    }

    const user = await prisma.users.create({
      data: {
        name: input.name,
        email: input.email,
        password_hash: input.password,
        wallets: {
          create: {
            balance: 0
          }
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true
      }
    });

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

    return NextResponse.json(user, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível criar o cadastro." },
      { status: 500 }
    );
  }
}
