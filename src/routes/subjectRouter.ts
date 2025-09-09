import { Router } from "express";
import * as subjectController from "#controllers/subjectController.js";
import { queryParser } from "#middleware/queryParser.js";
/**
 * @openapi
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The subject`s name
 */
const router = Router();
/**
 * @openapi
 * /subject:
 *   post:
 *     summary: Create a new subject
 *     tags:
 *       - Subjects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       201:
 *         description: The created subject
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post("/", subjectController.createSubject);
/**
 * @openapi
 * /subject:
 *   get:
 *     summary: Get all subjects
 *     tags:
 *       - Subjects
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
 *         description: A list of subjects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Subject"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error retrieving subjects
 */
router.get("/", queryParser, subjectController.getAllSubjects);
/**
 * @openapi
 * /subject/{id}:
 *   get:
 *     summary: Get subject by id
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject ID
 *     responses:
 *       200:
 *         description: The subject by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Subject"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Subject not found
 *       500:
 *         description: Error retrieving subject
 */
router.get("/:id", subjectController.getSubjectById);
/**
 * @openapi
 * /subject/{id}:
 *   put:
 *     summary: Update subject
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject ID
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *               $ref: '#/components/schemas/Subject'
 *     responses:
 *       200:
 *         description: Updated subject
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Subject"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", subjectController.updateSubjectById);
/**
 * @openapi
 * /subject/{id}:
 *   delete:
 *     summary: Update subject
 *     tags:
 *       - Subjects
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject ID
 *     responses:
 *       200:
 *         description: Updated subject
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Subject"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", subjectController.deleteSubjectById);

export default router;
