"use client";

import { emptyValue } from "../sections/consulta-placa/utils";

type MiniCardProps = {
  label: string;
  value?: string;
};

export default function MiniCard({ label, value }: MiniCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-background/80 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-text">
        {emptyValue(value) ? "-" : value}
      </p>
    </div>
  );
}
