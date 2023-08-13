import { z } from "zod";
import { courseSchema } from "../schemas";

type tCourse = z.infer<typeof courseSchema>;

export { tCourse };