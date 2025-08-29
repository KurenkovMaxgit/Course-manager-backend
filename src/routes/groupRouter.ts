import { Router } from "express";
import * as groupController from "#controllers/groupController.js";

const router = Router();

router.post("/group", groupController.createGroup);
router.get("/group", groupController.getAllGroups);
router.get("/group/:id", groupController.getGroupById);
router.put("/group/:id", groupController.updateGroupById);
router.delete("/group/:id", groupController.deleteGroupById);

export default router;
