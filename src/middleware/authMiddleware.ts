import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "Token is missing" });
  }

  const [, token] = authToken.split(" ");

  try {
    //@ts-ignore
    verify(token, process.env.SECRET);
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
