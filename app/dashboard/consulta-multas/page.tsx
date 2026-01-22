import PageHeader from "../../../components/dashboard/PageHeader";

export const metadata = {
  title: "Consultar multas",
};

export default function ConsultaMultasPage() {
  return (
    <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <PageHeader title="Consultar multas" />
      <p className="text-text-secondary">
        Veja aqui as multas relacionadas à placa informada.
      </p>
    </section>
  );
}
