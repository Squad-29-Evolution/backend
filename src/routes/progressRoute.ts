import { Router } from "express";
import ProgressController from "../controllers/progressController";
import { authMiddleware } from "../middleware/authMiddleware";

export const progressRouter = Router();

progressRouter.post(
  "/dates/salve",
  authMiddleware,
  ProgressController.salveLastLogin,
);
progressRouter.get(
  "/dates/all/:uuid",
  authMiddleware,
  ProgressController.getAllLogins,
);
progressRouter.get(
  "/ranking/all",
  authMiddleware,
  ProgressController.getTopRanking,
);
