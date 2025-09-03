import { Router } from "express";
import * as subjectController from "#controllers/subjectController.js";
import { authentication } from "#middleware/authMiddleware.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();
router.use(authentication);


router.post("/subject", subjectController.createSubject);
router.get("/subject", queryParser, subjectController.getAllSubjects);
router.get("/subject/:id", subjectController.getSubjectById);
router.put("/subject/:id", subjectController.updateSubjectById);
router.delete("/subject/:id", subjectController.deleteSubjectById);

export default router;
