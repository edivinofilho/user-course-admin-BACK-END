import format from "pg-format";
import { tUser, userCourseResult, userCourses, userResult, usersArray } from "../interfaces";
import { client } from "../database";
import { userCourseRegister } from "../interfaces/userCourses.interfaces";
import { AppError } from "../errors";

const signIn = async (payload: userCourseRegister): Promise<userCourses> => {
    const { userId, courseId } = payload;

    const userExists = await client.query(`SELECT * FROM "users" WHERE "id" = $1`, [userId]);

    const courseExists = await client.query(`SELECT * FROM "users" WHERE "id" = $1`, [courseId]);

    if(userExists.rowCount === 0 || courseExists.rowCount === 0){
        throw new AppError("User/course not found", 404)
    }
        
    const queryString: string = format(
        `
        INSERT INTO "userCourses" (%I)
        VALUES (%L) 
        RETURNING *;
        `,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: userCourseResult = await client.query(queryString);
 
    return queryResult.rows[0];
};

const inactivateUser = async (payload: userCourseRegister): Promise<userCourses> => {
    const { userId, courseId } = payload;

    const userExists = await client.query(`SELECT * FROM "users" WHERE "id" = $1`, [userId]);

    const courseExists = await client.query(`SELECT * FROM "users" WHERE "id" = $1`, [courseId]);

    if(userExists.rowCount === 0 || courseExists.rowCount === 0){
        throw new AppError("User/course not found", 404)
    }

    const queryString: string = format(
        `
        DELETE FROM "userCourses" 
        WHERE "userId" = $1
        AND "courseId" = $2;
        `,
        userId,
        courseId
    );

    const queryResult: userCourseResult = await client.query(queryString);
 
    return queryResult.rows[0];
};

const read = async(payload: userCourseRegister): Promise<usersArray> => {
    
    const { courseId } = payload;
    
    const queryString: string = format(`
    SELECT 
        "u".id AS "userId",
        "u".name AS "userName",
        "c".id AS "courseId",
        "c".name AS "courseName",
        "c".description AS "courseDescription",
        "uc".active AS "userActiveInCourse"
    FROM "users" AS "u" 
    JOIN "userCourses" "uc" ON "uc"."userId" = "u".id 
    JOIN "courses" "c" ON "uc"."courseId" = "c".id
    WHERE "c".id = $1;
    `);

    const queryResult: userResult = await client.query(queryString, [courseId]);

    return queryResult.rows;
}

export default { signIn, inactivateUser, read };