"use client";

import { useEffect, useRef, useState, type MouseEvent, type FormEvent } from "react";
import {
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRouter } from "next/navigation";
import CarImagePreview from "@/components/sections/home/CarImagePreview";
import FloatingReportCards from "@/components/sections/home/FloatingReportCards";
import MobileReportList from "@/components/sections/home/MobileReportList";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [plate, setPlate] = useState("");
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 120, damping: 18, mass: 0.2 });
  const smoothY = useSpring(rawY, { stiffness: 120, damping: 18, mass: 0.2 });
  const parallaxActive = isPointerFine && !prefersReducedMotion;
  const carX = useTransform(smoothX, (value) => value * (parallaxActive ? 6 : 0));
  const carY = useTransform(smoothY, (value) => value * (parallaxActive ? 6 : 0));
  const cardsX = useTransform(
    smoothX,
    (value) => value * (parallaxActive ? 10 : 0)
  );
  const cardsY = useTransform(
    smoothY,
    (value) => value * (parallaxActive ? 10 : 0)
  );

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const onChange = () => setIsPointerFine(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!parallaxActive || !heroRef.current) {
      return;
    }
    const rect = heroRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(Math.max(-1, Math.min(1, x * 2)));
    rawY.set(Math.max(-1, Math.min(1, y * 2)));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedPlate = plate.trim().replace(/\s+/g, "").toUpperCase();
    if (!normalizedPlate) {
      return;
    }
    router.push(`/consulta/${encodeURIComponent(normalizedPlate)}`);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-140px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.22),_rgba(37,99,235,0)_70%)] blur-3xl sm:h-[680px] sm:w-[680px]" />
        <div className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.16),_rgba(37,99,235,0)_65%)] blur-2xl sm:h-[520px] sm:w-[520px]" />
        <div className="absolute right-[-90px] top-[40px] h-[360px] w-[360px] rotate-12 rounded-[72px] bg-[linear-gradient(135deg,_rgba(37,99,235,0.22),_rgba(14,116,144,0.08))] opacity-60 blur-[70px] sm:h-[420px] sm:w-[420px]" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-0 max-w-6xl items-center px-4 pb-1 pt-8 sm:min-h-[calc(100vh-80px)] sm:px-6 sm:py-14 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                Consulte a placa e veja o histórico em segundos.
              </h1>
              <p className="max-w-xl text-lg text-text-secondary sm:text-xl">
                Evite dor de cabeça: consulte a placa antes de fechar negócio.
              </p>
            </div>

            <form
              className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              onSubmit={handleSubmit}
            >
              <div className="flex w-full flex-1 items-center rounded-xl border border-border/70 bg-card/80 px-5 py-3.5 shadow-[0_6px_24px_rgba(15,23,42,0.08)] focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20">
                <input
                  type="text"
                  placeholder="Digite a placa (ex: ABC1D23)"
                  className="w-full bg-transparent text-[15px] text-text outline-none placeholder:text-text-secondary sm:text-base"
                  aria-label="Digite a placa"
                  value={plate}
                  onChange={(event) => setPlate(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl border border-[var(--featured)] bg-[var(--featured)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(15,23,42,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--featured)] focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-[var(--primary)] dark:bg-[var(--primary)] dark:hover:bg-[var(--primary)]/90 dark:focus-visible:ring-[var(--primary)] sm:w-auto"
              >
                Consultar agora
              </button>
            </form>

            <p className="text-sm text-text-secondary">
              Sem cadastro inicial • resultado em segundos
            </p>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="relative w-full">
              <FloatingReportCards
                parallaxX={cardsX}
                parallaxY={cardsY}
                isLiteMotion={!isPointerFine}
              />
              <CarImagePreview
                className="hidden translate-x-2 sm:block"
                parallaxX={carX}
                parallaxY={carY}
                isLiteMotion={!isPointerFine}
              />
              <div className="sm:hidden">
                <MobileReportList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-text/70 shadow-sm">
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
