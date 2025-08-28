import { LessonTypeModel } from "#models/lessonType.js";

export const getAllLessonTypes = async () => {
  return await LessonTypeModel.find();
};

export const getLessonTypeById = async (id: string) => {
  return await LessonTypeModel.findOne({ _id: id });
};
