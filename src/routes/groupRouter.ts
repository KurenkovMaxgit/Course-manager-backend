import { Router } from "express";
import * as groupController from "#controllers/groupController.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();

router.post("/", groupController.createGroup);
router.get("/", queryParser, groupController.getAllGroups);
router.get("/:id", groupController.getGroupById);
router.put("/:id", groupController.updateGroupById);
router.delete("/:id", groupController.deleteGroupById);

export default router;
