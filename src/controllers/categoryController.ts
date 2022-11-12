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
    const idToNumber = parseInt(id);

    try {
      const message = await getUniqueCategoryService.execute({
        id: idToNumber,
      });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const message = await getAllCategoryService.execute();

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    const idToNumber = parseInt(id);

    try {
      const message = await deleteCategoryService.execute({
        id: idToNumber,
      });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async updateCategory(req: Request, res: Response) {
    const { name } = req.body;
    const { id } = req.params;
    const idToNumber = parseInt(id);

    try {
      const message = await updateCategoryService.execute({
        id: idToNumber,
        name,
      });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    try {
      const message = await createCategoryService.execute({
        name,
      });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }
}

export { CategoryController };
