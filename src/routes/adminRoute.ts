import { Router } from "express";
import { AdminController } from "../controllers/adminController";

export const adminRouter = Router();

const adminController = new AdminController();

adminRouter.post("/admin/create", adminController.create);
