import { Router } from "express";
import * as teacherController from "#controllers/teacherController.js";
import { queryParser } from "#middleware/queryParser.js";
/**
 * @openapi
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - middleName
 *         - phone
 *         - experience
 *       properties:
 *         name:
 *           type: string
 *           description: The teacher`s name
 *         surname:
 *           type: string
 *           description: The teacher`s surname
 *         middleName:
 *           type: number
 *           description: The teacher`s middleName
 *         phone:
 *           type: number
 *           description: The teacher`s phone
 *         experience:
 *           type: number
 *           description: The teacher`s experience
 */
const router = Router();
/**
 * @openapi
 * /teacher:
 *   post:
 *     summary: Create a new teacher
 *     tags:
 *       - Teachers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       201:
 *         description: The created teacher
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post("/", teacherController.createTeacher);
/**
 * @openapi
 * /teacher:
 *   get:
 *     summary: Get all teachers
 *     tags:
 *       - Teachers
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
 *         description: A list of teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Teacher"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error retrieving teachers
 */
router.get("/", queryParser, teacherController.getAllTeachers);
/**
 * @openapi
 * /teacher/{id}:
 *   get:
 *     summary: Get teacher by id
 *     tags:
 *       - Teachers
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher ID
 *     responses:
 *       200:
 *         description: The teacher by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Teacher"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Error retrieving teacher
 */
router.get("/:id", teacherController.getTeacherById);
/**
 * @openapi
 * /teacher/{id}:
 *   put:
 *     summary: Update teacher
 *     tags:
 *       - Teachers
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher ID
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *               $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: Updated teacher
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Teacher"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", teacherController.updateTeacherById);
/**
 * @openapi
 * /teacher/{id}:
 *   delete:
 *     summary: Update teacher
 *     tags:
 *       - Teachers
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher ID
 *     responses:
 *       200:
 *         description: Updated teacher
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Teacher"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", teacherController.deleteTeacherById);

export default router;
