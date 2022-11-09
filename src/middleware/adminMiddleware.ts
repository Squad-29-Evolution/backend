import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { Role } from "@prisma/client";

interface IJWTData {
  user: string;
  ia: number;
  exp: number;
  sub: string;
}

export function adminMiddleware(
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
    const payload = verify(
      token,
      "2cbe207a-befb-42f9-8cd7-64a8af8f1994",
    ) as IJWTData;

    const user = JSON.parse(payload.user);

    if (user.role == Role.USER) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
