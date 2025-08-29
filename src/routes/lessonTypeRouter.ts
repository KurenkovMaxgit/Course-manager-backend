import { Router } from "express";
import * as lessonTypeController from "#controllers/lessonTypeController.js";

const router = Router();

router.post("/lessonType", lessonTypeController.createLessonType);
router.get("/lessonType", lessonTypeController.getAllLessonTypes);
router.get("/lessonType/:id", lessonTypeController.getLessonTypeById);
router.put("/lessonType/:id", lessonTypeController.updateLessonTypeById);
router.delete("/lessonType/:id", lessonTypeController.deleteLessonTypeById);

export default router;
