import { headers } from "next/headers";
import type { ConsultaPlacaResponse } from "./types";
import { normalizePlate } from "./utils";

const getBaseUrl = async () => {
  const headerList = await headers();
  const host = headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "http";
  if (!host) {
    return "http://localhost:3000";
  }
  return `${protocol}://${host}`;
};

export const fetchConsultaPlaca = async (
  plate: string
): Promise<ConsultaPlacaResponse | null> => {
  const normalized = normalizePlate(plate);
  if (!normalized) {
    return null;
  }
  const baseUrl = await getBaseUrl();
  const response = await fetch(
    `${baseUrl}/api/consulta-placa/${normalized}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    return null;
  }
  const payload = (await response.json()) as ConsultaPlacaResponse | null;
  return payload ?? null;
};
