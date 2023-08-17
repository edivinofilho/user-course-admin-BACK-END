import { z } from "zod";
import { sessionSchema } from "../schemas";

type Session = z.infer<typeof sessionSchema>;

interface iToken {
    token: string;
}

export { Session, iToken };