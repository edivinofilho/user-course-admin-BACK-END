import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validateBodyMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    const validate = schema.parse(req.body);
    //adicionar aqui a autenticação de email
    req.body = validate;

    return next();
};

export { validateBodyMiddleware };