import { Router } from "express";
import ProgressController from "../controllers/progressController";

export const progressRouter = Router();

progressRouter.post("/dates/salve", ProgressController.salveLastLogin);
progressRouter.get("/dates/all/:uuid", ProgressController.getAllLogins);
progressRouter.get("/ranking/all", ProgressController.getTopRanking);
