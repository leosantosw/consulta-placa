"use server";

import type { ConsultaPlacaState } from "./types";
import { fetchConsultaPlaca } from "./data";
import { normalizePlate } from "./utils";

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
