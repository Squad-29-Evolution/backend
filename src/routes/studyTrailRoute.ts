import { Router } from "express";
import { StudyTrailController } from "../controllers/studyTrailController";

export const studyTrailRouter = Router();

const studyTrailController = new StudyTrailController();

studyTrailRouter.post("/trail/create", studyTrailController.create);
studyTrailRouter.put("/trail/:id", studyTrailController.update);
studyTrailRouter.get("/trail", studyTrailController.getAll);
studyTrailRouter.delete(
  "/trail/:id",
  studyTrailController.deleteStudyTrailByIdService,
);
