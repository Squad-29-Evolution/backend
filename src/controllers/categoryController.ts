import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CategoryServices/createCategoryService";
import { DeleteCategoryService } from "../services/CategoryServices/deleteCategoryService";
import { GetAllCategoryService } from "../services/CategoryServices/getAllCategoryService";
import { GetUniqueCategoryService } from "../services/CategoryServices/getUniqueCategoryService";
import { UpdateCategoryService } from "../services/CategoryServices/updateCategoryService";

const createCategoryService = new CreateCategoryService();
const updateCategoryService = new UpdateCategoryService();
const deleteCategoryService = new DeleteCategoryService();
const getAllCategoryService = new GetAllCategoryService();
const getUniqueCategoryService = new GetUniqueCategoryService();

class CategoryController {
  async getUnique(req: Request, res: Response) {
    const { id } = req.params;
    const message = await getUniqueCategoryService.execute({
      id,
    });

    return res.json(message);
  }

  async getAll(req: Request, res: Response) {
    const message = await getAllCategoryService.execute();

    return res.json(message);
  }

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