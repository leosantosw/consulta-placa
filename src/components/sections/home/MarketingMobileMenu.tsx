"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { navLinks } from "@/components/sections/home/navLinks";

type MarketingMobileMenuProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};

export default function MarketingMobileMenu({
  menuOpen,
  closeMenu,
}: MarketingMobileMenuProps) {
  return (
    <div
      id="marketing-menu"
      aria-hidden={!menuOpen}
      className={`md:hidden ${
        menuOpen
          ? "pointer-events-auto max-h-[520px] opacity-100 translate-y-0"
          : "pointer-events-none max-h-0 opacity-0 -translate-y-2"
      } overflow-hidden transition-all duration-200`}
    >
      <div className="w-full px-0 pb-6 sm:px-0">
        <div
          className={`w-full transition-all duration-200 ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100 scale-x-100"
              : "opacity-0 -translate-y-3 scale-95 scale-x-95"
          }`}
          style={{ transformOrigin: "top center" }}
        >
          <div className="flex max-h-[70vh] flex-col gap-3 overflow-y-auto bg-background/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur sm:gap-4 sm:max-h-none sm:p-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="inline-flex items-center gap-2 text-base font-semibold text-text/80 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <link.Icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
            <div className="h-px w-full bg-border/40" />
            <Link
              href="/dashboard"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-border/70 px-4 py-2.5 text-base font-semibold text-text transition-all hover:border-primary/50 hover:shadow-[0_0_0_3px_rgba(37,99,235,0.08)] hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <User className="h-4 w-4" />
              Área do Cliente
            </Link>
            <Link
              href="/cadastro"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--featured)] bg-[var(--featured)] px-4 py-2.5 text-base font-semibold text-white shadow-[0_16px_36px_rgba(17,24,39,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(17,24,39,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--featured)] focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-[var(--primary)] dark:bg-[var(--primary)] dark:hover:bg-[var(--primary)]/90 dark:focus-visible:ring-[var(--primary)]"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
