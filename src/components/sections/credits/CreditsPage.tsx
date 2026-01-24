import PlanCard from "@/components/ui/PlanCard";
import CreditsReassurance from "@/components/sections/credits/CreditsReassurance";
import { creditPlans } from "@/lib/wallets/creditPlans";

const reassuranceItems = [
  "Créditos sem expiração",
  "Sem assinatura recorrente",
  "Pagamento 100% seguro",
  "Dados públicos conforme LGPD",
];

export default function CreditsPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
          Carteira
        </p>
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-text">
            Recarregue seus créditos
          </h1>
          <p className="max-w-2xl text-base text-text-secondary">
            Cada consulta usa 1 crédito. Escolha um pacote e continue
            consultando sem interrupções.
          </p>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {creditPlans.map((plan) => {
          const totalPrice = plan.priceCents / 100;
          const pricePerCredit = totalPrice / plan.credits;

          return (
            <PlanCard
              key={plan.id}
              name={plan.name}
              credits={plan.credits}
              totalPrice={totalPrice}
              pricePerCredit={pricePerCredit}
              isFeatured={plan.recommended}
              badgeText={plan.badge}
            />
          );
        })}
      </section>

      <CreditsReassurance items={reassuranceItems} />
    </div>
  );
}
