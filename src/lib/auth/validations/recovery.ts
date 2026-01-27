import { z } from "zod";

export const recoveryFormSchema = z.object({
  email: z.string().trim().email({ message: "Informe um e-mail válido." }),
  turnstile_token: z.string().min(1, { message: "Captcha ausente." })
});

export type RecoveryFormInput = z.infer<typeof recoveryFormSchema>;

export const parseRecoveryInput = (
  value: unknown
): RecoveryFormInput | null => {
  const result = recoveryFormSchema.safeParse(value);
  return result.success ? result.data : null;
};
