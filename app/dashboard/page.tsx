import PageHeader from "@/components/dashboard/PageHeader";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <PageHeader title="Visão geral" />
      <p className="text-text-secondary">Conteúdo do dashboard em construção.</p>
    </section>
  );
}
