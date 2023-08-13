import format from "pg-format";
import { client } from "../database";
import { tUser } from "../interfaces";
// import { userResult } from "../schemas";
import { QueryResult } from "pg";
import { userSchema } from "../schemas";

const create = async (payload:string): Promise<tUser | any> => {
    const queryString: string = format(
        'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
        ); 

        const queryResult: QueryResult = await client.query(queryString);

        const user: tUser = queryResult.rows[0];
        return userSchema.parse(user);
};

export default { create };