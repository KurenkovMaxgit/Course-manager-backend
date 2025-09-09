import { Router } from "express";
import * as lessonTypeController from "#controllers/lessonTypeController.js";
import { queryParser } from "#middleware/queryParser.js";
/**
 * @openapi
 * components:
 *   schemas:
 *     LessonType:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The lesson Type`s name
 */
const router = Router();
/**
 * @openapi
 * /lessonType:
 *   post:
 *     summary: Create a new lesson Type
 *     tags:
 *       - Lesson Types
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LessonType'
 *     responses:
 *       201:
 *         description: The created lesson Type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LessonType'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post("/", lessonTypeController.createLessonType);
/**
 * @openapi
 * /lessonType:
 *   get:
 *     summary: Get all lesson Types
 *     tags:
 *       - Lesson Types
 *     responses:
 *       200:
 *         description: A list of lesson Types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/LessonType"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error retrieving lesson Types
 */
router.get("/", queryParser, lessonTypeController.getAllLessonTypes);
/**
 * @openapi
 * /lessonType/{id}:
 *   get:
 *     summary: Get lesson Type by id
 *     tags:
 *       - Lesson Types
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The lesson Type ID
 *     responses:
 *       200:
 *         description: The lesson Type by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/LessonType"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: LessonType not found
 *       500:
 *         description: Error retrieving lesson Type
 */
router.get("/:id", lessonTypeController.getLessonTypeById);
/**
 * @openapi
 * /lessonType/{id}:
 *   put:
 *     summary: Update lesson Type
 *     tags:
 *       - Lesson Types
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The lesson Type ID
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *               $ref: '#/components/schemas/LessonType'
 *     responses:
 *       200:
 *         description: Updated lesson Type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/LessonType"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", lessonTypeController.updateLessonTypeById);
/**
 * @openapi
 * /lessonType/{id}:
 *   delete:
 *     summary: Update lesson Type
 *     tags:
 *       - Lesson Types
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The lesson Type ID
 *     responses:
 *       200:
 *         description: Updated lesson Type
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/LessonType"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", lessonTypeController.deleteLessonTypeById);

export default router;
