"use client";

import { emptyValue } from "../sections/consulta-placa/utils";

type InfoRowProps = {
  label: string;
  value?: string | null;
};

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/60 py-3 last:border-b-0">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </span>
      <span className="text-sm font-semibold text-text">
        {emptyValue(value) ? "-" : value}
      </span>
    </div>
  );
}
