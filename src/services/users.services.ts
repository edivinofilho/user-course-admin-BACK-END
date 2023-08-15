import format from "pg-format";
import { client } from "../database";
import { tUser, userResult, userReturn, usersArray } from "../interfaces";
import { userSchema } from "../schemas";
import { hashSync } from "bcryptjs";
import { userResultSchema, usersArraySchema } from "../schemas/user.schemas";
// import { userResult } from "../schemas";


const create = async (payload:tUser): Promise<tUser | any> => {
    payload.password = hashSync(payload.password, 10);

    const queryString: string = format(
        'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
        ); 

    const queryResult: userResult = await client.query(queryString);
    const user: tUser = queryResult.rows[0];
    
    return userResultSchema.parse(user);
};

const read = async(): Promise<usersArray> => {
    const queryResult: userResult = await client.query('SELECT * FROM "users";');
    return usersArraySchema.parse(queryResult.rows);
};

export default { create, read };