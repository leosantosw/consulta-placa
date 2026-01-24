import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import DashboardFooter from "@/components/dashboard/footer/DashboardFooter";
import PasswordRecoveryForm from "@/components/sections/auth/PasswordRecoveryForm";

export default function PasswordRecoverySection() {
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
            <PasswordRecoveryForm />
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
