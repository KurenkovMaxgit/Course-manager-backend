import { Router } from "express";
import * as workloadController from "#controllers/workloadController.js";
import { authentication } from "#middleware/authMiddleware.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();
router.use(authentication);

router.post("/workload", workloadController.createWorkload);
router.get("/workload", queryParser, workloadController.getAllWorkloads);
router.get("/workload/:id", workloadController.getWorkloadById);
router.put("/workload/:id", workloadController.updateWorkloadById);
router.delete("/workload/:id", workloadController.deleteWorkloadById);

export default router;
