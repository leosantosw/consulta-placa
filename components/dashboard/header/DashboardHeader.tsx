"use client";

import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type DashboardHeaderProps = {
  title?: string;
  onMenuOpen?: () => void;
};

export default function DashboardHeader({
  title = "Dashboard",
  onMenuOpen,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-[var(--glass)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="mt-1 text-2xl font-semibold text-text">{title}</h1>
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
          {/* <div className="h-10 w-10 rounded-full border border-border bg-card/60" /> */}
        </div>
      </div>
    </header>
  );
}
