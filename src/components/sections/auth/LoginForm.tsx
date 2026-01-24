"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginFormSchema } from "@/lib/auth/validation";
import { useAuth } from "@/hooks/useAuth";

type FormState = {
  email: string;
  password: string;
};

const initialState: FormState = {
  email: "",
  password: ""
};

export default function LoginForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const { status, login } = useAuth();
  const router = useRouter();

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

    const parsed = loginFormSchema.safeParse(formState);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0]
      });
      return;
    }

    setErrors({});
    const result = await login(parsed.data);
    if (!result.ok) {
      if (result.status === 401) {
        toast.warning(result.error ?? "Email ou senha inválidos.");
      } else {
        toast.error(result.error ?? "Não foi possível autenticar.");
      }
      return;
    }
    router.push("/dashboard");
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
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
          Senha
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text">
          <LockKeyhole className="h-4 w-4 text-text-secondary" />
          <input
            type="password"
            name="password"
            placeholder="Sua senha"
            value={formState.password}
            onChange={handleChange("password")}
            className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
          />
        </div>
        {errors.password ? (
          <p className="text-xs text-rose-500">{errors.password}</p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full cursor-pointer rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
      >
        {status === "submitting" ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
