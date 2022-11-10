import { Router } from "express";
import { UserController } from "../controllers/userController";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/users/create", userController.create);
userRouter.post("/users/login", userController.login);
userRouter.get("/users/:id", userController.getUserById);
