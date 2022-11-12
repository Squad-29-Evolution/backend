import { Router } from "express";
import { ContentController } from "../controllers/contentController";
import { adminMiddleware } from "../middleware/adminMiddleware";

export const contentRouter = Router();

const contentController = new ContentController();

contentRouter.post(
  "/contents/create",
  adminMiddleware,
  contentController.create,
);
contentRouter.get("/contents", contentController.getAll);
contentRouter.get("/contents/:id", contentController.getUnique);
contentRouter.delete(
  "/contents/:id",
  adminMiddleware,
  contentController.deleteContent,
);
contentRouter.put(
  "/contents/:id",
  adminMiddleware,
  contentController.updateContent,
);
