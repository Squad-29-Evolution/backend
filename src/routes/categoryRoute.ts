import { Router } from "express";
import { CategoryController } from "../controllers/categoryController";

export const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.post("/category/create", categoryController.create);
categoryRouter.put("/category/:id", categoryController.updateCategory);
categoryRouter.delete("/category/:id", categoryController.deleteCategory);
categoryRouter.get("/category/", categoryController.getAll);
categoryRouter.get("/category/:id", categoryController.getUnique);
