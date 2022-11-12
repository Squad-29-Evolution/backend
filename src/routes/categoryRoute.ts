import { Router } from "express";
import { CategoryController } from "../controllers/categoryController";
import { adminMiddleware } from "../middleware/adminMiddleware";

export const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.post(
  "/category/create",
  adminMiddleware,
  categoryController.create,
);
categoryRouter.put(
  "/category/:id",
  adminMiddleware,
  categoryController.updateCategory,
);
categoryRouter.delete(
  "/category/:id",
  adminMiddleware,
  categoryController.deleteCategory,
);
categoryRouter.get("/category/", categoryController.getAll);
categoryRouter.get("/category/:id", categoryController.getUnique);
