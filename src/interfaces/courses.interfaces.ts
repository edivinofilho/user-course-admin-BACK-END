import { z } from "zod";
import { courseArraySchema, courseSchema } from "../schemas";

type tCourse = z.infer<typeof courseSchema>;
type coursesArray = z.infer<typeof courseArraySchema>;

export { tCourse, coursesArray };