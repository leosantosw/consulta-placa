import { getPublicPlate } from "@/lib/public-plate/getPublicPlate";
import VehicleHeaderCard from "./VehicleHeaderCard";
import BasicInfoCard from "./BasicInfoCard";
import CtaCard from "./CtaCard";
import { AlertTriangle } from "lucide-react";

type ConsultaPlacaPublicaProps = {
  placa: string;
};

export default async function ConsultaPlacaPublica({
  placa
}: ConsultaPlacaPublicaProps) {
  const result = await getPublicPlate(placa);

  if (result.error) {
    return (
      <div className="mx-auto w-[90%] max-w-none px-4 py-4">
        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span className="font-medium">{result.error.message}</span>
          </div>
        </div>
      </div>
    )

  }

  const data = result.data;

  return (
    <div className="mx-auto w-[90%] max-w-none px-4 py-4">
      <div className="space-y-6">
        <VehicleHeaderCard data={data} />
        <BasicInfoCard data={data} />
        <CtaCard />
      </div>
    </div>
  );
}
