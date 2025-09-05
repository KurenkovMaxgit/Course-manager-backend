import { Router } from "express";
import * as lessonTypeController from "#controllers/lessonTypeController.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();

router.post("/", lessonTypeController.createLessonType);
router.get("/", queryParser, lessonTypeController.getAllLessonTypes);
router.get("/:id", lessonTypeController.getLessonTypeById);
router.put("/:id", lessonTypeController.updateLessonTypeById);
router.delete("/:id", lessonTypeController.deleteLessonTypeById);

export default router;
