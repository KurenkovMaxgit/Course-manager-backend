import { Teacher, TeacherModel } from "#models/teacher.js";

//TODO: Add validation where it`s needed

export const createTeacher = async (input: Teacher) => {
  return await TeacherModel.create(input);
};

export const getAllTeachers = async () => {
  return await TeacherModel.find();
};

export const getTeacherById = async (id: string) => {
  return await TeacherModel.find({ _id: id });
};

export const updateTeacherById = async (id: string, input: Teacher) => {
  return TeacherModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteTeacherById = async (id: string) => {
  return await TeacherModel.findByIdAndDelete(id);
};
