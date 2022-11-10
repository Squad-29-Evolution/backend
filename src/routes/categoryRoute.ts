import { Router } from "express";
import { CategoryController } from "../controllers/categoryController";

export const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.post("/category/create", categoryController.create);
categoryRouter.put("/category/:id", categoryController.updateCategory);
