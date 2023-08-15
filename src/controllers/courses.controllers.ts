import { Request, Response } from "express";
import { coursesServices } from "../services";
import { tCourse } from "../interfaces/courses.interfaces";


const create = async (req: Request, res: Response): Promise<Response | void> => {
    const course: tCourse = await coursesServices.create(req.body);

    return res.status(201).json(course);
};

const read = async (req: Request, res: Response): Promise<Response | void> => {
    const courses: Array<tCourse> = await coursesServices.read();

    return res.status(200).json(courses);
};

export default { create, read };