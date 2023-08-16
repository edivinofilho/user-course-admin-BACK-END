import { courseSchema, courseCreate, courseArraySchema, courseResultSchema } from "./courses.schema";
import { userCreate, userResultSchema, userSchema, usersArraySchema } from "./user.schemas";
import { sessionSchema, sessionLogin } from "./session.schema";
import { userCoursesSchema, userCourseRegisterSchema } from "./userCourses.schema";

export { userSchema, userCreate, userResultSchema, courseSchema, courseCreate, sessionSchema, sessionLogin, usersArraySchema, courseArraySchema, courseResultSchema, userCoursesSchema, userCourseRegisterSchema };