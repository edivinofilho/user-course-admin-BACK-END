import { z } from "zod";

const courseSchema = z.object ({
    id: z.number(),
    name: z.string().max(15).nonempty(),
    description: z.string().nonempty()
});

const courseCreate = courseSchema.omit({id: true});

export { courseSchema, courseCreate };