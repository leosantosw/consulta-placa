import Link from "next/link";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import LoginForm from "@/components/sections/auth/LoginForm";

export default function LoginSection() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-8">
        <section className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-border bg-card/70 p-8 shadow-sm">
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-secondary/10 blur-2xl" />
          <div className="relative">
            <div className="mb-6 space-y-2">
              <h1 className="text-3xl font-semibold text-text">Acesse sua conta</h1>
              <p className="mt-4 text-sm text-text-secondary">
                Não tem uma conta?{" "}
                <Link href="/cadastro" className="font-semibold text-text">
                  Cadastre-se
                </Link>
              </p>
            </div>
            <LoginForm />
            <div className="mt-6 flex items-center justify-between text-xs text-text-secondary">
              <Link href="/recuperar-senha" className="transition hover:text-text">
                Esqueceu a senha?
              </Link>
              <span className="rounded-full border border-border bg-background px-3 py-1">
                Seguro
              </span>
            </div>
            <div className="mt-6 grid gap-3 text-xs text-text-secondary sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2">
                <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                Proteção em camadas
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2">
                <LockKeyhole className="h-3.5 w-3.5 text-secondary" />
                Acesso controlado
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
