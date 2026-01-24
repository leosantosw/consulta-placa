import Link from "next/link";
import { ArrowRight, CreditCard, Search } from "lucide-react";
import Card from "@/components/ui/Card";
import CounterCard from "@/components/ui/CounterCard";
import HowItWorksSection from "@/components/sections/dashboard/HowItWorksSection";
import WelcomeModal from "@/components/sections/dashboard/WelcomeModal";
import { getOverviewData } from "@/lib/dashboard/getOverviewData";

const formatDate = (value: Date) =>
  new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(value);

export default async function OverviewSection() {
  const { items, totalQueries, creditsUsed, todayCounts, balance } =
    await getOverviewData();

  return (
    <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <WelcomeModal />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text">Visão geral</h2>
            <p className="text-sm text-text-secondary">
              Acompanhe suas últimas consultas de placa.
            </p>
          </div>
          <Link
            href="/dashboard/consulta-placa"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] transition hover:text-[color-mix(in_oklab,var(--primary),black_20%)]"
          >
            Nova consulta
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>

        {balance === 0 ? (
          <div className="rounded-2xl border border-amber-200/70 bg-amber-500/10 px-4 py-3 text-sm text-amber-800">
            Você precisa de créditos para realizar novas consultas.
          </div>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2">
          <CounterCard
            title="Consultas feitas"
            value={totalQueries.toLocaleString("pt-BR")}
            icon={Search}
            iconTone="bg-blue-500/10 text-blue-600"
            cardTone="border-blue-200/70 bg-sky-500/5"
          />
          <CounterCard
            title="Créditos consumidos"
            value={creditsUsed.toLocaleString("pt-BR")}
            icon={CreditCard}
            iconTone="bg-rose-500/10 text-rose-600"
            cardTone="border-rose-200/60 bg-rose-500/4"
          />
        </div>

        <Card>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-text">Últimas consultas</h3>
            <span className="text-xs text-text-secondary">Últimas 5</span>
          </div>
          {items.length > 0 ? (
            <div className="mt-4 divide-y divide-border/60">
              {items.map((item) => (
                <div
                  key={item.entity_key ?? item.created_at.toISOString()}
                  className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {item.entity_key ?? "Placa não informada"}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {formatDate(item.created_at)}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                      Concluída
                    </span>
                    {item.entity_key && todayCounts[item.entity_key] > 1 ? (
                      <span className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-text-secondary">
                        Consultada {todayCounts[item.entity_key]}x hoje
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-text-secondary">
              Você ainda não fez consultas recentes.
            </p>
          )}
        </Card>

        <HowItWorksSection />
      </div>
    </section>
  );
}
