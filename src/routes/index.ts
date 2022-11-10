import { Router } from "express";
import { contentRouter } from "./contentRoute";
import { root } from "./rootRoute";
import { userRouter } from "./UserRoute";

export const routes = Router();

routes.use(root);
routes.use(userRouter);
routes.use(contentRouter);
