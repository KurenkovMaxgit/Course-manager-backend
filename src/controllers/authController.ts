import { NextFunction, Request, Response } from "express";
import * as userRepository from "#repositories/userRepository.js";
import { User } from "#models/user.js";
import { generateToken } from "#middleware/authMiddleware.js";
import bcrypt from "bcryptjs";
import { comparePasswords, hashPassword } from "#utils/passwordUtils.js";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }
    const isValid = await comparePasswords(password, user.password);
    if (isValid) {
      const token = generateToken(user._id, user.role);
      res.status(200).json({ token: token });
    } else throw new Error("Invalid password");

    next();
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
};

export const registerUser = async (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const input = req.body;
    const user = await userRepository.getUserByEmail(input.email);
    if (user) throw new Error("User already exist");
    hashPassword(input.password);
    input.password = await bcrypt.hash(input.password, 10);
    const newUser = await userRepository.createUser(input);

    res.status(200).json({ user: newUser });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
};
