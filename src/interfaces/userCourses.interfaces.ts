import { z } from "zod";
import {
  userCourseRegisterSchema,
  userCoursesSchema,
  userCourseInfoSchema,
  usersCourseInfoArraySchema,
} from "../schemas";
import { QueryResult } from "pg";

type UserCourses = z.infer<typeof userCoursesSchema>;
type UserCourseResult = QueryResult<UserCourses>;
type UserCourseRegister = z.infer<typeof userCourseRegisterSchema>;

type UserCourseInfo = z.infer<typeof userCourseInfoSchema>;
type UserCourseInfoArray = z.infer<typeof usersCourseInfoArraySchema>;
type UserCourseInfoResult = QueryResult<UserCourseInfo>;

export {
  UserCourses,
  UserCourseResult,
  UserCourseRegister,
  UserCourseInfo,
  UserCourseInfoArray,
  UserCourseInfoResult,
};
