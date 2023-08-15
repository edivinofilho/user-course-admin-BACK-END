import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const validateUserPermission = (req: Request, res: Response, next: NextFunction): void => {
    const { admin, id } = res.locals.decoded;
    
    if (!admin) {
        throw new AppError("Insufficient permission", 403)
    } ;

    return next();
};

export { validateUserPermission };