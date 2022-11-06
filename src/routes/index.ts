import { Router } from "express";
import { root } from "./rootRoute";
import { userRouter } from "./UserRoute";

export const routes = Router();

routes.use(root);
routes.use(userRouter);
