import { Router } from "express";
import * as workloadController from "#controllers/workloadController.js";
import { queryParser } from "#middleware/queryParser.js";
/**
 * @openapi
 * components:
 *   schemas:
 *     Workload:
 *       type: object
 *       required:
 *         - teacher
 *         - group
 *         - subject
 *         - type
 *         - hours
 *         - price
 *       properties:
 *         teacher:
 *           type: string
 *           description: The workload`s teacher ID
 *         group:
 *           type: string
 *           description: The workload`s group ID
 *         subject:
 *           type: string
 *           description: The workload`s subject ID
 *         type:
 *           type: string
 *           description: The workload`s type ID
 *         hours:
 *           type: number
 *           description: The workload`s hours
 *         price:
 *           type: number
 *           description: The workload`s price
 */
const router = Router();
/**
 * @openapi
 * /workload:
 *   post:
 *     summary: Create a new workload
 *     tags:
 *       - Workloads
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workload'
 *     responses:
 *       201:
 *         description: The created workload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workload'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post("/", workloadController.createWorkload);
/**
 * @openapi
 * /workload:
 *   get:
 *     summary: Get all workloads
 *     tags:
 *       - Workloads
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: filter
 *         schema:
 *           type: object
 *       - in: query
 *         name: sort
 *         schema:
 *           type: integer
 *         required: false
 *         description: Max items per page
 *
 *     responses:
 *       200:
 *         description: A list of workloads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Workload"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error retrieving workloads
 */
router.get("/", queryParser, workloadController.getAllWorkloads);
/**
 * @openapi
 * /workload/{id}:
 *   get:
 *     summary: Get workload by id
 *     tags:
 *       - Workloads
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workload ID
 *     responses:
 *       200:
 *         description: The workload by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Workload"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Workload not found
 *       500:
 *         description: Error retrieving workload
 */
router.get("/:id", workloadController.getWorkloadById);
/**
 * @openapi
 * /workload/{id}:
 *   put:
 *     summary: Update workload
 *     tags:
 *       - Workloads
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workload ID
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *               $ref: '#/components/schemas/Workload'
 *     responses:
 *       200:
 *         description: Updated workload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Workload"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", workloadController.updateWorkloadById);
/**
 * @openapi
 * /workload/{id}:
 *   delete:
 *     summary: Update workload
 *     tags:
 *       - Workloads
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The workload ID
 *     responses:
 *       200:
 *         description: Updated workload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Workload"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", workloadController.deleteWorkloadById);

export default router;
