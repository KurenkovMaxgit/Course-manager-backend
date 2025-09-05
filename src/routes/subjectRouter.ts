import { Router } from "express";
import * as subjectController from "#controllers/subjectController.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();

router.post("/", subjectController.createSubject);
router.get("/", queryParser, subjectController.getAllSubjects);
router.get("/:id", subjectController.getSubjectById);
router.put("/:id", subjectController.updateSubjectById);
router.delete("/:id", subjectController.deleteSubjectById);

export default router;
