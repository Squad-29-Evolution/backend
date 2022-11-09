import { Router } from "express";
import ProgressController from "../controllers/progressController";

export const progressRouter = Router();

progressRouter.post("/dates/salve", ProgressController.salveLastLogin);
progressRouter.post("/dates/all", ProgressController.getAllLogins);
