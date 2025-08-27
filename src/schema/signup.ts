import { z } from "zod";

export const signupSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z
    .string()
    .min(3, "Email address must be at least 3 characters long")
    .pipe(z.email("This is not a valid email")),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type Signup = z.infer<typeof signupSchema>;
