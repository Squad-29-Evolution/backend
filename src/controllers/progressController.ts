import { Request, Response } from "express";
import ProgressService from "../services/progressService";

class ProgressController {
  static async salveLastLogin(req: Request, res: Response) {
    const { uuid } = req.body;
    try {
      const date = await ProgressService.salveLastLogin(uuid);
      return res.status(203).json(date);
    } catch (error) {
      return res
        .status(404)
        .json({ error: true, message: "this user don´ts exist" });
    }
  }

  static async getAllLogins(req: Request, res: Response) {
    const { uuid } = req.body;
    try {
      const dates = await ProgressService.getAllLogins(uuid);
      return res.status(200).json(dates);
    } catch (error) {
      res.status(404).json({ error: true, message: "this user don´ts exist" });
    }
  }
}

export default ProgressController;
