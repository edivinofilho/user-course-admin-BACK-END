import { z } from "zod";
import { userSchema } from "../schemas";
import { QueryResult } from "pg";
import {
  userCoursesListArraySchema,
  userCoursesListSchema,
  userResultSchema,
  usersArraySchema,
} from "../schemas/user.schemas";

type User = z.infer<typeof userSchema>;

type UserCreate = z.infer<typeof userSchema>;
type UserReturn = z.infer<typeof userResultSchema>;
type UsersArray = z.infer<typeof usersArraySchema>;
type UserResult = QueryResult<User>;

type UserCourseList = z.infer<typeof userCoursesListSchema>;
type UserCourseListArray = z.infer<typeof userCoursesListArraySchema>;
type UserCourseListResult = QueryResult<UserCourseList>;

export {
  User,
  UserCreate,
  UserResult,
  UserReturn,
  UsersArray,
  UserCourseList,
  UserCourseListArray,
  UserCourseListResult,
};
