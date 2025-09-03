import { Router } from "express";
import * as userController from "#controllers/userController.js";
import { authentication } from "#middleware/authMiddleware.js";
import { queryParser } from "#middleware/queryParser.js";

const router = Router();
router.use(authentication);

router.post("/user", userController.createUser);
router.get("/user", queryParser, userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUserById);
router.delete("/user/:id", userController.deleteUserById);

export default router;
