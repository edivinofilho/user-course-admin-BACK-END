import format from "pg-format"
import { client } from "../database";
import { QueryResult } from "pg";
import { CoursesArray, TCourse } from "../interfaces/courses.interfaces";
import { courseArraySchema, courseResultSchema } from "../schemas";

const create = async (payload: string): Promise<TCourse> => {
    const queryString: string = format(
        'INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: QueryResult = await client.query(queryString);

    return queryResult.rows[0];
};

const read = async(): Promise<CoursesArray> => {
    const queryResult: courseResultSchema =  await client.query('SELECT * FROM "courses";');

    return courseArraySchema.parse(queryResult.rows);
};

export default { create, read };