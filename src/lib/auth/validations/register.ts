import { z } from "zod";

export const registerInputSchema = z.object({
  name: z.string().trim().min(2, { message: "Informe seu nome completo." }),
  email: z.string().trim().email({ message: "Informe um e-mail válido." }),
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
