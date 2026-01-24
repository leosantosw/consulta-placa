"use client";

import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border border-primary/30 bg-primary text-white shadow-[0_10px_24px_rgba(37,99,235,0.2)] hover:bg-primary/90 hover:shadow-[0_12px_28px_rgba(37,99,235,0.26)] focus-visible:ring-primary",
  ghost:
    "border border-border bg-background/80 text-text hover:border-primary/40 hover:text-text"
};

export default function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex cursor-pointer items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
