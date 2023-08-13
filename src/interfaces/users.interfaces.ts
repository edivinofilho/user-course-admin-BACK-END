import { z } from "zod";
import { userSchema } from "../schemas";

type tUser = z.infer<typeof userSchema>;

export { tUser };