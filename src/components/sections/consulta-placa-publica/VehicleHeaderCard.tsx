import Image from "next/image";
import type { ConsultaPlacaData } from "./types";

type VehicleHeaderCardProps = {
  data: ConsultaPlacaData;
};

export default function VehicleHeaderCard({ data }: VehicleHeaderCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="flex items-center gap-4 p-4">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white">
          {data.imagem ? (
            <Image
              src={data.imagem}
              alt={data.fabricante}
              width={48}
              height={48}
              className="h-[48px] w-[48px] object-contain"
            />
          ) : (
            <span className="text-xs font-semibold text-gray-600">
              {data.fabricante}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">
            {data.nome}
          </h2>
          <p className="mt-1 text-base text-gray-600">
            {data.fabricante} • {data.tipo}
          </p>
        </div>
      </div>
    </div>
  );
}
