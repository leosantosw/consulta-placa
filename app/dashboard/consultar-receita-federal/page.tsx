import PageHeader from "../../../components/dashboard/PageHeader";

export const metadata = {
  title: "Consultar Receita Federal",
};

export default function ConsultarReceitaFederalPage() {
  return (
    <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <PageHeader title="Consultar Receita Federal" />
      <p className="text-text-secondary">
        Comece sua consulta de CPF aqui.
      </p>
    </section>
  );
}
