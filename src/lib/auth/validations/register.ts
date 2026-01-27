import { z } from "zod";

const allowedEmailDomains = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "yahoo.com.br",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "aol.com",
  "yandex.com",
  "mail.com",
  "gmx.com",
  "fastmail.com",
  "hey.com",
  "tutanota.com",
  "tuta.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "ig.com.br",
  "ibest.com.br",
  "globo.com",
  "r7.com",
  "zipmail.com.br",
  "oi.com.br",
  "oi.com",
  "uai.com.br",
  "superig.com.br",
  "pop.com.br",
  "telefonica.net.br",
  "itelefonica.com.br",
  "igmail.com.br"
]);

const isAllowedEmailDomain = (email: string) => {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) {
    return false;
  }
  return allowedEmailDomains.has(domain);
};

export const registerInputSchema = z.object({
  name: z.string().trim().min(2, { message: "Informe seu nome completo." }),
  email: z
    .string()
    .trim()
    .email({ message: "Informe um e-mail válido." })
    .refine((value) => isAllowedEmailDomain(value), {
      message: "Domínio de e-mail não permitido."
    }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres." }),
  turnstile_token: z.string().min(1, { message: "Captcha ausente." })
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

export const registerFormSchema = registerInputSchema
  .extend({
    confirmPassword: z
      .string()
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres." }),
    company: z.string().max(0).optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não conferem."
  });

export type RegisterFormInput = z.infer<typeof registerFormSchema>;

export const parseRegisterInput = (value: unknown): RegisterInput | null => {
  const result = registerInputSchema.safeParse(value);
  return result.success ? result.data : null;
};

export const parseRegisterFormInput = (
  value: unknown
): RegisterFormInput | null => {
  const result = registerFormSchema.safeParse(value);
  return result.success ? result.data : null;
};
