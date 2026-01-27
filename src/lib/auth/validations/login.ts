import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().trim().email({ message: "Informe um e-mail válido." }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres." })
});

export type LoginFormInput = z.infer<typeof loginFormSchema>;

export const parseLoginInput = (value: unknown): LoginFormInput | null => {
  const result = loginFormSchema.safeParse(value);
  return result.success ? result.data : null;
};
