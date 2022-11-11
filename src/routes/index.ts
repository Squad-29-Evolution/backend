import { Router } from "express";
import { root } from "./rootRoute";
import { userRouter } from "./userRoute";
import { progressRouter } from "./progressRoute";
import { contentRouter } from "./contentRoute";
import { swaggerRoute } from "./swaggerRoute";
import { studyTrailRouter } from "./studyTrailRoute";
import { categoryRouter } from "./categoryRoute";
export const routes = Router();

routes.use(root);
routes.use(userRouter);
routes.use(contentRouter);
routes.use(progressRouter);
routes.use(swaggerRoute);
routes.use(studyTrailRouter);
routes.use(categoryRouter);
