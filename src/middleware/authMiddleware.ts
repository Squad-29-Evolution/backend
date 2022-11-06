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
    verify(token, "2cbe207a-befb-42f9-8cd7-64a8af8f1994");
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
