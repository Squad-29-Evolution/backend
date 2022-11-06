import { Request, Response, Router } from "express";

const root = Router();

root.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

export { root };
