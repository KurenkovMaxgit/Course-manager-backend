import { Router } from "express";
import * as lessonTypeController from "#controllers/lessonTypeController.js";
import { authentication } from "#middleware/authMiddleware.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();
router.use(authentication);


router.post("/lessonType", lessonTypeController.createLessonType);
router.get("/lessonType", queryParser, lessonTypeController.getAllLessonTypes);
router.get("/lessonType/:id", lessonTypeController.getLessonTypeById);
router.put("/lessonType/:id", lessonTypeController.updateLessonTypeById);
router.delete("/lessonType/:id", lessonTypeController.deleteLessonTypeById);

export default router;
