import { Router } from "express";
import { root } from "./rootRoute";
import { userRouter } from "./UserRoute";
import { progressRouter } from "./progressRoute";
import { contentRouter } from "./contentRoute";

export const routes = Router();

routes.use(root);
routes.use(userRouter);
routes.use(contentRouter);
routes.use(progressRouter);
