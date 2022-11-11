import { Router } from "express";
import AttendanceController from "../controllers/attendanceController";

export const attendanceRoute = Router();

attendanceRoute.post("/salvenewtrail", AttendanceController.salveTraill);
attendanceRoute.delete("/deletetrail", AttendanceController.removeTrail);
attendanceRoute.post(
  "/salveconcludedcourse",
  AttendanceController.salveConcludedCourse,
);
