import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import DashboardFooter from "../../components/dashboard/footer/DashboardFooter";

export const metadata = {
  title: "Recuperar senha",
};

export default function RecuperarSenhaPage() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-24">
        <section className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-border bg-card/70 p-8 shadow-sm">
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-secondary/10 blur-2xl" />
          <div className="relative">
          <div className="mb-6 space-y-3">
            <h1 className="text-3xl font-semibold text-text">
              Recuperar senha
            </h1>
            <p className="text-sm text-text-secondary">
              Enviaremos um link temporário para redefinir sua senha.
            </p>
          </div>
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
                E-mail
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text">
                <Mail className="h-4 w-4 text-text-secondary" />
                <input
                  type="email"
                  name="email"
                  placeholder="voce@exemplo.com"
                  className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Enviar link
            </button>
          </form>
          <div className="mt-6 text-xs text-text-secondary">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 transition hover:text-text"
            >
              <ArrowLeft className="h-3 w-3" />
              Voltar para login
            </Link>
          </div>
          <div className="mt-6 grid gap-3 text-xs text-text-secondary sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
              Link com expiração
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2">
              <Mail className="h-3.5 w-3.5 text-secondary" />
              Envio imediato
            </div>
          </div>
          </div>
        </section>
      </main>
      <DashboardFooter className="mt-8" />
    </div>
  );
}
