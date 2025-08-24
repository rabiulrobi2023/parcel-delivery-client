import z from "zod";

export const loginFormSchema = z.object({
  email: z.email({ error: "Input must be email type" }),
  password: z
    .string()
    .min(6, { error: "Passowrd must be at least 6 characters" })
    .max(16, { error: "Password must be maximum 16 characters" }),
});
