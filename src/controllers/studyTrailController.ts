import { Request, Response } from "express";
import { client } from "../prisma/client";
import { CreateStudyTrailService } from "../services/createStudyTrailService";
import { UpdateStudyTrailService } from "../services/updateStudyTrailService";
import { GetAllStudyTrailsService } from "../services/getAllStudyTrailsService";
import { DeleteStudyTrail } from "../services/deleteStudyTrailByIdService";
import { GetUniqueStudyTrailService } from "../services/getUniqueStudyTrailService";

const createStudyTrailService = new CreateStudyTrailService();
const updateStudyTrailService = new UpdateStudyTrailService();
const getAllStudyTrailsService = new GetAllStudyTrailsService();
const getUniqueStudyTrailService = new GetUniqueStudyTrailService();
const deleteStudyTrailByIdService = new DeleteStudyTrail();

class StudyTrailController {
  async create(req: Request, res: Response) {
    const { name, description, hours, icon } = req.body;

    try {
      const studyTrail = await createStudyTrailService.execute({
        name,
        description,
        hours,
        icon,
      });

      return res.json(studyTrail);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async update(req: Request, res: Response) {
    const { name, description, hours, icon } = req.body;
    const { id } = req.params;

    try {
      const studyTrail = await updateStudyTrailService.execute({
        id,
        name,
        description,
        hours,
        icon,
      });

      return res.json(studyTrail);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const studyTrails = await getAllStudyTrailsService.execute();

      return res.json(studyTrails);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async getUnique(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const studyTrail = await getUniqueStudyTrailService.execute({ id });

      return res.json(studyTrail);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async deleteStudyTrailByIdService(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const studyTrail = await deleteStudyTrailByIdService.execute({ id });

      return res.json(studyTrail);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }
}

export { StudyTrailController };
