import MarketingHeader from "@/components/sections/home/MarketingHeader";
import FooterSection from "@/components/sections/home/FooterSection";
import PageHeader from "../../components/dashboard/PageHeader";

export const metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <MarketingHeader />
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm md:p-10">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <PageHeader title="Política de Privacidade" />
              <p className="max-w-xl text-sm text-text-secondary">
                Esta política explica como tratamos dados e protegemos suas
                informações ao usar a plataforma OlhaEsseCarro.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-xs text-text-secondary">
              Última atualização: janeiro de 2026
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">
                Dados coletados
              </h3>
              <p className="mt-3 text-sm text-text-secondary">
                Coletamos informações necessárias para criar sua conta,
                processar pagamentos e entregar resultados das consultas.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">
                Uso das informações
              </h3>
              <p className="mt-3 text-sm text-text-secondary">
                Utilizamos os dados para operar o serviço, melhorar a
                experiência e cumprir obrigações legais.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">
                Compartilhamento
              </h3>
              <p className="mt-3 text-sm text-text-secondary">
                Não vendemos seus dados. Compartilhamentos ocorrem apenas com
                provedores essenciais para processamento e segurança.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">
                Segurança e retenção
              </h3>
              <p className="mt-3 text-sm text-text-secondary">
                Mantemos medidas de segurança e retemos informações pelo tempo
                necessário para cumprir contratos e requisitos legais.
              </p>
            </article>
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-background/70 p-6 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl">
              Precisa de mais detalhes sobre privacidade? Fale com nosso time e
              teremos prazer em ajudar.
            </p>
            <span className="rounded-full border border-border bg-card px-4 py-2 text-xs text-text-secondary">
              privacidade@olhaessecarro.com
            </span>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
