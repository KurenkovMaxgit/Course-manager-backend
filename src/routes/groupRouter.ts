import { Router } from "express";
import * as groupController from "#controllers/groupController.js";
import { queryParser } from "#middleware/queryParser.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     Group:
 *       type: object
 *       required:
 *         - specialty
 *         - faculty
 *         - studentCount
 *       properties:
 *         specialty:
 *           type: string
 *           description: The group`s specialty
 *         faculty:
 *           type: string
 *           description: The group`s faculty
 *         studentCount:
 *           type: number
 *           description: The group`s studentCount
 */
const router = Router();
/**
 * @openapi
 * /group:
 *   post:
 *     summary: Create a new group
 *     tags:
 *       - Groups
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Group'
 *     responses:
 *       201:
 *         description: The created group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Group'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post("/", groupController.createGroup);
/**
 * @openapi
 * /group:
 *   get:
 *     summary: Get all groups
 *     tags:
 *       - Groups
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
 *         description: A list of groups
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Group"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error retrieving groups
 */
router.get("/", queryParser, groupController.getAllGroups);
/**
 * @openapi
 * /group/{id}:
 *   get:
 *     summary: Get group by id
 *     tags:
 *       - Groups
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The group ID
 *     responses:
 *       200:
 *         description: The group by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Group"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Group not found
 *       500:
 *         description: Error retrieving group
 */
router.get("/:id", groupController.getGroupById);
/**
 * @openapi
 * /group/{id}:
 *   put:
 *     summary: Update group
 *     tags:
 *       - Groups
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The group ID
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *               $ref: '#/components/schemas/Group'
 *     responses:
 *       200:
 *         description: Updated group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Group"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", groupController.updateGroupById);
/**
 * @openapi
 * /group/{id}:
 *   delete:
 *     summary: Update group
 *     tags:
 *       - Groups
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The group ID
 *     responses:
 *       200:
 *         description: Updated group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Group"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", groupController.deleteGroupById);

export default router;
