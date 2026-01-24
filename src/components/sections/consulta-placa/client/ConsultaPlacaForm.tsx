"use client";

import {
  useActionState,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent
} from "react";
import { useFormStatus } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { defaultConsultaPlacaState, type ConsultaPlacaState } from "../types";
import { consultaPlacaAction } from "../actions";
import { normalizePlate } from "../utils";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import BuyCreditsLink from "@/components/ui/BuyCreditsLink";
import ResultsSection from "./ResultsSection";

function FormStatus({ state }: { state: ConsultaPlacaState }) {
  const { pending } = useFormStatus();
  const resultData = state.status === "success" ? state.data : null;
  const isError = state.status === "error";
  const isEmpty = state.status === "empty";
  const isInsufficientCredits =
    isError && state.error === "Créditos insuficientes.";

  return (
    <div className="mt-4 space-y-4">
      {!pending && isError ? (
        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-rose-600">{state.error}</p>
            {isInsufficientCredits ? (
              <BuyCreditsLink variant="button" className="w-full sm:w-auto" />
            ) : null}
          </div>
        </Card>
      ) : null}
      {!pending && isEmpty ? (
        <Card>
          <p className="text-sm text-text-secondary">
            Nenhum resultado encontrado para esta placa.
          </p>
        </Card>
      ) : null}
      {pending ? (
        <Card>
          <p className="text-sm font-semibold text-text">
            Consultando placa...
          </p>
        </Card>
      ) : null}
      <AnimatePresence>
        {!pending && resultData ? (
          <motion.div
            key={resultData.placa}
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <ResultsSection data={resultData} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function ConsultaPlacaForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [state, formAction] = useActionState(
    consultaPlacaAction,
    defaultConsultaPlacaState
  );
  const [plateError, setPlateError] = useState<string | null>(null);
  const lastSuccessfulPlate = state.status === "success" ? state.plate : "";

  const validatePlate = (value: string) => {
    if (!value) {
      return "Informe a placa.";
    }
    if (value.length !== 7) {
      return "Informe a placa completa.";
    }
    return null;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const normalized = normalizePlate(event.target.value);
    event.target.value = normalized;
    setPlateError(validatePlate(normalized));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const rawValue = String(formData.get("placa") ?? "");
    const normalized = normalizePlate(rawValue);
    if (inputRef.current) {
      inputRef.current.value = normalized;
    }
    const validationError = validatePlate(normalized);
    setPlateError(validationError);
    if (validationError) {
      event.preventDefault();
      return;
    }
    if (normalized && normalized === lastSuccessfulPlate) {
      event.preventDefault();
      return;
    }
  };

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-4"
    >
      <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-end">
        <label
          htmlFor="placa"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary sm:col-span-2"
        >
          Placa
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text shadow-sm">
          <input
            id="placa"
            name="placa"
            ref={inputRef}
            defaultValue={defaultConsultaPlacaState.plate}
            onChange={handleChange}
            placeholder="AAA0A00 ou AAA0000"
            aria-describedby={plateError ? "placa-error" : undefined}
            aria-invalid={Boolean(plateError)}
            className="w-full bg-transparent text-sm font-semibold uppercase text-text outline-none placeholder:text-text-secondary"
          />
        </div>
        <Button type="submit" variant="ghost">Consultar</Button>
        <p
          id="placa-error"
          className="min-h-[1rem] text-xs text-rose-500 sm:col-span-2"
        >
          {plateError ?? ""}
        </p>
      </div>
      <FormStatus state={state} />
    </form>
  );
}
