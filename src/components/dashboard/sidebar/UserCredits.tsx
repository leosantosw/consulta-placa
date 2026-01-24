'use server'

import { getWallet } from "@/lib/wallets/getWallet";
import BuyCreditsLink from "@/components/ui/BuyCreditsLink";

export default async function UserCredits() {
  const wallet = await getWallet();
  const credits = wallet?.balance ?? 0;
  const hasCredits = credits > 0;
  const containerClasses = hasCredits
    ? "border-emerald-200/80 bg-emerald-500/10 text-emerald-700"
    : "border-rose-200/80 bg-rose-500/10 text-rose-700";
  const badgeClasses = hasCredits
    ? "bg-emerald-500/15 text-emerald-700"
    : "bg-rose-500/15 text-rose-700";

  return (
    <div className={`rounded-2xl border px-4 py-4 shadow-sm ${containerClasses}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Créditos
          </p>
          <p className="text-2xl font-semibold tabular-nums sm:text-3xl">
            {credits.toLocaleString("pt-BR")}
          </p>
        </div>
        <div
          className={`self-start rounded-full px-3 py-1 text-xs font-medium ${badgeClasses}`}
        >
          {hasCredits ? "Disponível" : "Sem créditos"}
        </div>
      </div>
      <BuyCreditsLink className="mt-4" />
    </div>
  );
}
