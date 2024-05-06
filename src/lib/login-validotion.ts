import { z } from "zod";

export const validationLogin = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z
    .string()
    .min(10, { message: "email is required" })
    .email({ message: "Must be a valid email" }),
  key: z.string().min(3, { message: "Key is required" }),
  secret: z.string().min(3, { message: "Secret is required" }),
});

export type Scheme = z.infer<typeof validationLogin>;
