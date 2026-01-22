import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parseRecoveryInput } from "@/lib/auth/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const input = parseRecoveryInput(body);
  if (!input) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email: input.email },
      select: { id: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: "Email não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Enviamos o link de recuperação." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Não foi possível enviar o link." },
      { status: 500 }
    );
  }
}
