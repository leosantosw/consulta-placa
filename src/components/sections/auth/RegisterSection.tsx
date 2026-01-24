import { LockKeyhole, ShieldCheck, UserPlus } from "lucide-react";
import DashboardFooter from "@/components/dashboard/footer/DashboardFooter";
import RegisterForm from "@/components/sections/auth/RegisterForm";

export default function RegisterSection() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-16">
        <section className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-border bg-card/70 p-8 shadow-sm">
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-secondary/10 blur-2xl" />
          <RegisterForm />
          <div className="mt-6 flex items-center justify-between text-xs text-text-secondary">
            <span className="rounded-full border border-border bg-background px-3 py-1">
              Cadastro protegido
            </span>
            <div className="flex items-center gap-2">
              <UserPlus className="h-3.5 w-3.5 text-secondary" />
              Conta pessoal
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-xs text-text-secondary sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2">
              <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
              Dados criptografados
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-3 py-2">
              <LockKeyhole className="h-3.5 w-3.5 text-secondary" />
              Acesso controlado
            </div>
          </div>
        </section>
      </main>
      <DashboardFooter className="mt-8" />
    </div>
  );
}
