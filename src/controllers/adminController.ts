import { Request, Response } from "express";
import { CreateAdminService } from "../services/createAdminService";

const createAdminService = new CreateAdminService();

class AdminController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const message = await createAdminService.execute({ name, email, password });

    return res.json(message);
  }
}

export { AdminController };
