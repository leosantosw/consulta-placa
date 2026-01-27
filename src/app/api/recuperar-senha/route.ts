import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { parseRecoveryInput } from "@/lib/auth/validations/recovery";
import { validateTurnstileToken } from "next-turnstile";

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
    const result = await validateTurnstileToken({
      token: input.turnstile_token,
      secretKey: process.env.TURNSTILE_SECRET_KEY!
    });

    if (!result.success) {
      return NextResponse.json({ error: "Captcha inválido." }, { status: 403 });
    }
  } catch {
    return NextResponse.json(
      { error: "Não foi possível validar o captcha." },
      { status: 502 }
    );
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email: input.email },
      select: { id: true }
    });

    if (!user) {
      return NextResponse.json(
        { message: "Enviamos o link de recuperação." },
        { status: 200 }
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
