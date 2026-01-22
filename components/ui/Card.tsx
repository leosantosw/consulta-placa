"use client";

import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-[28px] border border-border bg-card/70 p-6 shadow-sm backdrop-blur ${className}`}
    >
      {title ? <h3 className="text-lg font-semibold text-text">{title}</h3> : null}
      <div className={title ? "mt-4" : ""}>{children}</div>
    </section>
  );
}
