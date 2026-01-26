"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";

type FloatingCardProps = {
  label: string;
  toneClassName: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  className: string;
  float: number;
  duration: number;
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
  isLiteMotion: boolean;
};

export default function FloatingCard({
  label,
  toneClassName,
  Icon,
  className,
  float,
  duration,
  parallaxX,
  parallaxY,
  isLiteMotion,
}: FloatingCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const floatY = useMotionValue(0);
  const combinedY = useTransform(
    [floatY, parallaxY],
    ([floatValue, parallaxValue]: number[]) => floatValue + parallaxValue
  );

  useEffect(() => {
    if (prefersReducedMotion || isLiteMotion) {
      floatY.set(0);
      return undefined;
    }
    const controls = animate(floatY, [0, float, 0], {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [duration, float, floatY, isLiteMotion, prefersReducedMotion]);

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`absolute ${className}`}
    >
      <motion.div
        style={{ x: parallaxX, y: combinedY }}
        className="max-w-[210px] rounded-3xl border border-border/60 bg-card/70 px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.12)] backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-2xl ${toneClassName}`}
          >
            <Icon className="h-5 w-5" />
          </span>
          <div className="text-sm font-semibold text-text">{label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
