"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { recoveryFormSchema } from "@/lib/auth/validations/recovery";
import { Turnstile } from "next-turnstile";

type FormState = {
  email: string;
};

const initialState: FormState = {
  email: ""
};

export default function PasswordRecoveryForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const handleChange = (field: keyof FormState) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!turnstileToken) {
      toast.error("Confirme que você não é um robô.");
      setStatus("idle");
      return;
    }

    const parsed = recoveryFormSchema.safeParse(formState);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0]
      });
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/recuperar-senha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          ...parsed.data,
          turnstile_token: turnstileToken
        })
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        if (response.status === 404) {
          toast.warning(payload?.error ?? "Email não encontrado.");
        } else {
          toast.error(payload?.error ?? "Não foi possível enviar o link.");
        }
        setStatus("idle");
        return;
      }

      toast.success(payload?.message ?? "Enviamos o link de recuperação.");
      setStatus("idle");
    } catch {
      toast.error("Não foi possível enviar o link.");
      setStatus("idle");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
          E-mail
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text">
          <Mail className="h-4 w-4 text-text-secondary" />
          <input
            type="email"
            name="email"
            placeholder="voce@exemplo.com"
            value={formState.email}
            onChange={handleChange("email")}
            className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
          />
        </div>
        {errors.email ? (
          <p className="text-xs text-rose-500">{errors.email}</p>
        ) : null}
      </div>
      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onVerify={setTurnstileToken}
        onError={() => setTurnstileToken("")}
        onExpire={() => setTurnstileToken("")}
        theme="auto"
      />
      <button
        type="submit"
        disabled={status === "submitting" || !turnstileToken}
        className="w-full cursor-pointer rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        {status === "submitting" ? "Enviando..." : "Enviar link"}
      </button>
    </form>
  );
}
