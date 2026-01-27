import { NextRequest } from "next/server";

function normalizePlate(raw: string) {
  return raw.replace(/[^A-Z0-9]/gi, "").toUpperCase();
}

const mockedBasicData = {
  nome: "Honda CG",
  ano: "2013/2013",
  cor: "PRETA",
  combustivel: "ALCOOL / GASOLINA",
  tipo: "Motocicleta",
  fabricante: "HONDA",
  imagem: "https://apiplacas.com.br/logos/logosMarcas/vw.png",
  placaFormatada: "OTM 2202",
  marca: "VW",
  chassi: "*****10137",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ placa: string }> }
) {
  const { placa } = await params

  const plate = normalizePlate(placa);

  if (!/^[A-Z]{3}\d[A-Z0-9]\d{2}$|^[A-Z]{3}\d{4}$/.test(plate)) {
    return Response.json({ error: "Placa inválida" }, { status: 400 });
  }
  await new Promise((resolve) => setTimeout(resolve, 300));
  return Response.json({
    placa,
    ...mockedBasicData
  });
}
