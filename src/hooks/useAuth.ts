"use client";

import { useState } from "react";

type AuthResult = {
  ok: boolean;
  status: number;
  error?: string;
};

type LoginInput = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const login = async (input: LoginInput): Promise<AuthResult> => {
    setStatus("submitting");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(input)
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setStatus("idle");
        return {
          ok: false,
          status: response.status,
          error: payload?.error ?? "Não foi possível autenticar."
        };
      }

      setStatus("idle");
      return { ok: true, status: response.status };
    } catch {
      setStatus("idle");
      return { ok: false, status: 500, error: "Não foi possível autenticar." };
    }
  };

  const logout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "same-origin"
    });
  };

  return { status, login, logout };
};
