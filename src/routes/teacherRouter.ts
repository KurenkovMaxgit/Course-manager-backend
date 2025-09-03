import { Router } from "express";
import * as teacherController from "#controllers/teacherController.js";
import { authentication } from "#middleware/authMiddleware.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();
router.use(authentication);

router.post("/teacher", teacherController.createTeacher);
router.get("/teacher", queryParser, teacherController.getAllTeachers);
router.get("/teacher/:id", teacherController.getTeacherById);
router.put("/teacher/:id", teacherController.updateTeacherById);
router.delete("/teacher/:id", teacherController.deleteTeacherById);

export default router;
