"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LockKeyhole, Mail, User } from "lucide-react";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import { registerFormSchema } from "@/lib/auth/validation";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  company: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  company: ""
};

export default function RegisterForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const router = useRouter();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

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

    const parsed = registerFormSchema.safeParse(formState);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
        company: fieldErrors.company?.[0]
      });
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          password: parsed.data.password
        })
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setStatus("error");
        if (response.status === 409) {
          toast.warning(payload?.error ?? "Email já cadastrado.");
        } else {
          toast.error(payload?.error ?? "Não foi possível criar o cadastro.");
        }
        return;
      }

      setStatus("success");
      setFormState(initialState);
      setErrors({});
      router.push("/dashboard");
    } catch {
      setStatus("error");
      toast.error("Não foi possível criar o cadastro. Tente novamente.");
    }
  };

  return (
    <div className="relative">
      <div className="mb-6 space-y-2">
        <h1 className="text-3xl font-semibold text-text">
          Crie sua conta
        </h1>
        <p className="mt-4 text-sm text-text-secondary">
          Já tem uma conta?{" "}
          <Link href="/login" className="font-semibold text-text">
            Entrar
          </Link>
        </p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="company"
          value={formState.company}
          onChange={handleChange("company")}
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
        />
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Nome
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text">
            <User className="h-4 w-4 text-text-secondary" />
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange("name")}
              placeholder="Seu nome"
              autoComplete="name"
              className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
            />
          </div>
          {errors.name ? (
            <p className="text-xs text-rose-500">{errors.name}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
            E-mail
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text">
            <Mail className="h-4 w-4 text-text-secondary" />
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange("email")}
              placeholder="voce@exemplo.com"
              autoComplete="email"
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
              value={formState.password}
              onChange={handleChange("password")}
              placeholder="Mínimo de 8 caracteres"
              autoComplete="new-password"
              className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
            />
          </div>
          {errors.password ? (
            <p className="text-xs text-rose-500">{errors.password}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
            Confirmar senha
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-text">
            <LockKeyhole className="h-4 w-4 text-text-secondary" />
            <input
              type="password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="Repita sua senha"
              autoComplete="new-password"
              className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
            />
          </div>
          {errors.confirmPassword ? (
            <p className="text-xs text-rose-500">
              {errors.confirmPassword}
            </p>
          ) : null}
        </div>
        <Button
          type="submit"
          className="w-full rounded-2xl"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Criando..." : "Criar conta"}
        </Button>
      </form>
    </div>
  );
}
