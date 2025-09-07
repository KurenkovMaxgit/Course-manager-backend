import { Teacher, TeacherModel } from "#models/teacher.js";
import { phoneValidation } from "#utils/validation.js";
import { FilterQuery, SortOrder } from "mongoose";

export const createTeacher = async (input: Teacher) => {
  phoneValidation(input.phone);
  return await TeacherModel.create(input);
};

export const getAllTeachers = async (
  limit?: number,
  page?: number,
  filter: FilterQuery<Teacher> = {},
  sort: Record<string, SortOrder> = { _id: -1 },
) => {
  let query = TeacherModel.find(filter).sort(sort);

  if (typeof limit === "number" && typeof page === "number") {
    query = query.skip((page) * limit).limit(limit);
  }

  return await query;
};

export const getTeacherById = async (id: string) => {
  return await TeacherModel.findOne({ _id: id });
};

export const updateTeacherById = async (id: string, input: Teacher) => {
  phoneValidation(input.phone);
  return TeacherModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteTeacherById = async (id: string) => {
  return await TeacherModel.findByIdAndDelete(id);
};
