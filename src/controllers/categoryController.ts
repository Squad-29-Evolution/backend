import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CategoryServices/createCategoryService";
import { UpdateCategoryService } from "../services/CategoryServices/updateCategoryService";

const createCategoryService = new CreateCategoryService();
const updateCategoryService = new UpdateCategoryService();

class CategoryController {
  async updateCategory(req: Request, res: Response) {
    const { name } = req.body;
    const { id } = req.params;
    const message = await updateCategoryService.execute({
      id,
      name,
    });

    return res.json(message);
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    const message = await createCategoryService.execute({
      name,
    });

    return res.json(message);
  }
}

export { CategoryController };
