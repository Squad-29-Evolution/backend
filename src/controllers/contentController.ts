import { Request, Response } from "express";
import { CreateContentService } from "../services/ContentsServices/createContentService";
import { DeleteContentService } from "../services/ContentsServices/deleteContentService";
import { GetAllContentService } from "../services/ContentsServices/getAllContentService";
import { GetUniqueContentService } from "../services/ContentsServices/getUniqueContentService";
import { UpdateContentService } from "../services/ContentsServices/updateContentService";

const createContentService = new CreateContentService();
const getAllContentService = new GetAllContentService();
const getUniqueContentService = new GetUniqueContentService();
const deleteContentService = new DeleteContentService();
const updateContentService = new UpdateContentService();

class ContentController {
  async updateContent(req: Request, res: Response) {
    const { description, link, title, type, trail_id, category_id } = req.body;
    const { id } = req.params;

    try {
      const message = await updateContentService.execute({
        id,
        description,
        link,
        title,
        type,
        trail_id,
        category_id,
      });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async deleteContent(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const message = await deleteContentService.execute({ id });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async getUnique(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const message = await getUniqueContentService.execute({ id });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const message = await getAllContentService.execute();

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async create(req: Request, res: Response) {
    const { description, link, title, type, trail_id, category_id } = req.body;

    try {
      const message = await createContentService.execute({
        description,
        link,
        title,
        type,
        trail_id,
        category_id,
      });

      return res.json(message);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }
}

export { ContentController };
