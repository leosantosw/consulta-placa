"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

const listeners = new Set<() => void>();
let media: MediaQueryList | null = null;
let mediaListener: ((event: MediaQueryListEvent) => void) | null = null;
let storageListener: ((event: StorageEvent) => void) | null = null;

const getSnapshot = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored) {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const notify = () => {
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  if (typeof window !== "undefined" && listeners.size === 1) {
    media = window.matchMedia("(prefers-color-scheme: dark)");
    mediaListener = () => notify();
    storageListener = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        notify();
      }
    };
    media.addEventListener("change", mediaListener);
    window.addEventListener("storage", storageListener);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && typeof window !== "undefined") {
      if (media && mediaListener) {
        media.removeEventListener("change", mediaListener);
      }
      if (storageListener) {
        window.removeEventListener("storage", storageListener);
      }
      media = null;
      mediaListener = null;
      storageListener = null;
    }
  };
};

export default function ThemeToggle() {
  const theme: Theme = useSyncExternalStore(subscribe, getSnapshot, () => "light");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    notify();
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="cursor-pointer inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text transition hover:border-primary"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
