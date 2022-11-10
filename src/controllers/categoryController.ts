import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CategoryServices/createCategoryService";

const createCategoryService = new CreateCategoryService();

class CategoryController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    const message = await createCategoryService.execute({
      name,
    });

    return res.json(message);
  }
}

export { CategoryController };
