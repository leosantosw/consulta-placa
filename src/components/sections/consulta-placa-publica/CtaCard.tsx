import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Benefit from "./Benefit";

export default function CtaCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-lg">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white">
          Desbloqueie o Relatório Completo
        </h3>
        <p className="mt-3 text-base text-gray-300">
          Evite dor de cabeça: consulte a placa antes de fechar negócio.
        </p>
        <div className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          <Benefit text="Histórico completo do veículo" />
          <Benefit text="Débitos e restrições financeiras" />
          <Benefit text="Multas e pontuação" />
          <Benefit text="Recalls e alertas" />
          <Benefit text="Histórico de leilões" />
          <Benefit text="Avaliação de mercado" />
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <Link
            href="/cadastro"
            className="inline-flex w-full items-center justify-center rounded-xl border border-blue-400/40 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 px-7 py-3 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(59,130,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:w-auto"
          >
            Cadastre-se
          </Link>
          <Link
            href="/#planos"
            className="inline-flex w-full items-center justify-center rounded-xl border-[1.5px] border-border px-6 py-3 text-lg font-semibold text-white transition-all hover:-translate-y-[1px] hover:border-primary/60 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.04)] hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 sm:w-auto"
          >
            Ver Planos
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-400" />
            Sem cadastro inicial
          </div>
          <span className="text-gray-600">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-400" />
            Resultado em segundos
          </div>
        </div>
      </div>
    </div>
  );
}
