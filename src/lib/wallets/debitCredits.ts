import 'server-only'
import prisma from "@/lib/prisma";

type DebitCreditsResult =
  | { ok: true; balance: number }
  | { ok: false; reason: "wallet_not_found" | "insufficient_credits" };

type DebitCreditsOptions = {
  referenceId?: string;
  entityType?: string;
  entityKey?: string;
};

export const debitCredits = async (
  userId: string,
  amount: number,
  options?: DebitCreditsOptions,
): Promise<DebitCreditsResult> => {
  const { referenceId, entityType, entityKey } = options ?? {};
  const result = await prisma.$transaction(async (tx) => {
    const wallet = await tx.wallets.findUnique({
      where: { user_id: userId },
      select: { balance: true }
    });

    if (!wallet) {
      return { ok: false, reason: "wallet_not_found" } as const;
    }

    if (wallet.balance < amount) {
      return { ok: false, reason: "insufficient_credits" } as const;
    }

    await tx.wallets.update({
      where: { user_id: userId },
      data: { balance: { decrement: amount }, updated_at: new Date() }
    });

    await tx.wallet_transactions.create({
      data: {
        user_id: userId,
        amount: -amount,
        reference_id: referenceId ?? null,
        entity_type: entityType ?? null,
        entity_key: entityKey ?? null
      }
    });

    return {
      ok: true,
      balance: wallet.balance - amount
    } as const;
  });

  return result;
};
