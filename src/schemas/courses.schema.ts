import { QueryResult } from "pg";
import { z } from "zod";
import { TCourse } from "../interfaces";

const courseSchema = z.object ({
    id: z.number(),
    name: z.string().max(15),
    description: z.string()
});

const courseCreate = courseSchema.omit({id: true});
const courseArraySchema = z.array(courseSchema);
type courseResultSchema = QueryResult<TCourse>;

export { courseSchema, courseCreate, courseArraySchema, courseResultSchema };