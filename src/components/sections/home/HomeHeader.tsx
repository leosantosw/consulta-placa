import Link from "next/link";

export default function HomeHeader() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-border bg-card/80 px-6 py-10 shadow-sm sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(15,118,110,0.12),transparent_60%)]" />
      <div className="relative flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
            Consultar
          </div>
          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-text transition hover:border-primary/40 hover:text-text"
            >
              Login
            </Link>
            <Link
              href="/cadastro"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)] transition hover:bg-primary/90"
            >
              Cadastro
            </Link>
          </nav>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Consultas precisas, em segundos.
          </h1>
          <p className="mt-4 text-base text-text-secondary">
            Centralize consultas de placa, controle seus créditos e acompanhe cada
            busca com clareza.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary">
          <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">
            Seguro
          </span>
          <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">
            Transparente
          </span>
          <span className="rounded-full border border-border/70 bg-background/70 px-4 py-2">
            Instantâneo
          </span>
        </div>
      </div>
    </header>
  );
}
