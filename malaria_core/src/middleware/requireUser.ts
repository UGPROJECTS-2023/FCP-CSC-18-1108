import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

function requireUser(req: Request, res: Response, next: NextFunction) {
  const user = res.locals.user;
  if (!user) {
    return res.status(StatusCodes.FORBIDDEN).json({Message: "You have to login first"})
  }
  return next();
}

export default requireUser;
