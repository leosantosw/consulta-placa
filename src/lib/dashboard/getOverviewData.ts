import "server-only";
import prisma from "@/lib/prisma";
import { getUserId } from "@/lib/auth/session";

export type OverviewItem = {
  id: bigint;
  created_at: Date;
  entity_key: string | null;
};

export type OverviewData = {
  items: OverviewItem[];
  totalQueries: number;
  creditsUsed: number;
};

export const getOverviewData = async (): Promise<OverviewData> => {
  const userId = await getUserId();

  if (!userId) {
    return { items: [], totalQueries: 0, creditsUsed: 0 };
  }

  const [items, summary] = await Promise.all([
    prisma.wallet_transactions.findMany({
      where: {
        user_id: userId,
        entity_type: "plate_query"
      },
      orderBy: {
        created_at: "desc"
      },
      take: 5,
      select: {
        id: true,
        created_at: true,
        entity_key: true
      }
    }),
    prisma.wallet_transactions.aggregate({
      where: {
        user_id: userId,
        entity_type: "plate_query"
      },
      _count: {
        id: true
      },
      _sum: {
        amount: true
      }
    })
  ]);

  return {
    items,
    totalQueries: summary._count.id ?? 0,
    creditsUsed: Math.abs(summary._sum.amount ?? 0)
  };
};
