import { CheckCircle2 } from "lucide-react";

type CreditsReassuranceProps = {
  title?: string;
  items: string[];
};

export default function CreditsReassurance({
  title = "Por que comprar créditos?",
  items,
}: CreditsReassuranceProps) {
  return (
    <section className="rounded-[24px] border border-border bg-card/70 px-6 py-5 shadow-sm">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {title}
        </p>
        <div className="grid gap-3 text-sm text-text-secondary sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2"
            >
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
