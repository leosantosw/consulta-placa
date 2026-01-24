import PageHeader from "../../components/dashboard/PageHeader"

export const metadata = {
  title: "Termos de Uso",
};

export default function TermosPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <section className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm md:p-10">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <PageHeader title="Termos de Uso" />
            <p className="max-w-xl text-sm text-text-secondary">
              Transparência simples e direta. Ao usar o Consultar, você concorda
              com as condições abaixo, criadas para proteger sua experiência e a
              integridade do serviço.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-xs text-text-secondary">
            Última atualização: janeiro de 2026
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background/70 p-6">
            <h3 className="text-base font-semibold text-text">Uso responsável</h3>
            <p className="mt-3 text-sm text-text-secondary">
              Utilize as consultas apenas para fins legítimos. Não é permitido
              automatizar abusivamente, contornar limites ou violar leis
              aplicáveis.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-background/70 p-6">
            <h3 className="text-base font-semibold text-text">Disponibilidade</h3>
            <p className="mt-3 text-sm text-text-secondary">
              Buscamos estabilidade contínua, mas pode haver pausas pontuais
              para manutenção, melhorias e ajustes operacionais.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-background/70 p-6">
            <h3 className="text-base font-semibold text-text">Dados exibidos</h3>
            <p className="mt-3 text-sm text-text-secondary">
              Os resultados refletem as fontes disponíveis no momento da
              consulta. Para decisões críticas, recomendamos validação extra.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-background/70 p-6">
            <h3 className="text-base font-semibold text-text">Atualizações</h3>
            <p className="mt-3 text-sm text-text-secondary">
              Podemos ajustar estes termos para refletir mudanças no serviço. A
              versão vigente estará sempre publicada nesta página.
            </p>
          </article>
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-background/70 p-6 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl">
            Dúvidas sobre estes termos? Fale com nosso time e teremos prazer em
            esclarecer.
          </p>
          <span className="rounded-full border border-border bg-card px-4 py-2 text-xs text-text-secondary">
            suporte@consultar.app
          </span>
        </div>
      </section>
    </main>
  );
}
