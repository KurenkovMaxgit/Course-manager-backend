import { Request, Response } from "express";
import * as teacherRepository from "#repositories/teacherRepository.js";
import { Teacher, TeacherModel } from "#models/teacher.js";
import { ParsedQuery } from "#middleware/queryParser.js";

export const createTeacher = async (
  req: Request<{}, {}, Teacher>,
  res: Response,
) => {
  try {
    const newTeacher = await teacherRepository.createTeacher(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const { limit, page, filter, sort } = (req as any)
      .parsedQuery as ParsedQuery;
    const teachers = await teacherRepository.getAllTeachers(
      limit,
      page,
      filter,
      sort,
    );
    const totalCount = await TeacherModel.countDocuments(filter);
    res.status(200).json({items: teachers, total_count: totalCount});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving teachers",
    });
  }
};

export const getTeacherById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const teacher = await teacherRepository.getTeacherById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error retrieving teacher",
    });
  }
};

export const updateTeacherById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const updatedTeacher = await teacherRepository.updateTeacherById(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedTeacher);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Error ? error.message : "Bad request",
    });
  }
};

export const deleteTeacherById = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const teacher = await teacherRepository.deleteTeacherById(req.params.id);
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        error instanceof Error ? error.message : "Error deleting teacher",
    });
  }
};
