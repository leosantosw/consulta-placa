import { CreditCard, Search, Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";

const steps = [
  {
    title: "Compre créditos",
    description: "Adicione saldo e libere consultas.",
    icon: CreditCard
  },
  {
    title: "Consulte uma placa",
    description: "Resposta instantânea no painel.",
    icon: Search
  },
  {
    title: "Cada consulta = 1 crédito",
    description: "Débito automático e transparente.",
    icon: Sparkles
  }
];

export default function HowItWorksSection() {
  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-text">Como funciona</h3>
          <p className="text-xs text-text-secondary">
            Três passos, zero fricção.
          </p>
        </div>
        <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
          3 passos
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-border/70 bg-background/60 px-4 py-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                Passo {index + 1}
              </span>
              <step.icon className="h-4 w-4 text-text-secondary" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm font-semibold text-text">{step.title}</p>
            <p className="mt-1 text-xs text-text-secondary">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
