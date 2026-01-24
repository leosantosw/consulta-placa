import Link from "next/link";
import { Sparkles } from "lucide-react";

type DashboardFooterProps = {
  className?: string;
};

export default function DashboardFooter({ className }: DashboardFooterProps) {
  return (
    <footer
      className={`border-t border-border bg-card/60 ${className ?? "mt-16"}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">
            <Sparkles className="h-4 w-4 text-secondary" />
            Consultar
          </div>
          <p className="max-w-md text-sm text-text-secondary">
            Experiência enxuta para consultas rápidas, com foco total no que
            importa.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary">
          <Link
            href="/termos"
            className="rounded-full border border-border bg-background px-3 py-1 transition hover:border-primary/40 hover:text-text"
          >
            Termos de uso
          </Link>
          <span className="ml-auto text-xs text-text-secondary md:ml-0">
            © {new Date().getFullYear()} Consultar
          </span>
        </div>
      </div>
    </footer>
  );
}
