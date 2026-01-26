"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type DashboardHeaderProps = {
  title?: string;
  onMenuOpen?: () => void;
};

export default function DashboardHeader({
  title,
  onMenuOpen,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[var(--glass)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex h-9 items-center overflow-visible rounded-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="OlhaEsseCarro"
          >
            <Image
              src="/images/logo.png"
              alt="OlhaEsseCarro"
              width={240}
              height={64}
              className="h-11 w-auto origin-left -translate-y-[-5px] scale-250"
            />
          </Link>
          {title ? (
            <h1 className="mt-1 text-2xl font-semibold text-text">{title}</h1>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card/70 text-text transition hover:bg-card md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
