import { Role } from "@/constants/role";
import z from "zod";

export const registrationFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { error: "Name must be at least 2 charaters" })
      .max(40, { error: "Name must be maximum 40 characters" }),
    email: z.email({ error: "Input must be email type" }),
    password: z
      .string()
      .min(6, { error: "Passowrd must be at least 6 characters" })
      .max(16, { error: "Password must be maximum 16 characters" }),
    confirmPassword: z
      .string()
      .min(6, { error: "Passowrd must be at least 6 characters" })
      .max(16, { error: "Password must be maximum 16 characters" }),
    phone: z
      .string()
      .trim()
      .regex(/^01[3-9]\d{8}$/, "Invalid mobile number format"),
    address: z.string(),
    role: z.enum([Role.sender, Role.receiver], {
      error: "Role must be required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Password does not matched",
  });
