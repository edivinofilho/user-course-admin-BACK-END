import { z } from "zod";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50), 
    email: z.string().email().max(50), 
    password: z.string().max(120),
    admin: z.boolean().default(false)
});

const userCreate = userSchema.omit({ id: true});

const userResultSchema = userSchema.omit({ password: true });
const usersArraySchema = z.array(userResultSchema);
const userUpdate = userCreate.partial();

export { userSchema, userCreate, userResultSchema, userUpdate, usersArraySchema };