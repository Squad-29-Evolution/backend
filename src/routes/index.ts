import { Router } from "express";
import { root } from "./rootRoute";
import { userRouter } from "./UserRoute";
import { progressRouter } from "./progressRoute";
import { contentRouter } from "./contentRoute";
import { swaggerRoute } from "./swaggerRoute";
import { studyTrailRouter } from "./studyTrailRoute";

export const routes = Router();

routes.use(root);
routes.use(userRouter);
routes.use(contentRouter);
routes.use(progressRouter);
routes.use(swaggerRoute);
routes.use(studyTrailRouter);
