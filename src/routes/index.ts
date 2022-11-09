import { Router } from "express";
import { root } from "./rootRoute";
import { userRouter } from "./UserRoute";
import { progressRouter } from "./progressRoute";

export const routes = Router();

routes.use(root);
routes.use(userRouter);
routes.use(progressRouter);
