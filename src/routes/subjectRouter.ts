import { Router } from "express";
import * as subjectController from "#controllers/subjectController.js";

const router = Router();

router.post("/subject", subjectController.createSubject);
router.get("/subject", subjectController.getAllSubjects);
router.get("/subject/:id", subjectController.getSubjectById);
router.put("/subject/:id", subjectController.updateSubjectById);
router.delete("/subject/:id", subjectController.deleteSubjectById);

export default router;
