"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, LayoutDashboard, User, UserPlus } from "lucide-react";
import { navLinks } from "@/components/sections/home/navLinks";

export default function FooterSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-background pb-10 pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[40px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.18),_rgba(37,99,235,0)_70%)] blur-[90px]" />
        <div className="absolute right-[-140px] top-[-20px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.2),_rgba(14,116,144,0)_70%)] blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-8 rounded-[28px] border border-border/60 bg-card/70 p-6 shadow-[0_24px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-10 lg:p-10"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 28, scale: 0.98, filter: "blur(6px)" }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          }
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="flex items-start">
            <Link
              href="/"
              className="inline-flex h-10 items-center overflow-visible rounded-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-11"
              aria-label="OlhaEsseCarro"
            >
              <Image
                src="/images/logo.png"
                alt="OlhaEsseCarro"
                width={240}
                height={64}
                className="block h-full w-auto origin-left -translate-y-0.5 scale-200 sm:translate-y-1 sm:scale-300"
              />
            </Link>
          </div>

          <div className="space-y-4 text-sm font-semibold text-text/60 sm:text-base">
            <span className="text-xs uppercase tracking-[0.28em] text-text">
              Links rápidos
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <ArrowRight className="h-4 w-4 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-sm font-semibold text-text/60 sm:text-base">
            <span className="text-xs uppercase tracking-[0.28em] text-text">
              Minha conta
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <User className="h-4 w-4 text-primary" />
                  Entrar
                </Link>
              </li>
              <li>
                <Link
                  href="/cadastro"
                  className="inline-flex items-center gap-2 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <UserPlus className="h-4 w-4 text-primary" />
                  Criar conta
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <LayoutDashboard className="h-4 w-4 text-primary" />
                  Minha área
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-sm font-semibold text-text/60 sm:text-base">
            <span className="text-xs uppercase tracking-[0.28em] text-text">
              Legal
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/termos"
                  className="transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex border-t border-border/50 pt-6 text-xs text-text-secondary sm:text-sm"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <span>
            © {new Date().getFullYear()} OlhaEsseCarro. Todos os direitos reservados.
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
