import type { ConsultaPlacaData } from "./types";
import InfoItem from "./InfoItem";

type BasicInfoCardProps = {
  data: ConsultaPlacaData;
};

export default function BasicInfoCard({ data }: BasicInfoCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-gray-900">
        Informações Básicas
      </h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <InfoItem label="Placa" value={data.placaFormatada} />
        <InfoItem label="Marca" value={data.marca} />
        <InfoItem label="Ano" value={data.ano} />
        <InfoItem label="Cor" value={data.cor} />
        <InfoItem label="Chassi" value={data.chassi} />
        <InfoItem label="Combustível" value={data.combustivel} />
      </div>
    </div>
  );
}
