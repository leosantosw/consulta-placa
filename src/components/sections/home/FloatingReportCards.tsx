"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useReducedMotion, type MotionValue } from "motion/react";
import FloatingCard from "@/components/sections/home/FloatingCard";
import {
  reportCards,
  toneStyles,
} from "@/components/sections/home/reportCardsData";

type FloatingReportCardsProps = {
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
  isLiteMotion?: boolean;
};

export default function FloatingReportCards({
  parallaxX,
  parallaxY,
  isLiteMotion = false,
}: FloatingReportCardsProps) {
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsSmallScreen(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const disableContinuous = prefersReducedMotion || isSmallScreen || isLiteMotion;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
      {reportCards.map((card) => (
        <FloatingCard
          key={card.label}
          label={card.label}
          toneClassName={toneStyles[card.tone]}
          Icon={card.Icon}
          className={card.className}
          float={card.float}
          duration={card.duration}
          parallaxX={parallaxX ?? fallbackX}
          parallaxY={parallaxY ?? fallbackY}
          isLiteMotion={disableContinuous}
        />
      ))}
    </div>
  );
}
