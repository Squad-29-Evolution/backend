import { Request, Response } from "express";
import { CreateAdminService } from "../services/createAdminService";

const createAdminService = new CreateAdminService();

class AdminController {
  async create(req: Request, res: Response) {
    const { name, email, password, picture } = req.body;

    try {
      const message = await createAdminService.execute({
        name,
        email,
        password,
        picture,
      });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }
}

export { AdminController };
