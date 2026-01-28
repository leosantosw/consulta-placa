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
                Esta política explica como tratamos as informações ao usar a
                plataforma OlhaEsseCarro para consultas veiculares.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-xs text-text-secondary">
              Última atualização: janeiro de 2026
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">Dados coletados</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Coletamos apenas os dados necessários para criar e manter sua conta:
                <strong className="text-text"> nome</strong>,{" "}
                <strong className="text-text">e-mail</strong> e{" "}
                <strong className="text-text">senha</strong>.
                <br />
                <br />
                Para realizar uma consulta, o usuário informa a placa do veículo e
                nós enviamos essa informação apenas no momento da consulta para
                processamento do resultado.
                <br />
                <br />
                <strong className="text-text">
                  Não coletamos nem exibimos dados pessoais de proprietários de veículos
                </strong>{" "}
                (como nome, CPF ou endereço).
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">Uso das informações</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Usamos os dados de cadastro para autenticação, segurança e
                disponibilização do acesso à plataforma (ex.: login, recuperação de conta,
                controle de créditos e suporte).
                <br />
                <br />
                As informações veiculares retornadas na consulta são exibidas apenas
                para a finalidade solicitada pelo usuário.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">Compartilhamento</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Utilizamos fornecedor terceirizado para processar consultas veiculares.
                Nessa etapa, a placa informada pode ser compartilhada{" "}
                <strong className="text-text">somente</strong> para retornar o resultado.
                <br />
                <br />
                Não vendemos dados pessoais e não compartilhamos seus dados de cadastro
                com terceiros para fins de publicidade.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background/70 p-6">
              <h3 className="text-base font-semibold text-text">Segurança e retenção</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Adotamos medidas técnicas e organizacionais de segurança para proteger
                as informações.
                <br />
                <br />
                <strong className="text-text">
                  Senhas são armazenadas de forma criptografada (hash)
                </strong>{" "}
                e não são acessíveis em formato original.
                <br />
                <br />
                Mantemos dados de cadastro enquanto sua conta estiver ativa ou conforme
                necessário para cumprir obrigações legais. Sempre que possível, evitamos
                reter dados de consultas além do necessário para operação e prevenção a abuso.
              </p>
            </article>

            {/* Extras essenciais (LGPD) */}
            <article className="rounded-2xl border border-border bg-background/70 p-6 md:col-span-2">
              <h3 className="text-base font-semibold text-text">Base legal (LGPD)</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Tratamos os dados de cadastro principalmente para{" "}
                <strong className="text-text">execução do contrato</strong> (fornecer acesso
                ao serviço),{" "}
                <strong className="text-text">cumprimento de obrigação legal</strong> quando aplicável
                e{" "}
                <strong className="text-text">legítimo interesse</strong> para fins de segurança,
                prevenção a fraudes e melhoria do serviço, sempre respeitando seus direitos.
              </p>
            </article>

            <article className="rounded-2xl border border-border bg-background/70 p-6 md:col-span-2">
              <h3 className="text-base font-semibold text-text">Seus direitos</h3>
              <p className="mt-3 text-sm text-text-secondary">
                Você pode solicitar confirmação de tratamento, acesso, correção,
                atualização, portabilidade (quando aplicável) e exclusão de dados, além
                de informações sobre compartilhamento.
                <br />
                <br />
                Para solicitações, entre em contato pelo e-mail abaixo.
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
