import { Router } from "express";
import * as teacherController from "#controllers/teacherController.js";

const router = Router();

router.post("/teacher", teacherController.createTeacher);
router.get("/teacher", teacherController.getAllTeachers);
router.get("/teacher/:id", teacherController.getTeacherById);
router.put("/teacher/:id", teacherController.updateTeacherById);
router.delete("/teacher/:id", teacherController.deleteTeacherById);

export default router;
