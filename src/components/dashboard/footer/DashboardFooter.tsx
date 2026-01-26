import Image from "next/image";
import Link from "next/link";

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
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="OlhaEsseCarro"
              width={240}
              height={64}
              className="h-10 w-auto origin-left -translate-y-0.5 scale-250"
            />
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
          <Link
            href="/privacidade"
            className="rounded-full border border-border bg-background px-3 py-1 transition hover:border-primary/40 hover:text-text"
          >
            Política de privacidade
          </Link>
          <span className="ml-auto text-xs text-text-secondary md:ml-0">
            © {new Date().getFullYear()} OlhaEsseCarro
          </span>
        </div>
      </div>
    </footer>
  );
}
