"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import MarketingMobileMenu from "@/components/sections/home/MarketingMobileMenu";
import { navLinks } from "@/components/sections/home/navLinks";

export default function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/40 bg-background/80 shadow-lg shadow-black/5 backdrop-blur"
          : "border-border/20 bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-5 lg:px-8">
        <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5">
          <Link
            href="/"
            className="group inline-flex h-10 items-center overflow-visible rounded-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-11"
            aria-label="OlhaEsseCarro"
          >
            <Image
              src="/images/logo.png"
              alt="OlhaEsseCarro"
              width={240}
              height={64}
              priority
              className="block h-full w-auto origin-left -translate-y-0.5 scale-200 sm:translate-y-1 sm:scale-300"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-2 py-1 text-base font-semibold text-text/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:text-text hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-3 md:flex">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-border px-4 py-2.5 text-base font-semibold text-text transition-all hover:-translate-y-[1px] hover:border-primary/60 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.04)] hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <User className="h-4 w-4" />
              Área do Cliente
            </Link>
            <Link
              href="/cadastro"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--featured)] bg-[var(--featured)] px-5 py-2.5 text-base font-semibold text-white shadow-[0_16px_36px_rgba(17,24,39,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(17,24,39,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--featured)] focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-[var(--primary)] dark:bg-[var(--primary)] dark:hover:bg-[var(--primary)]/90 dark:focus-visible:ring-[var(--primary)]"
            >
              Cadastre-se
            </Link>
          </div>

          <div className="flex items-center justify-end md:hidden">
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="marketing-menu"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 text-text transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-11 sm:w-11"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <MarketingMobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
}
