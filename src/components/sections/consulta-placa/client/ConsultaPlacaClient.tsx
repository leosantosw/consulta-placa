"use client";

import PageHeader from "@/components/dashboard/PageHeader";
import ConsultaPlacaForm from "./ConsultaPlacaForm";

export default function ConsultaPlacaClient() {
  return (
    <section className="space-y-6">
      <div className="relative overflow-hidden rounded-[32px] border border-border bg-card/70 p-8 shadow-sm">
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-secondary/10 blur-2xl" />
        <div className="relative">
          <PageHeader title="Consultar placa" />
          <p className="text-text-secondary">
            Inicie sua consulta de placa por aqui.
          </p>
        </div>
        <ConsultaPlacaForm />
      </div>
    </section>
  );
}
