import { Router } from "express";
import * as teacherController from "#controllers/teacherController.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();

router.post("/", teacherController.createTeacher);
router.get("/", queryParser, teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacherById);
router.put("/:id", teacherController.updateTeacherById);
router.delete("/:id", teacherController.deleteTeacherById);

export default router;
