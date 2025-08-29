import { Request, Response } from "express";
import * as subjectRepository from "#repositories/subjectRepository.js";
import { Subject } from "#models/subject.js";

export const createSubject = async (
  req: Request<{}, {}, Subject>,
  res: Response,
) => {
  try {
    const newSubject = await subjectRepository.createSubject(req.body);
    res.status(201).json(newSubject);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await subjectRepository.getAllSubjects();
    res.status(200).json(subjects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving subjects",
    });
  }
};

export const getSubjectById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const subject = await subjectRepository.getSubjectById(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.status(200).json(subject);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving subject",
    });
  }
};

export const updateSubjectById = async (
  req: Request<{ id: string }, {}, Subject>,
  res: Response,
) => {
  try {
    const updatedSubject = await subjectRepository.updateSubjectById(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedSubject);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const deleteSubjectById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const subject = await subjectRepository.deleteSubjectById(req.params.id);
    res.status(200).json(subject);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error deleting subject",
    });
  }
};
