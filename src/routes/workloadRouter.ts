import { Router } from "express";
import * as workloadController from "#controllers/workloadController.js";

const router = Router();

router.post("/workload", workloadController.createWorkload);
router.get("/workload", workloadController.getAllWorkloads);
router.get("/workload/:id", workloadController.getWorkloadById);
router.put("/workload/:id", workloadController.updateWorkloadById);
router.delete("/workload/:id", workloadController.deleteWorkloadById);

export default router;
