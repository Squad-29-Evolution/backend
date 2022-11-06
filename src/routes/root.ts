import { Request, Response, Router } from "express";
import { UserController } from "../controllers/userController";

const root = Router();

const userController = new UserController();

root.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

root.post("/users/create", userController.create);

export default root;
