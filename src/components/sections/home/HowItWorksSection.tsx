"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import {
  Check,
  Coins,
  CreditCard,
  Plus,
  Search,
  Zap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Compre créditos",
    description: "Escolha um pacote e adicione saldo em segundos.",
    icon: "credit",
  },
  {
    number: "02",
    title: "Consulte a placa",
    description: "Digite a placa e receba o resultado na hora.",
    icon: "plate",
  },
  {
    number: "03",
    title: "Desconto automático",
    description: "A cada consulta, 1 crédito é abatido do seu saldo.",
    icon: "discount",
  },
] as const;

type StepIcon = (typeof steps)[number]["icon"];

type StepIconBadgeProps = {
  icon: StepIcon;
};

function StepIconBadge({ icon }: StepIconBadgeProps) {
  if (icon === "credit") {
    return (
      <div className="relative flex items-center justify-center text-primary">
        <CreditCard className="h-6 w-6" />
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white shadow-[0_6px_16px_rgba(37,99,235,0.5)]">
          <Plus className="h-3 w-3" />
        </span>
      </div>
    );
  }

  if (icon === "plate") {
    return (
      <div className="relative flex items-center justify-center text-primary">
        <Search className="h-6 w-6" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center text-primary">
      <Zap className="h-6 w-6" />
      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[10px] text-emerald-950 shadow-[0_6px_16px_rgba(16,185,129,0.45)]">
        <Check className="h-3 w-3" />
      </span>
    </div>
  );
}

export default function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[20px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.28),_rgba(37,99,235,0)_70%)] blur-[100px]" />
        <div className="absolute right-[-140px] top-[140px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.22),_rgba(14,116,144,0)_70%)] blur-[110px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <motion.h2
            className="text-3xl font-semibold text-text sm:text-4xl lg:text-5xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Como funciona
          </motion.h2>
          <motion.p
            className="text-base text-text-secondary sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            Compre créditos e consulte quando quiser. Cada consulta consome 1
            crédito — sem mensalidade, sem complicação.
          </motion.p>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-6 shadow-[0_22px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{
                duration: 0.85,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : 0.2 + index * 0.12,
              }}
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.16),_rgba(59,130,246,0)_70%)] blur-[35px]" />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-primary">
                  {step.number}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_14px_28px_rgba(56,189,248,0.3)]">
                  <StepIconBadge icon={step.icon} />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold text-text">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex w-full max-w-xl flex-col gap-3 rounded-3xl border border-primary/20 bg-white/10 p-6 text-sm text-text shadow-[0_18px_45px_rgba(37,99,235,0.2)] backdrop-blur-xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Coins className="h-4 w-4 text-primary" />
            <span>Você tem 50 créditos</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-400" />
            <span>Fez 1 consulta</span>
          </div>
          <div className="flex items-center gap-2">
            <Coins className="h-4 w-4 text-primary" />
            <span>Agora tem 49 créditos</span>
          </div>
        </motion.div>

        <motion.a
          href="/cadastro"
          className="inline-flex items-center justify-center rounded-xl border border-[var(--featured)] bg-[var(--featured)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_16px_36px_rgba(17,24,39,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(17,24,39,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--featured)] focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-[var(--primary)] dark:bg-[var(--primary)] dark:hover:bg-[var(--primary)]/90 dark:focus-visible:ring-[var(--primary)]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
        >
          Começe agora
        </motion.a>

      </div>
    </section>
  );
}
