import format from "pg-format";
import { client } from "../database";
import {
  UserCourseListArray,
  UserCourseListResult,
  User,
  UserResult,
  UsersArray,
} from "../interfaces";

import { hashSync } from "bcryptjs";
import { userResultSchema, usersArraySchema } from "../schemas/user.schemas";
import { AppError } from "../errors";

const create = async (payload: User): Promise<User | any> => {
  payload.password = hashSync(payload.password, 10);

  const queryString: string = format(
    'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: UserResult = await client.query(queryString);
  const user: User = queryResult.rows[0];

  return userResultSchema.parse(user);
};

const read = async (): Promise<UsersArray> => {
  const queryResult: UserResult = await client.query('SELECT * FROM "users";');
  return usersArraySchema.parse(queryResult.rows);
};

const readUserCourses = async (
  userId: number
): Promise<UserCourseListArray> => {
  const queryString: string = format(`
    SELECT 
        "c".id AS "courseId",
        "c".name AS "courseName",
        "c".description AS "courseDescription",
        "uc".active AS "userActiveInCourse",
        "u".id AS "userId",
        "u".name AS "userName"
    FROM "users" AS "u" 
    JOIN "userCourses" "uc" ON "uc"."userId" = "u".id 
    JOIN "courses" "c" ON "uc"."courseId" = "c".id
    WHERE "u".id = $1;
    `);

  const queryResult: UserCourseListResult = await client.query(queryString, [
    userId,
  ]);

  if (queryResult.rowCount === 0) {
    throw new AppError("No course found", 404);
  }

  return queryResult.rows;
};

export default { create, read, readUserCourses };
