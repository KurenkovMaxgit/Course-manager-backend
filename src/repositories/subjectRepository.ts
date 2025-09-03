import { Subject, SubjectModel } from "#models/subject.js";
import { FilterQuery, SortOrder } from "mongoose";

export const createSubject = async (input: Subject) => {
  return await SubjectModel.create(input);
};

export const getAllSubjects = async (
  limit: number,
  page: number,
  filter: FilterQuery<Subject> = {},
  sort: Record<string, SortOrder> = { createdAt: -1 },
) => {
  return await SubjectModel.find(filter)
    .limit(limit)
    .skip((page - 1) * limit)
    .sort(sort);
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
