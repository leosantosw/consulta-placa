"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { reportCards, toneStyles } from "@/components/sections/home/reportCardsData";

export default function MobileReportList() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(containerRef, { amount: 0.4, once: true });

  return (
    <div className="sm:hidden">
      <motion.div
        ref={containerRef}
        className="rounded-2xl border border-border/60 bg-card/80 px-4 pb-6 pt-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-24 flex-none">
            <Image
              src="/images/blue-car.png"
              alt="Carro em destaque"
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
          <div className="text-sm font-semibold text-text">
            O que oferecemos
          </div>
        </div>
        <div className="grid gap-2">
          {reportCards.map((card, index) => (
            <motion.div
              key={card.label}
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/70 px-3 py-2 text-sm font-semibold text-text shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : 0.08 * index,
              }}
            >
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-xl ${toneStyles[card.tone]}`}
              >
                <card.Icon className="h-4 w-4" />
              </span>
              <span>{card.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
