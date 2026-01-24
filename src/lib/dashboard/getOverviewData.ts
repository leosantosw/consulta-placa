import "server-only";
import prisma from "@/lib/prisma";
import { getUserId } from "@/lib/auth/session";

export type OverviewItem = {
  created_at: Date;
  entity_key: string | null;
};

export type OverviewData = {
  items: OverviewItem[];
  totalQueries: number;
  creditsUsed: number;
  todayCounts: Record<string, number>;
  balance: number;
};

export const getOverviewData = async (): Promise<OverviewData> => {
  const userId = await getUserId();

  if (!userId) {
    return {
      items: [],
      totalQueries: 0,
      creditsUsed: 0,
      todayCounts: {},
      balance: 0
    };
  }

  const now = new Date();
  const startOfDay = new Date(now);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(startOfDay);
  endOfDay.setDate(startOfDay.getDate() + 1);

  const [groupedAll, summary, groupedToday, wallet] = await Promise.all([
    prisma.wallet_transactions.groupBy({
      by: ["entity_key"],
      where: {
        user_id: userId,
        entity_type: "plate_query"
      },
      _count: {
        _all: true
      },
      _max: {
        created_at: true
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
    }),
    prisma.wallet_transactions.groupBy({
      by: ["entity_key"],
      where: {
        user_id: userId,
        entity_type: "plate_query",
        created_at: {
          gte: startOfDay,
          lt: endOfDay
        }
      },
      _count: {
        _all: true
      }
    }),
    prisma.wallets.findUnique({
      where: { user_id: userId },
      select: { balance: true }
    })
  ]);

  const items = groupedAll
    .filter((item) => item.entity_key && item._max.created_at)
    .map((item) => ({
      entity_key: item.entity_key,
      created_at: item._max.created_at as Date
    }))
    .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    .slice(0, 5);

  const todayCounts = groupedToday.reduce<Record<string, number>>(
    (acc, item) => {
      if (item.entity_key) {
        acc[item.entity_key] = item._count._all;
      }
      return acc;
    },
    {}
  );

  return {
    items,
    totalQueries: summary._count.id ?? 0,
    creditsUsed: Math.abs(summary._sum.amount ?? 0),
    todayCounts,
    balance: wallet?.balance ?? 0
  };
};
