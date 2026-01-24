import Card from "@/components/ui/Card";

const steps = [
  {
    title: "Compre créditos",
    description: "Escolha um pacote e adicione saldo à sua conta."
  },
  {
    title: "Consulte uma placa",
    description: "Inicie a consulta no painel de veículos."
  },
  {
    title: "Cada consulta = 1 crédito",
    description: "O saldo é debitado automaticamente ao concluir."
  }
];

export default function HowItWorksSection() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-text">Como funciona</h3>
        <span className="text-xs text-text-secondary">Em 3 passos</span>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-border/70 bg-background/70 px-4 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--featured)]/10 text-sm font-semibold text-[var(--featured)]">
                {index + 1}
              </span>
              <p className="text-sm font-semibold text-text">{step.title}</p>
            </div>
            <p className="mt-2 text-xs text-text-secondary">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
