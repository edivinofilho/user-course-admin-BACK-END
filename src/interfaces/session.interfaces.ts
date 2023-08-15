import { z } from "zod";
import { sessionSchema } from "../schemas";

type tSession = z.infer<typeof sessionSchema>;

interface iToken {
    token: string;
}

export { tSession, iToken };