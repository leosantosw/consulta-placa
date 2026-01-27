import ConsultaPlacaPublica from "@/components/sections/consulta-placa-publica/ConsultaPlacaPublica";
import FooterSection from "@/components/sections/home/FooterSection";
import MarketingHeader from "@/components/sections/home/MarketingHeader";

type ConsultaPageProps = {
  params: Promise<{ placa: string }>;
};

export default async function ConsultaPage({ params }: ConsultaPageProps) {
  const { placa } = await params;
  const decodedPlate = decodeURIComponent(placa);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.18),_rgba(37,99,235,0)_70%)] blur-3xl sm:h-[620px] sm:w-[620px]" />
        <div className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.14),_rgba(37,99,235,0)_65%)] blur-2xl sm:h-[520px] sm:w-[520px]" />
        <div className="absolute right-[-90px] top-[40px] h-[360px] w-[360px] rotate-12 rounded-[72px] bg-[linear-gradient(135deg,_rgba(37,99,235,0.18),_rgba(14,116,144,0.06))] opacity-60 blur-[70px] sm:h-[420px] sm:w-[420px]" />
      </div>
      <MarketingHeader />
      <section className="relative z-10 mx-auto flex w-[90%] max-w-none flex-col gap-8 px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <ConsultaPlacaPublica placa={decodedPlate} />
      </section>
      <FooterSection />
    </main>
  );
}
