import { Schema, InferSchemaType, model } from 'mongoose';

const lessonTypeSchema = new Schema({
  name: {type: String, required: true} // eg. lecture/practice
});

export const LessonTypeModel = model("LessonType", lessonTypeSchema);
export type LessonType = InferSchemaType<typeof lessonTypeSchema>;
