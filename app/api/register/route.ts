import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parseRegisterInput } from "@/lib/auth/validation";

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
        password_hash: input.password // to encrypt
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true
      }
    });

    return NextResponse.json(user, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível criar o cadastro." },
      { status: 500 }
    );
  }
}
