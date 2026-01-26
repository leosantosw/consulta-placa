"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "O que é um crédito?",
    answer:
      "Um crédito equivale a uma consulta de placa. A cada pesquisa realizada, 1 crédito é automaticamente descontado do seu saldo.",
  },
  {
    question: "Os créditos expiram?",
    answer:
      "Não. Seus créditos não expiram. Você pode usar quando quiser, sem prazo de validade.",
  },
  {
    question: "Preciso pagar mensalidade?",
    answer:
      "Não. Aqui você paga apenas pelos créditos. Sem planos mensais ou cobranças recorrentes.",
  },
  {
    question: "O resultado da consulta é imediato?",
    answer:
      "Sim. Assim que você consulta uma placa, o resultado aparece na hora no seu painel.",
  },
  {
    question: "Posso comprar mais créditos depois?",
    answer:
      "Claro. Você pode recarregar seus créditos a qualquer momento, direto pela plataforma.",
  },
] as const;

export default function FaqSection() {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-background py-10 sm:py-16">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <motion.h2
            className="text-3xl font-semibold text-text sm:text-4xl lg:text-5xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Perguntas frequentes
          </motion.h2>
          <motion.p
            className="text-base text-text-secondary sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            Tudo o que você precisa saber antes de começar a consultar.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.div
                key={faq.question}
                className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{
                  duration: 0.85,
                  ease: "easeOut",
                  delay: prefersReducedMotion ? 0 : 0.2 + index * 0.08,
                }}
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-text sm:text-lg"
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-[0_6px_18px_rgba(56,189,248,0.25)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-text-secondary sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
