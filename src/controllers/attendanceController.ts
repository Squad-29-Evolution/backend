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

  static async getSalvedTrails(req: Request, res: Response) {
    const { user_id } = req.params;
    try {
      const data = await AttendanceService.getSalvedTrails(user_id);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
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

  static async getPercentConcludedCourse(req: Request, res: Response) {
    const { user_id, trail_id, category_id } = req.params;
    const trail_idInt = parseInt(trail_id);
    const category_idInt = parseInt(category_id);

    try {
      const percent = await AttendanceService.getPercentConcludedCourse(
        user_id,
        trail_idInt,
        category_idInt,
      );

      res.status(203).json(percent);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  static async getPercentConcludedTrail(req: Request, res: Response) {
    const { user_id, trail_id, category_id } = req.params;
    const trail_idInt = parseInt(trail_id);

    try {
      const percent = await AttendanceService.getPercentConcludedTrail(
        user_id,
        trail_idInt,
      );

      res.status(203).json(percent);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  static async getAllConcludedCourseInTrail(req: Request, res: Response) {
    const { user_id, trail_id } = req.params;
    const trail_idInt = parseInt(trail_id);

    try {
      const courses = await AttendanceService.getAllConcludedCourseInTrail(
        user_id,
        trail_idInt,
      );

      return res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  static async getUniqueConcludedCourseInTrail(req: Request, res: Response) {
    const { user_id, trail_id, content_id } = req.params;
    const content_idInt = parseInt(content_id);
    const trail_idInt = parseInt(trail_id);

    try {
      const courses = await AttendanceService.getUniqueConcludedCourseInTrail(
        user_id,
        trail_idInt,
        content_idInt,
      );

      return res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }
}

export default AttendanceController;
