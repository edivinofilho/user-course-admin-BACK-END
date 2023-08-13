import format from "pg-format"
import { client } from "../database";
import { QueryResult } from "pg";
import { tCourse } from "../interfaces/courses.interfaces";

const create = async (payload: string): Promise<tCourse> => {
    const queryString: string = format(
        'INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: QueryResult = await client.query(queryString);

    return queryResult.rows[0];
};

export default { create };