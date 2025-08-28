import { SubjectModel } from "#models/subject.js";

export const getAllSubjects = async () => {
  return await SubjectModel.find();
};

export const getSubjectById = async (id: string) => {
  return await SubjectModel.findOne({ _id: id });
};
