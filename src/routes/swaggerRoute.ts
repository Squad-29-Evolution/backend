import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";

export const swaggerRoute = Router();

swaggerRoute.use("/api-docs", swaggerUi.serve);
swaggerRoute.get("/api-docs", swaggerUi.setup(swaggerDocument));
