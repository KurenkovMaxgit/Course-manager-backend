import { Schema, InferSchemaType, model } from "mongoose";

const subjectSchema = new Schema({
  name: { type: String, required: true }, // eg. Math/English
});

export const SubjectModel = model("Subject", subjectSchema);
export type Subject = InferSchemaType<typeof subjectSchema>;
