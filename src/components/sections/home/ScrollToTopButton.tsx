"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border/60 bg-card/80 text-text shadow-[0_18px_38px_rgba(15,23,42,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}
