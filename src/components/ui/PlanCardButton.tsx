"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type PlanCardButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  isFeatured?: boolean;
};

export default function PlanCardButton({
  label,
  onClick,
  isFeatured = false,
  className = "",
  type = "button",
  ...props
}: PlanCardButtonProps) {
  const baseStyles =
    "flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-200";

  const featuredStyles = "bg-[var(--text)] dark:bg-[var(--card)] text-white hover:opacity-90";
  const defaultStyles =
    "border-2 border-[var(--text)] bg-transparent text-[var(--text)] hover:bg-[var(--text)] hover:text-white";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${
        isFeatured ? featuredStyles : defaultStyles
      } ${className}`}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      {label}
    </button>
  );
}
