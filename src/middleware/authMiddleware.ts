import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { User, UserModel, UserRole } from "#models/user.js";
import mongoose from "mongoose";
// const JWT_SECRET = process.env.JWT_SECRET || "";

export interface JwtRequest extends Request {
  user?: {
    email: string;
    role: UserRole;
  };
}

export const authentication = (
  req: JwtRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json("No authorization header found");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json("No token found");
  }

  try {
    const JWT_SECRET = process.env.JWT_SECRET || "";
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded as User;
    next();
  } catch (error) {
    return res.status(401).json("Invalid token");
  }
};

export function authorizeRoles(allowedRoles: UserRole[]) {
  return (req: JwtRequest, res: Response, next: NextFunction) => {
    const user = req.user;

    if (user && !allowedRoles.includes(user.role)) {
      return res.status(403).json({
        message: `Forbidden, you are a ${user.role} and this service is only available for ${allowedRoles}`,
      });
    }

    next();
  };
}

export const generateToken = (_id: mongoose.Types.ObjectId, role: UserRole) => {
  const JWT_SECRET = process.env.JWT_SECRET || "";
  return jwt.sign({ _id, role }, JWT_SECRET, { expiresIn: "1h" });
};
