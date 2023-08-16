import { z } from "zod";
import { userCourseRegisterSchema, userCoursesSchema } from "../schemas";
import { QueryResult } from "pg";

type userCourses = z.infer<typeof userCoursesSchema>; // 1 letra M!
type userCourseResult = QueryResult <userCourses>;
type userCourseRegister = z.infer<typeof userCourseRegisterSchema>


export { userCourses, userCourseResult, userCourseRegister };