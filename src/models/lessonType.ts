import { Schema, InferSchemaType, model } from "mongoose";

const lessonTypeSchema = new Schema(
  {
    name: { type: String, required: true }, // eg. lecture/practice
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        delete ret.__v;
      },
    },
  },
);

export const LessonTypeModel = model("LessonType", lessonTypeSchema);
export type LessonType = InferSchemaType<typeof lessonTypeSchema>;
