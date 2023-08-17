import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(120),
  admin: z.boolean().default(false),
});

const userCreate = userSchema.omit({ id: true });

const userResultSchema = userSchema.omit({ password: true });
const usersArraySchema = z.array(userResultSchema);
const userUpdate = userCreate.partial();

const userCoursesListSchema = z.object({
  courseId: z.number().positive(),
  courseName: z.string(),
  courseDescription: z.string(),
  userActiveInCourse: z.boolean(),
  userId: z.number().positive(),
});

const userCoursesListArraySchema = z.array(userCoursesListSchema);

export {
  userSchema,
  userCreate,
  userResultSchema,
  userUpdate,
  usersArraySchema,
  userCoursesListSchema,
  userCoursesListArraySchema,
};
