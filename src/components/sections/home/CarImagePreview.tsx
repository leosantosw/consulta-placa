"use client";

import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import Image from "next/image";

const defaultCarImage = "/images/blue-car.png";

type CarImagePreviewProps = {
  src?: string;
  alt?: string;
  className?: string;
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
  isLiteMotion?: boolean;
};

export default function CarImagePreview({
  src = defaultCarImage,
  alt = "Carro em destaque",
  className = "",
  parallaxX,
  parallaxY,
  isLiteMotion = false,
}: CarImagePreviewProps) {
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const floatY = useMotionValue(0);
  const combinedY = useTransform(
    [floatY, parallaxY ?? fallbackY],
    ([floatValue, parallaxValue]: number[]) => floatValue + parallaxValue
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsSmallScreen(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isSmallScreen || isLiteMotion) {
      floatY.set(0);
      return undefined;
    }
    const controls = animate(floatY, [0, 5, 0], {
      duration: 10.8,
      ease: "easeInOut",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [floatY, isLiteMotion, isSmallScreen, prefersReducedMotion]);

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${className}`}
    >
      <div className="absolute bottom-6 h-7 w-4/5 rounded-full bg-black/5 blur-2xl" />
      <motion.div
        style={{ x: parallaxX ?? fallbackX, y: combinedY }}
        className="relative w-full max-w-xl -translate-y-5"
      >
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 480px, 80vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
