import { z } from "zod";
import { courseArraySchema, courseSchema } from "../schemas";

type TCourse = z.infer<typeof courseSchema>;
type CoursesArray = z.infer<typeof courseArraySchema>;

export { TCourse, CoursesArray };