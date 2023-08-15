import { z } from "zod";

const sessionSchema = z.object({
    id: z.number().positive(),
    email: z.string().email().max(50), 
    password: z.string().max(120),
    admin: z.boolean().default(false)
});

const sessionLogin = sessionSchema.omit({ id: true, admin: true});

export { sessionSchema, sessionLogin };