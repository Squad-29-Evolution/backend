import { Router } from "express";
import { StudyTrailController } from "../controllers/studyTrailController";
import { adminMiddleware } from "../middleware/adminMiddleware";

export const studyTrailRouter = Router();

const studyTrailController = new StudyTrailController();

studyTrailRouter.post(
  "/trail/create",
  adminMiddleware,
  studyTrailController.create,
);
studyTrailRouter.put(
  "/trail/:id",
  adminMiddleware,
  studyTrailController.update,
);
studyTrailRouter.get("/trail", studyTrailController.getAll);
studyTrailRouter.get("/trail/:id", studyTrailController.getUnique);
studyTrailRouter.delete(
  "/trail/:id",
  adminMiddleware,
  studyTrailController.deleteStudyTrailByIdService,
);
