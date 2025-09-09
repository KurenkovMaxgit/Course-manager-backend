import { Router } from "express";
import * as userController from "#controllers/userController.js";
import { queryParser } from "#middleware/queryParser.js";
/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - password
 *         - email
 *         - role
 *       properties:
 *         password:
 *           type: string
 *           description: The user`s password
 *         email:
 *           type: string
 *           description: The user`s email
 *         role:
 *           type: number
 *           description: The user`s role
 */
const router = Router();
/**
 * @openapi
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post("/", userController.createUser);
/**
 * @openapi
 * /user:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
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
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/User"
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Error retrieving users
 */
router.get("/", queryParser, userController.getAllUsers);
/**
 * @openapi
 * /user/{id}:
 *   get:
 *     summary: Get user by id
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The user by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Error retrieving user
 */
router.get("/:id", userController.getUserById);
/**
 * @openapi
 * /user/{id}:
 *   put:
 *     summary: Update user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *               $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/:id", userController.updateUserById);
/**
 * @openapi
 * /user/{id}:
 *   delete:
 *     summary: Update user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.delete("/:id", userController.deleteUserById);

export default router;
