"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BuyCreditsLinkProps = {
  className?: string;
  variant?: "link" | "button";
};

const variants: Record<NonNullable<BuyCreditsLinkProps["variant"]>, string> = {
  link:
    "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:text-[color-mix(in_oklab,var(--primary),black_20%)]",
  button:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--featured)] bg-[var(--featured)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.22)] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--featured)] focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-[var(--primary)] dark:bg-[var(--primary)] dark:hover:bg-[var(--primary)]/90 dark:focus-visible:ring-[var(--primary)]"
};

export default function BuyCreditsLink({
  className = "",
  variant = "link"
}: BuyCreditsLinkProps) {
  return (
    <Link
      href="/dashboard/creditos"
      className={`${variants[variant]} ${className}`}
    >
      Comprar créditos
      <ArrowRight className="h-3 w-3" aria-hidden="true" />
    </Link>
  );
}
