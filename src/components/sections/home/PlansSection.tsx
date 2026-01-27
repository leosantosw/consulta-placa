"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import PlanCard from "@/components/ui/PlanCard";
import { creditPlans } from "@/lib/wallets/creditPlans";

export default function PlansSection() {
  const prefersReducedMotion = useReducedMotion();
  const router = useRouter();

  return (
    <section
      id="planos"
      className="relative overflow-hidden bg-background pb-20 sm:pb-28 sm:pt-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-160px] top-4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.2),_rgba(37,99,235,0)_70%)] blur-[90px] sm:h-[520px] sm:w-[520px]" />
        <div className="absolute right-[-120px] top-[100px] h-[480px] w-[480px] rounded-[56px] bg-[linear-gradient(135deg,_rgba(37,99,235,0.16),_rgba(14,116,144,0.07))] opacity-70 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <div className="space-y-5">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Planos
            </motion.span>
            <div className="space-y-3">
              <motion.h2
                className="max-w-4xl text-3xl font-semibold text-text sm:text-4xl lg:text-5xl"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              >
                Veja nossos planos e escolha o ideal
              </motion.h2>
              <motion.p
                className="max-w-3xl text-base text-text-secondary sm:text-lg"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
              >
                Créditos sob demanda, sem mensalidade. Compre uma vez, use
                quando precisar e mantenha suas consultas sempre ativas.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {creditPlans.map((plan, index) => {
            const totalPrice = plan.priceCents / 100;
            const pricePerCredit = totalPrice / plan.credits;

            return (
              <motion.div
                key={plan.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{
                  duration: 0.85,
                  ease: "easeOut",
                  delay: prefersReducedMotion ? 0 : 0.8 + index * 0.12,
                }}
                className="transition-transform"
              >
                <PlanCard
                  name={plan.name}
                  credits={plan.credits}
                  totalPrice={totalPrice}
                  pricePerCredit={pricePerCredit}
                  isFeatured={plan.recommended}
                  badgeText={plan.badge}
                  onBuy={() => router.push("/cadastro")}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border/60 bg-card/70 px-6 py-5 text-sm text-text-secondary shadow-[0_14px_32px_rgba(15,23,42,0.1)]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 1.3 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text">
              Garantias
            </span>
            <span>Checkout seguro • créditos sem expiração • LGPD</span>
          </div>
          <span className="text-text">Dúvidas? fale com nosso time.</span>
        </motion.div>
      </div>
    </section>
  );
}
