import 'server-only'
import type { ConsultaPlacaData, ConsultaPlacaResult } from "@/components/sections/consulta-placa-publica/types";

export async function getPublicPlate(
  placa: string
): Promise<ConsultaPlacaResult> {
  const url = `${process.env.API_URL}/api/consulta-placa-publica/${encodeURIComponent(
    placa
  )}`;
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    let message = "Erro ao consultar placa";
    try {
      const payload = (await response.json()) as { error?: string };
      if (payload?.error) {
        message = payload.error;
      }
    } catch {}

    return { data: null, error: { message, status: response.status } };
  }

  const data = (await response.json()) as ConsultaPlacaData;
  return { data, error: null };
}
