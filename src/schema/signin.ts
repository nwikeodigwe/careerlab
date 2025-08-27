import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .min(3, "Email address must be at least 3 characters long")
    .pipe(z.email("This is not a valid email")),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type Signin = z.infer<typeof signinSchema>;
