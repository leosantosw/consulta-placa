export default function BlogHeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-10 pt-10 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[-40px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.22),_rgba(37,99,235,0)_70%)] blur-[90px]" />
        <div className="absolute right-[-120px] top-[40px] h-[360px] w-[360px] rounded-[64px] bg-[linear-gradient(135deg,_rgba(37,99,235,0.18),_rgba(14,116,144,0.08))] opacity-70 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
          Blog
        </span>
        <h1 className="text-3xl font-semibold text-text sm:text-4xl lg:text-5xl">
          Dicas e guias para consultar veículos com segurança
        </h1>
        <p className="max-w-3xl text-base text-text-secondary sm:text-lg">
          Conteúdo direto ao ponto sobre consulta de placa, laudos completos e
          cuidados antes de fechar negócio.
        </p>
      </div>
    </section>
  );
}
