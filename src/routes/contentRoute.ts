import { Router } from "express";
import { ContentController } from "../controllers/contentController";

export const contentRouter = Router();

const contentController = new ContentController();

contentRouter.post("/contents/create", contentController.create);
contentRouter.get("/contents", contentController.getAll);
contentRouter.get("/contents/:id", contentController.getUnique);
contentRouter.delete("/contents/:id", contentController.deleteContent);
contentRouter.put("/contents/:id", contentController.updateContent);
