import { QueryResult } from "pg";
import { z } from "zod";
import { tCourse } from "../interfaces";

const courseSchema = z.object ({
    id: z.number(),
    name: z.string().max(15),
    description: z.string()
});

const courseCreate = courseSchema.omit({id: true});
const courseArraySchema = z.array(courseSchema);
type courseResultSchema = QueryResult<tCourse>;

export { courseSchema, courseCreate, courseArraySchema, courseResultSchema };