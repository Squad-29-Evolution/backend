import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CategoryServices/createCategoryService";
import { DeleteCategoryService } from "../services/CategoryServices/deleteCategoryService";
import { UpdateCategoryService } from "../services/CategoryServices/updateCategoryService";

const createCategoryService = new CreateCategoryService();
const updateCategoryService = new UpdateCategoryService();
const deleteCategoryService = new DeleteCategoryService();

class CategoryController {
  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    const message = await deleteCategoryService.execute({
      id,
    });

    return res.json(message);
  }

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
