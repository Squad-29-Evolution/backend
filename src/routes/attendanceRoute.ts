import { Router } from "express";
import AttendanceController from "../controllers/attendanceController";

export const attendanceRoute = Router();

attendanceRoute.post("/salvenewtrail", AttendanceController.salveTraill);
attendanceRoute.delete("/deletetrail", AttendanceController.removeTrail);
attendanceRoute.post(
  "/salveconcludedcourse",
  AttendanceController.salveConcludedCourse,
);
attendanceRoute.get(
  "/getallconcludedcourse/:user_id&:trail_id",
  AttendanceController.getAllConcludedCourseInTrail,
);
attendanceRoute.get(
  "/getuniqueconcludedcourse/:user_id&:trail_id&:content_id",
  AttendanceController.getUniqueConcludedCourseInTrail,
);
attendanceRoute.get(
  "/getpercentconcludedtrail/:user_id&:trail_id",
  AttendanceController.getPercentConcludedTrail,
);
attendanceRoute.get(
  "/getpercentconcludedcourse/:user_id&:trail_id&:category_id",
  AttendanceController.getPercentConcludedCourse,
);
