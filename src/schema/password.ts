import { z } from "zod";

export const changePasswordSchema = z.object({
  newPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  repeatPassword: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type changePassword = z.infer<typeof changePasswordSchema>;
