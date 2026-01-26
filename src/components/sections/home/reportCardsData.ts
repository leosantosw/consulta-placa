import { AlertTriangle, Check, Gavel } from "lucide-react";

export const toneStyles = {
  emerald: "bg-emerald-500/15 text-emerald-700",
  amber: "bg-amber-500/15 text-amber-800",
  featured: "bg-[var(--featured)]/10 text-[var(--featured)]",
} as const;

export type Tone = keyof typeof toneStyles;

export const reportCards = [
  {
    label: "Restricao financeira",
    tone: "emerald" as Tone,
    Icon: Check,
    className: "left-[-8px] top-2 lg:left-[-30px] lg:top-6",
    float: 8,
    duration: 7.2,
  },
  {
    label: "Debitos e multas",
    tone: "amber" as Tone,
    Icon: AlertTriangle,
    className: "left-[-18px] bottom-6 lg:left-6 lg:bottom-3",
    float: 11,
    duration: 8.6,
  },
  {
    label: "Passagem por leilao",
    tone: "featured" as Tone,
    Icon: Gavel,
    className: "right-[-22px] top-4 lg:right-[-40px] lg:top-[-4px]",
    float: 6,
    duration: 7.8,
  },
  {
    label: "Indicador de sinistro",
    tone: "amber" as Tone,
    Icon: AlertTriangle,
    className: "right-[-2px] bottom-20 lg:right-[-8px] lg:bottom-12",
    float: 10,
    duration: 8.1,
  },
];
