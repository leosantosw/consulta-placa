"use client";

import type { ButtonHTMLAttributes } from "react";
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

  const featuredStyles = "bg-[var(--featured)] text-white hover:opacity-90 border-2 border-[var(--featured)] dark:bg-[var(--primary)] dark:border-[var(--primary)] dark:hover:bg-[var(--primary)]/90";
  const defaultStyles =
    "border-2 border-[var(--text)] bg-transparent text-[var(--text)] hover:border-[var(--featured)] hover:bg-[var(--featured)] hover:text-white dark:border-[var(--text-secondary)] dark:hover:border-[var(--text)] dark:hover:bg-[var(--featured)]";

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
