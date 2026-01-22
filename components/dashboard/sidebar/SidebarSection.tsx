import { ReactNode } from "react";

type SidebarSectionProps = {
  title: string;
  children: ReactNode;
};

export default function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}
