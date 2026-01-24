"use server";

import type { ConsultaPlacaResponse, ConsultaPlacaState } from "./types";
import { normalizePlate } from "./utils";
import { getAuthToken } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";

type ErrorPayload = { error?: string };

const fetchConsultaPlaca = async (
  plate: string
): Promise<ConsultaPlacaResponse | null> => {
  const token = await getAuthToken();
  const headers: HeadersInit = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `${process.env.API_URL}/api/consulta-placa/${plate}`,
    { cache: "no-store", headers }
  );

  if (!response.ok) {
    const errorPayload = (await response
      .json()
      .catch(() => null)) as ErrorPayload | null;
    const message = errorPayload?.error ?? "Não foi possível consultar a placa.";
    throw new Error(message);
  }

  const payload = (await response.json()) as ConsultaPlacaResponse | null;
  return payload ?? null;
};

export const consultaPlacaAction = async (
  _prevState: ConsultaPlacaState,
  formData: FormData
): Promise<ConsultaPlacaState> => {
  const plateValue = String(formData.get("placa") ?? "");
  const normalized = normalizePlate(plateValue);
  if (!normalized) {
    return {
      status: "empty",
      data: null,
      error: "",
      plate: ""
    };
  }
  if (normalized.length !== 7) {
    return {
      status: "error",
      data: null,
      error: "Informe a placa completa.",
      plate: normalized
    };
  }
  try {
    const payload = await fetchConsultaPlaca(normalized);
    if (!payload) {
      return {
        status: "empty",
        data: null,
        error: "",
        plate: normalized
      };
    }
    revalidatePath("/dashboard", "layout");
    return {
      status: "success",
      data: payload,
      error: "",
      plate: normalized
    };
  } catch (error) {
    return {
      status: "error",
      data: null,
      error: error instanceof Error ? error.message : "Erro inesperado.",
      plate: normalized
    };
  }
};
