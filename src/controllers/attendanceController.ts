import { Request, Response } from "express";
import AttendanceService from "../services/attendanceService";

class AttendanceController {
  static async salveTraill(req: Request, res: Response) {
    try {
      const { user_id, trail_id } = req.body;
      const salvedtrail = await AttendanceService.salveTraill(
        user_id,
        trail_id,
      );

      res.status(203).json(salvedtrail);
    } catch (error) {
      res.status(500).json({ error: "true", message: "error" });
    }
  }

  static async removeTrail(req: Request, res: Response) {
    const { user_id, trail_id } = req.body;
    try {
      const trail = await AttendanceService.removeTrail(user_id, trail_id);
      res.status(200).json({ message: "sucess delete" });
    } catch (error) {
      res.status(500).json({ error: "true", message: "error" });
    }
  }

  static async salveConcludedCourse(req: Request, res: Response) {
    const { user_id, trail_id, content_id } = req.body;
    try {
      const salved = await AttendanceService.salveConcludedCourse(
        user_id,
        trail_id,
        content_id,
      );

      res.status(203).json(salved);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }
}

export default AttendanceController;
