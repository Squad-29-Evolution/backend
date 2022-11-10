import { Request, Response } from "express";
import { client } from "../prisma/client";
import { CreateStudyTrailService } from "../services/createStudyTrailService";
import { UpdateStudyTrailService } from "../services/updateStudyTrailService";
import { GetAllStudyTrailsService } from "../services/getAllStudyTrailsService";
import { DeleteStudyTrail } from "../services/deleteStudyTrailByIdService";

const createStudyTrailService = new CreateStudyTrailService();
const updateStudyTrailService = new UpdateStudyTrailService();
const getAllStudyTrailsService = new GetAllStudyTrailsService();
const deleteStudyTrailByIdService = new DeleteStudyTrail();

class StudyTrailController {
  async create(req: Request, res: Response) {
    const { name, description, hours } = req.body;

    const studyTrail = await createStudyTrailService.execute({
      name,
      description,
      hours,
    });

    return res.json(studyTrail);
  }

  async update(req: Request, res: Response) {
    const { name, description, hours } = req.body;
    const { id } = req.params;

    const studyTrail = await updateStudyTrailService.execute({
      id,
      name,
      description,
      hours,
    });

    return res.json(studyTrail);
  }

  async getAll(req: Request, res: Response) {
    const studyTrails = await getAllStudyTrailsService.execute();

    return res.json(studyTrails);
  }

  async deleteStudyTrailByIdService(req: Request, res: Response) {
    const { id } = req.params;

    const studyTrail = await deleteStudyTrailByIdService.execute({ id });

    return res.json(studyTrail);
  }
}

export { StudyTrailController };
