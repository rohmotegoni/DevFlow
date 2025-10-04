import { email, z } from "zod";

export const SignInSchema = z.object({
    email: z.string().min(1 , {message: "Email is required"}).email({message: "Please provide a valid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters long"}).max(100, {message: "Password cannot be longer than 100 characters"})
})


export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot be longer than 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),

  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot be longer than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide a valid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, {
      message: "Password cannot be longer than 100 characters",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});
