import { Router } from "express";
import * as authController from "#controllers/authController.js";
import { authentication, authorizeRoles } from "#middleware/authMiddleware.js";

const router = Router();
/**
 * @openapi
 * /login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *       200:
 *         description: The created token
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *       401:
 *         description: User does not exist
 *       500:
 *         description: Invalid password
 */
router.post("/login", authController.loginUser);
/**
 * @openapi
 * /register:
 *   post:
 *     summary: Register user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              role:
 *                type: string
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                role:
 *                  type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Invalid password
 */
router.post(
  "/register",
  authentication,
  authorizeRoles(["admin"]),
  authController.registerUser,
);

export default router;
