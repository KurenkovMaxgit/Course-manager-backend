import { Schema, InferSchemaType, model } from "mongoose";

const teacherSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  middleName: { type: String, required: true },
  phone: { type: Number, required: true },
  experience: { type: String, required: true },
});

export const TeacherModel = model("Teacher", teacherSchema);
export type Teacher = InferSchemaType<typeof teacherSchema>;
