import { NextResponse } from "next/server";
import { withAuth } from "@/lib/auth/withAuth";
import { debitCredits } from "@/lib/wallets/debitCredits";

const mockedData = {
  MARCA: "VW",
  MODELO: "CROSSFOX",
  SUBMODELO: "CROSSFOX",
  VERSAO: "CROSSFOX",
  ano: "2007",
  anoModelo: "2007",
  chassi: "*****10137",
  codigoSituacao: "0",
  cor: "Prata",
  data: new Date().toDateString(),
  extra: {
    ano_fabricacao: "2007",
    ano_modelo: "2007",
    caixa_cambio: "",
    cap_maxima_tracao: "198",
    carroceria: "",
    cilindradas: "1599",
    combustivel: "Alcool / Gasolina",
    di: "0",
    eixo_traseiro_dif: "",
    eixos: "2",
    especie: "Passageiro",
    grupo: "CROSS FOX",
    modelo: "VW/CROSSFOX",
    municipio: "SAO LEOPOLDO",
    nacionalidade: "Nacional",
    peso_bruto_total: "158",
    placa: "INT8236",
    placa_modelo_antigo: "INT8236",
    placa_modelo_novo: "INT8C36",
    quantidade_passageiro: "5",
    "s.especie": "Passageiro",
    segmento: "Auto",
    situacao_chassi: "N",
    situacao_veiculo: "S",
    sub_segmento: "AU - HATCH PEQUENO",
    terceiro_eixo: "",
    tipo_carroceria: "NAO APLICAVEL",
    tipo_doc_faturado: "Juridica",
    tipo_doc_importadora: "Outros",
    tipo_doc_prop: "Fisica",
    tipo_montagem: "1",
    tipo_veiculo: "Automovel",
    uf: "RS",
    uf_faturado: "RS",
    uf_placa: "RS"
  },
  fipe: {
    dados: [
      {
        ano_modelo: "2007",
        codigo_fipe: "005225-6",
        codigo_marca: 59,
        codigo_modelo: "2368",
        combustivel: "Gasolina",
        id_valor: 77250,
        mes_referencia: "maio de 2022 ",
        referencia_fipe: 285,
        score: 101,
        sigla_combustivel: "G",
        texto_marca: "VW - VolksWagen",
        texto_modelo: "CROSSFOX 1.6 Mi Total Flex 8V 5p",
        texto_valor: "R$ 28.799,00",
        tipo_modelo: 1
      }
    ]
  },
  listamodelo: ["CROSSFOX"],
  logo: "https://apiplacas.com.br/logos/logosMarcas/vw.png",
  marca: "VW",
  marcaModelo: "VW/CROSSFOX",
  mensagemRetorno: "Sem erros.",
  modelo: "CROSSFOX",
  municipio: "S\u00e3o Leopoldo",
  origem: "NACIONAL",
  placa: "INT8C36",
  placa_alternativa: "INT8236",
  situacao: "Sem restri\u00e7\u00e3o",
  token: "",
  uf: "RS"
};

const getPlacaFromRequest = (request: Request) => {
  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
};

export const GET = withAuth(async (request, payload) => {
  const placa = getPlacaFromRequest(request);

  const debitResult = await debitCredits(payload.sub, 1, 'consulta_placa');

  if (!debitResult.ok) {
    if (debitResult.reason === "wallet_not_found") {
      return NextResponse.json(
        { error: "Carteira não encontrada." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Créditos insuficientes." },
      { status: 402 }
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(mockedData);
});
