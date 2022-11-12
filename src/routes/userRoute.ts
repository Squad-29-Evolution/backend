import { Router } from "express";
import { UserController } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/users/create", userController.create);
userRouter.post("/users/login", userController.login);
userRouter.get("/users/:id", userController.getUserById);
userRouter.get("/users", userController.getAllUsers);
userRouter.put("/users/:id", authMiddleware, userController.updateUserById);
userRouter.delete("/users/:id", authMiddleware, userController.deleteUserById);
userRouter.post("/validatetoken", userController.checkToken);
