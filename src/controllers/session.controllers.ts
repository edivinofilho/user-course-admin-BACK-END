import { Request, Response } from "express";
import { sessionServices } from "../services";
import { iToken } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    // console.log(req.body)
    const token: iToken = await sessionServices.create(req.body);

    return res.status(201).json({ token });
};

export default { create };