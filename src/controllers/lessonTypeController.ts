import { Request, Response } from "express";
import * as lessonTypeRepository from "#repositories/lessonTypeRepository.js";
import { LessonType } from "#models/lessonType.js";

export const createLessonType = async (
  req: Request<{}, {}, LessonType>,
  res: Response,
) => {
  try {
    const newLessonType = await lessonTypeRepository.createLessonType(req.body);
    res.status(201).json(newLessonType);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const getAllLessonTypes = async (req: Request, res: Response) => {
  try {
    const lessonTypes = await lessonTypeRepository.getAllLessonTypes();
    res.status(200).json(lessonTypes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Error retrieving lesson types",
    });
  }
};

export const getLessonTypeById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const lessonType = await lessonTypeRepository.getLessonTypeById(
      req.params.id,
    );
    if (!lessonType) {
      return res.status(404).json({ message: "LessonType not found" });
    }
    res.status(200).json(lessonType);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving lesson type",
    });
  }
};

export const updateLessonTypeById = async (
  req: Request<{ id: string }, {}, LessonType>,
  res: Response,
) => {
  try {
    const updatedLessonType = await lessonTypeRepository.updateLessonTypeById(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedLessonType);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const deleteLessonTypeById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const lessonType = await lessonTypeRepository.deleteLessonTypeById(
      req.params.id,
    );
    res.status(200).json(lessonType);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error deleting lesson type",
    });
  }
};
