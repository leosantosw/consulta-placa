"use client";

import { ReactNode } from "react";
import SidebarNav from "./SidebarNav";

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  creditsSlot?: ReactNode;
};

export default function MobileSidebar({
  isOpen,
  onClose,
  creditsSlot,
}: MobileSidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className={`absolute inset-0 h-full w-full cursor-pointer bg-text/10 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className={`absolute left-0 top-0 flex h-full w-72 flex-col border-r border-border bg-card p-6 shadow-xl transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Menu
          </p>
        </div>
        {creditsSlot ? <div className="mb-6">{creditsSlot}</div> : null}
        <SidebarNav onNavigate={onClose} />
      </aside>
    </div>
  );
}
