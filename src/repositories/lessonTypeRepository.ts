import { LessonType, LessonTypeModel } from "#models/lessonType.js";

export const createLessonType = async (input: LessonType) => {
  return await LessonTypeModel.create(input);
};

export const getAllLessonTypes = async () => {
  return await LessonTypeModel.find();
};

export const getLessonTypeById = async (id: string) => {
  return await LessonTypeModel.findOne({ _id: id });
};

export const updateLessonTypeById = async (id: string, input: LessonType) => {
  return LessonTypeModel.findByIdAndUpdate(id, input, { new: true });
};

export const deleteLessonTypeById = async (id: string) => {
  return await LessonTypeModel.findByIdAndDelete(id);
};
