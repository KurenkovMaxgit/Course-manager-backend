import { Router } from "express";
import * as authController from "#controllers/authController.js";
import { authentication, authorizeRoles } from "#middleware/authMiddleware.js";

const router = Router();

router.post("/login", authController.loginUser);
router.post(
  "/register",
  authentication,
  authorizeRoles(["admin"]),
  authController.registerUser,
);

export default router;
