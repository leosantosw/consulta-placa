
"use client";

import { Sparkles } from "lucide-react";
import PlanCardButton from "./PlanCardButton";

type PlanCardProps = {
  name: string;
  credits: number;
  totalPrice: number;
  pricePerCredit: number;
  isFeatured?: boolean;
  badgeText?: string;
  onBuy?: () => void;
  className?: string;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

export default function PlanCard({
  name,
  credits,
  totalPrice,
  pricePerCredit,
  isFeatured = false,
  badgeText = "Mais popular",
  onBuy,
  className = ""
}: PlanCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border-2 bg-[var(--card)] px-8 pb-8 pt-10 transition-all duration-300 ${
        isFeatured
          ? "border-[var(--primary)]/30 shadow-xl shadow-[var(--primary)]/10"
          : "border-[var(--border)] hover:border-[var(--text-secondary)]/30"
      } ${className}`}
    >
      {isFeatured && (
        <span className="pointer-events-none absolute -inset-1 rounded-2xl bg-[var(--primary)]/10 opacity-40 blur-2xl transition duration-300 ease-out group-hover:opacity-60" />
      )}

      {isFeatured && badgeText && (
        <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/15 px-12 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--primary)] shadow-sm shadow-[var(--primary)]/20 backdrop-blur-sm whitespace-nowrap sm:px-4">
          <Sparkles className="h-3.5 w-3.5" />
          {badgeText}
        </span>
      )}

      <div className="flex flex-1 flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[var(--text)]">
            {name}
          </h3>
        </div>

        <div className="mb-6 space-y-1">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold tracking-tight text-[var(--text)]">
              {credits?.toLocaleString("pt-BR") || 0}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            créditos
          </p>
        </div>

        <div className="mb-6 space-y-2">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[var(--text)]">
              {totalPrice ? currencyFormatter.format(totalPrice) : "R$ 0,00"}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            {pricePerCredit ? currencyFormatter.format(pricePerCredit) : "R$ 0,00"} por crédito
          </p>
        </div>

        <div className="flex-1" />

        <div className="mt-6">
          <PlanCardButton
            isFeatured={isFeatured}
            label="Comprar"
            onClick={onBuy}
          />
        </div>
      </div>
    </article>
  );
}
