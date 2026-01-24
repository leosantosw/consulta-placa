"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BuyCreditsLink from "@/components/ui/BuyCreditsLink";

export default function WelcomeModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(searchParams.get("onboarding") === "welcome");
  }, [searchParams]);

  const handleClose = () => {
    setIsOpen(false);
    router.replace("/dashboard");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 cursor-pointer bg-slate-950/85"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg rounded-3xl border border-border bg-card p-8 shadow-xl">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Boas-vindas
          </p>
          <h2 className="text-2xl font-semibold text-text">
            Comece sua primeira consulta agora
          </h2>
          <p className="text-sm text-text-secondary">
            Você precisa de créditos para realizar novas consultas.
          </p>
        </div>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleClose}
            className="cursor-pointer text-sm font-semibold text-text-secondary transition hover:text-text"
          >
            Agora não
          </button>
          <BuyCreditsLink variant="button" className="w-full sm:w-auto" />
        </div>
      </div>
    </div>
  );
}
