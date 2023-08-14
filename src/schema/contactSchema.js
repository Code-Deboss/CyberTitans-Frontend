import { z } from "zod";

export const contactSchema = z.object({
    name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({message: "Invalid email"}),
    subject: z.string().optional(),
    message: z.string().min(2, {message: "Message must have at least 2 characters"})
})