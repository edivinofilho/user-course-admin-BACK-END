import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(50).nonempty(), 
    email: z.string().max(50).nonempty(),
    password: z.string().max(120).nonempty(),
    admin: z.boolean().default(false)
});

const userCreate = userSchema.omit({ id: true});

const userResult = userSchema.omit({password: true});

export { userSchema, userCreate, userResult };