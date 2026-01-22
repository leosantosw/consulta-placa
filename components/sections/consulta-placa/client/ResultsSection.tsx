"use client";

import type { ConsultaPlacaResponse } from "../types";
import Card from "@ui/Card";
import InfoRow from "@ui/InfoRow";
import MiniCard from "@ui/MiniCard";
import { emptyValue, joinParts, statusStyles } from "../utils";

type ResultsSectionProps = {
  data: ConsultaPlacaResponse;
};

export default function ResultsSection({ data }: ResultsSectionProps) {
  const fipeData = data.fipe?.dados?.[0];
  const advancedFields = [
    { label: "Peso bruto total", value: data.extra?.peso_bruto_total },
    { label: "Capacidade maxima de tracao", value: data.extra?.cap_maxima_tracao },
    { label: "Tipo de montagem", value: data.extra?.tipo_montagem },
    { label: "Tipo de carroceria", value: data.extra?.tipo_carroceria },
    { label: "Tipo doc. proprietario", value: data.extra?.tipo_doc_prop },
    { label: "Tipo doc. faturado", value: data.extra?.tipo_doc_faturado },
    { label: "Situacao do chassi", value: data.extra?.situacao_chassi },
    { label: "Carroceria", value: data.extra?.carroceria },
    { label: "Caixa de cambio", value: data.extra?.caixa_cambio },
    { label: "Eixo traseiro diferencial", value: data.extra?.eixo_traseiro_dif },
    { label: "Terceiro eixo", value: data.extra?.terceiro_eixo },
    { label: "Tipo doc. importadora", value: data.extra?.tipo_doc_importadora },
    { label: "Nacionalidade", value: data.extra?.nacionalidade }
  ].filter((field) => !emptyValue(field.value));

  return (
    <div className="space-y-6">
      <Card className="p-0">
        <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-background">
            {data.logo ? (
              <img src={data.logo} alt={data.marca} className="h-12" />
            ) : (
              <span className="text-sm font-semibold text-text-secondary">
                {data.marca}
              </span>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <div>
              <h2 className="text-2xl font-semibold text-text">
                {data.MARCA} {data.MODELO} {data.anoModelo}
              </h2>
              {fipeData?.texto_modelo ? (
                <p className="text-sm text-text-secondary">
                  {fipeData.texto_modelo}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-xl border border-border bg-background px-4 py-2">
                <p className="text-xs font-semibold text-text-secondary">Placa</p>
                <p className="text-base font-semibold text-text">{data.placa}</p>
                {data.placa_alternativa ? (
                  <p className="text-xs text-text-secondary">
                    {data.placa_alternativa}
                  </p>
                ) : null}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  Local
                </p>
                <p className="text-sm font-semibold text-text">
                  {data.municipio} / {data.uf}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background px-4 py-3 text-center">
            <p className="text-xs font-semibold text-text-secondary">Status</p>
            <span
              className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles(
                data.situacao
              )}`}
            >
              {data.situacao}
            </span>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card title="Status do veiculo">
          <InfoRow label="Situacao" value={data.situacao} />
          <InfoRow label="Origem" value={data.origem} />
          <InfoRow
            label="Tipo"
            value={joinParts([data.extra?.tipo_veiculo, data.extra?.especie])}
          />
          <InfoRow label="Chassi" value={data.chassi} />
        </Card>

        <Card title="FIPE">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-text-secondary">Valor</p>
              <p className="text-2xl font-semibold text-text">
                {fipeData?.texto_valor ?? "-"}
              </p>
            </div>
            <InfoRow label="Mes referencia" value={fipeData?.mes_referencia} />
            <InfoRow label="Codigo FIPE" value={fipeData?.codigo_fipe} />
            <InfoRow
              label="Score"
              value={fipeData?.score ? String(fipeData.score) : "-"}
            />
          </div>
        </Card>
      </div>

      <Card title="Caracteristicas principais">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MiniCard label="Ano fabricacao" value={data.extra?.ano_fabricacao} />
          <MiniCard label="Combustivel" value={data.extra?.combustivel} />
          <MiniCard label="Cilindradas" value={data.extra?.cilindradas} />
          <MiniCard
            label="Passageiros"
            value={data.extra?.quantidade_passageiro}
          />
          <MiniCard label="Cor" value={data.cor} />
          <MiniCard
            label="Segmento / sub-segmento"
            value={
              data.extra?.segmento && data.extra?.sub_segmento
                ? `${data.extra.segmento} / ${data.extra.sub_segmento}`
                : data.extra?.segmento || data.extra?.sub_segmento
            }
          />
          <MiniCard label="Eixos" value={data.extra?.eixos} />
        </div>
      </Card>

      <Card title="Identificacao">
        <div className="grid gap-4 sm:grid-cols-2">
          <MiniCard label="Placa nova" value={data.extra?.placa_modelo_novo} />
          <MiniCard
            label="Placa antiga"
            value={data.extra?.placa_modelo_antigo}
          />
          <MiniCard label="UF placa" value={data.extra?.uf_placa} />
          <MiniCard label="Municipio" value={data.extra?.municipio} />
        </div>
      </Card>

      <Card title="Dados tecnicos avancados">
        <details className="rounded-xl border border-border bg-background p-4">
          <summary className="cursor-pointer text-sm font-semibold text-text">
            Ver detalhes tecnicos
          </summary>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {advancedFields.map((field) => (
              <div
                key={field.label}
                className="rounded-lg border border-border/60 bg-card px-4 py-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  {field.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-text">
                  {field.value}
                </p>
              </div>
            ))}
          </div>
          {advancedFields.length === 0 ? (
            <p className="mt-3 text-sm text-text-secondary">
              Nenhum dado adicional disponivel.
            </p>
          ) : null}
        </details>
      </Card>

      <Card>
        <div className="flex flex-col gap-2 text-sm text-text-secondary">
          <span>Data da consulta: {data.data}</span>
        </div>
      </Card>
    </div>
  );
}
