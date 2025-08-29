import { Subject, SubjectModel } from "#models/subject.js";

export const createSubject = async (input: Subject) => {
  return await SubjectModel.create(input);
};

export const getAllSubjects = async () => {
  return await SubjectModel.find();
};

export const getSubjectById = async (id: string) => {
  return await SubjectModel.findOne({ _id: id });
};

export const updateSubjectById = async (id: string, input: Subject) => {
  return SubjectModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteSubjectById = async (id: string) => {
  return await SubjectModel.findByIdAndDelete(id);
};
