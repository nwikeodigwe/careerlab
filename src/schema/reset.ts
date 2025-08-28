import { z } from "zod";

export const resetSchema = z.object({
  email: z
    .string()
    .min(3, "Email address must be at least 3 characters long")
    .pipe(z.email("This is not a valid email")),
});

export type Reset = z.infer<typeof resetSchema>;
