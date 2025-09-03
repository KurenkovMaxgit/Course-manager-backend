import { Router } from "express";
import * as groupController from "#controllers/groupController.js";
import { authentication } from "#middleware/authMiddleware.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();
router.use(authentication);


router.post("/group", groupController.createGroup);
router.get("/group", queryParser, groupController.getAllGroups);
router.get("/group/:id", groupController.getGroupById);
router.put("/group/:id", groupController.updateGroupById);
router.delete("/group/:id", groupController.deleteGroupById);

export default router;
