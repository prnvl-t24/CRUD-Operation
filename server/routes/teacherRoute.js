import express from "express";
import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
} from "../controller/teacherController.js";

const route = express.Router();

route.post("/teacher", createTeacher);
route.get("/teachers", getAllTeachers);
route.get("/teacher/:id", getTeacherById);
route.put("/update/teacher/:id", updateTeacher);
route.delete("/delete/teacher/:id", deleteTeacher);

export default route;
