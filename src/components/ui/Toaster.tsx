"use client";

import { Toaster } from "sonner";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      expand
      toastOptions={{
        className: "rounded-2xl border border-border bg-card text-text",
        descriptionClassName: "text-text-secondary",
      }}
    />
  );
}
