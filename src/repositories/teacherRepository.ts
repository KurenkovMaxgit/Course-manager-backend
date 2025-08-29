import { Teacher, TeacherModel } from "#models/teacher.js";
import { phoneValidation } from "#utils/validation.js";

export const createTeacher = async (input: Teacher) => {
  if (phoneValidation(input.phone)) return await TeacherModel.create(input);
};

export const getAllTeachers = async () => {
  return await TeacherModel.find();
};

export const getTeacherById = async (id: string) => {
  return await TeacherModel.findOne({ _id: id });
};

export const updateTeacherById = async (id: string, input: Teacher) => {
  if (phoneValidation(input.phone))
    return TeacherModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteTeacherById = async (id: string) => {
  return await TeacherModel.findByIdAndDelete(id);
};
