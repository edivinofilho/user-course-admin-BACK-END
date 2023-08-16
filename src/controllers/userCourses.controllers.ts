import { Request, Response } from "express";
import { tUser, userCourses, userReturn, usersArray } from "../interfaces";
import userCourseServices from "../services/userCourse.services";
import { userCourseRegister } from "../interfaces/userCourses.interfaces";

const signIn = async (req:Request, res: Response): Promise <any> => {
    const courseId: string = req.params.courseId;
    const userId: string = req.params.userId;

    const payload: userCourseRegister = { 
        courseId: Number(courseId),
        userId: Number(userId),
        active: true
    };

    const register: userCourseRegister = await userCourseServices.signIn(payload);

    return res.status(201).json({ message: "User successfully vinculed to course" })
}; 

const inactivateUser = async (req: Request, res: Response): Promise<any> => {
    const courseId: string = req.params.courseId;
    const userId: string = req.params.userId;

    const payload: userCourseRegister = { 
        courseId: Number(courseId),
        userId: Number(userId),
        active: false
    };

    const deleteUser: userCourseRegister = await userCourseServices.signIn(payload);

    return res.status(204).json()
};

// const read = async (req: Request, res: Response): Promise<any> => {
//     const courseId: string = req.params.courseId

//     console.log(res.locals.decoded)
//     const userCourses: any = await userCourseServices.read();

//     return res.status(200).json(userCourses);
// }

export default { signIn , inactivateUser };