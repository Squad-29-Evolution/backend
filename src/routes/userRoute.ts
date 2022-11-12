import { Router } from "express";
import { UserController } from "../controllers/userController";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/users/create", userController.create);
userRouter.post("/users/login", userController.login);
userRouter.get("/users/:id", userController.getUserById);
userRouter.get("/users", userController.getAllUsers);
userRouter.put("/users/:id", userController.updateUserById);
userRouter.delete("/users/:id", userController.deleteUserById);
userRouter.post("/validatetoken", userController.checkToken);
