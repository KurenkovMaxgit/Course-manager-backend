import { Request, Response } from "express";
import * as userRepository from "#repositories/userRepository.js";
import { User } from "#models/user.js";
import { ParsedQuery } from "#middleware/queryParser.js";

export const createUser = async (req: Request<{}, {}, User>, res: Response) => {
  try {
    const newUser = await userRepository.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { limit, page, filter, sort } = (req as any)
      .parsedQuery as ParsedQuery;
    const users = await userRepository.getAllUsers(limit, page, filter, sort);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving users",
    });
  }
};

export const getUserById = async (
  req: Request<{ id: string }, {}, User>,
  res: Response,
) => {
  try {
    const user = await userRepository.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error retrieving user",
    });
  }
};

export const updateUserById = async (
  req: Request<{ id: string }, {}, User>,
  res: Response,
) => {
  try {
    const updatedUser = await userRepository.updateUserById(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const deleteUserById = async (
  req: Request<{ id: string }, {}, User>,
  res: Response,
) => {
  try {
    const user = await userRepository.deleteUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error deleting user",
    });
  }
};
