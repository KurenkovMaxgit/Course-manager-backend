import { Request, Response } from "express";
import * as userRepository from "#repositories/userRepository.js";
import { User } from "#models/user.js";
import { generateToken } from "#middleware/authMiddleware.js";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }
    const token = generateToken(user._id, user.role);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
};
