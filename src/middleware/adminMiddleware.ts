import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { Role } from "@prisma/client";
import { client } from "../prisma/client";

interface IJWTData {
  user: string;
  ia: number;
  exp: number;
  sub: string;
}

export async function adminMiddleware(
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
    const payload = verify(token, process.env.SECRET) as IJWTData;

    //@ts-ignore
    const { id } = payload;
    const user = await client.users.findFirst({
      where: { id },
      select: {
        role: true,
      },
    });

    if (!user) {
      throw new Error("User invalid");
    }

    if (user.role == Role.USER) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}
