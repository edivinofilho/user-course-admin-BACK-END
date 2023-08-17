import { z } from "zod";

const userCoursesSchema = z.object({
    id: z.number().positive(),
    active: z.boolean().default(true),
    userId: z.number().positive(),
    courseId: z.number().positive()
});

const userCourseInfoSchema = z.object({
    userId: z.number().positive(),
    userName: z.string(),
    courseId: z.number().positive(),
    courseName: z.string(),
    courseDescription: z.string(),
    userActiveInCourse: z.boolean()
});

const userCourseRegisterSchema = userCoursesSchema.omit({ id: true});

const usersCourseInfoArraySchema = z.array(userCourseInfoSchema);

export { userCoursesSchema, userCourseRegisterSchema,userCourseInfoSchema, usersCourseInfoArraySchema };