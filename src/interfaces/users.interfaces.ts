import { z } from "zod";
import { userSchema } from "../schemas";
import { QueryResult } from "pg";
import { userResultSchema, usersArraySchema } from "../schemas/user.schemas";

type tUser = z.infer<typeof userSchema>;

type userCreate = z.infer<typeof userSchema>;
type userReturn = z.infer<typeof userResultSchema>;
type usersArray = z.infer<typeof usersArraySchema>;
type userResult = QueryResult <tUser>;


export { tUser, userCreate, userResult, userReturn, usersArray };