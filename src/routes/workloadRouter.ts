import { Router } from "express";
import * as workloadController from "#controllers/workloadController.js";
import { authentication } from "#middleware/authMiddleware.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();

router.post("/", workloadController.createWorkload);
router.get("/", queryParser, workloadController.getAllWorkloads);
router.get("/:id", workloadController.getWorkloadById);
router.put("/:id", workloadController.updateWorkloadById);
router.delete("/:id", workloadController.deleteWorkloadById);

export default router;
