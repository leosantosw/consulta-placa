"use client";

import { useActionState, useEffect, useState } from "react";
import { defaultConsultaPlacaState, type ConsultaPlacaState } from "../types";
import { consultaPlacaAction } from "../actions";
import { normalizePlate } from "../utils";
import Button from "@ui/Button";

export default function ConsultaPlacaForm({
  onStateChange,
  onSubmit
}: {
  onStateChange: (state: ConsultaPlacaState) => void;
  onSubmit: () => void;
}) {
  const [plate, setPlate] = useState(defaultConsultaPlacaState.plate);
  const [state, formAction] = useActionState(
    consultaPlacaAction,
    defaultConsultaPlacaState
  );

  useEffect(() => {
    onStateChange(state);
    if (state.plate) {
      setPlate(state.plate);
    }
  }, [state, onStateChange]);

  const handleSubmit = () => {
    const normalized = normalizePlate(plate);
    setPlate(normalized);
    onSubmit();
  };

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end"
    >
      <label className="flex-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
          Placa
        </span>
        <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text shadow-sm">
          <input
            name="placa"
            value={plate}
            onChange={(event) => setPlate(normalizePlate(event.target.value))}
            placeholder="AAA0A00 ou AAA0000"
            className="w-full bg-transparent text-sm font-semibold uppercase text-text outline-none placeholder:text-text-secondary"
          />
        </div>
      </label>
      <Button type="submit">Consultar</Button>
    </form>
  );
}
