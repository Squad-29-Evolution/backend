import { Router } from "express";
import AttendanceController from "../controllers/attendanceController";
import { authMiddleware } from "../middleware/authMiddleware";

export const attendanceRoute = Router();

attendanceRoute.post(
  "/salvenewtrail",
  authMiddleware,
  AttendanceController.salveTraill,
);

attendanceRoute.get(
  "/getSalvedTrails/:user_id",
  authMiddleware,
  AttendanceController.getSalvedTrails,
);

attendanceRoute.delete(
  "/deletetrail",
  authMiddleware,
  AttendanceController.removeTrail,
);
attendanceRoute.post(
  "/salveconcludedcourse",
  authMiddleware,
  AttendanceController.salveConcludedCourse,
);
attendanceRoute.get(
  "/getallconcludedcourse/:user_id&:trail_id",
  authMiddleware,
  AttendanceController.getAllConcludedCourseInTrail,
);
attendanceRoute.get(
  "/getuniqueconcludedcourse/:user_id&:trail_id&:content_id",
  authMiddleware,
  AttendanceController.getUniqueConcludedCourseInTrail,
);
attendanceRoute.get(
  "/getpercentconcludedtrail/:user_id&:trail_id",
  authMiddleware,
  AttendanceController.getPercentConcludedTrail,
);
attendanceRoute.get(
  "/getpercentconcludedcourse/:user_id&:trail_id&:category_id",
  authMiddleware,
  AttendanceController.getPercentConcludedCourse,
);
