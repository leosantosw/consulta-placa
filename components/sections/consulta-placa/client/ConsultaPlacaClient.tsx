"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/dashboard/PageHeader";
import {
  defaultConsultaPlacaState,
  type ConsultaPlacaState,
  type LoadStatus
} from "../types";
import ConsultaPlacaForm from "./ConsultaPlacaForm";
import ResultsSection from "./ResultsSection";
import Card from "@ui/Card";

const getInitialStatus = (state: ConsultaPlacaState): LoadStatus => {
  if (state.status === "success" && state.data) {
    return "success";
  }
  if (state.status === "error") {
    return "error";
  }
  if (state.status === "empty") {
    return "empty";
  }
  return "idle";
};

export default function ConsultaPlacaClient() {
  const initialState = defaultConsultaPlacaState;
  const [state, setState] = useState<ConsultaPlacaState>(initialState);
  const [status, setStatus] = useState<LoadStatus>(
    getInitialStatus(initialState)
  );

  const handleStateChange = (nextState: ConsultaPlacaState) => {
    setState(nextState);
    setStatus(nextState.status);
  };

  const content = useMemo(() => {
    if (status === "loading") {
      return (
        <Card>
          <p className="text-sm text-text-secondary">Consultando placa...</p>
        </Card>
      );
    }
    if (status === "error") {
      return (
        <Card>
          <p className="text-sm font-semibold text-rose-600">{state.error}</p>
        </Card>
      );
    }
    if (status === "empty") {
      return (
        <Card>
          <p className="text-sm text-text-secondary">
            Nenhum resultado encontrado para esta placa.
          </p>
        </Card>
      );
    }
    if (status === "success" && state.data) {
      return <ResultsSection data={state.data} />;
    }
    return null;
  }, [state, status]);

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
        <ConsultaPlacaForm
          onStateChange={(nextState) => {
            handleStateChange(nextState);
          }}
          onSubmit={() => setStatus("loading")}
        />
      </div>
      {content}
    </section>
  );
}
