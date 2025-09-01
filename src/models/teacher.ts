import { Schema, InferSchemaType, model } from "mongoose";

const teacherSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    middleName: { type: String, required: true },
    phone: { type: String, required: true },
    experience: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        delete ret.__v;
      },
    },
  },
);

export const TeacherModel = model("Teacher", teacherSchema);
export type Teacher = InferSchemaType<typeof teacherSchema>;
