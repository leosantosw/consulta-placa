import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { withAuth } from "@/lib/auth/withAuth";

export const GET = withAuth(async (request, payload) => {
  void request;
  try {
    const wallet = await prisma.wallets.findUnique({
      where: { user_id: payload.sub },
      select: { user_id: true, balance: true, updated_at: true }
    });

    if (!wallet) {
      return NextResponse.json(
        { error: "Carteira não encontrada." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        userId: wallet.user_id,
        balance: wallet.balance,
        updatedAt: wallet.updated_at
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Não foi possível carregar os créditos." },
      { status: 500 }
    );
  }
});
