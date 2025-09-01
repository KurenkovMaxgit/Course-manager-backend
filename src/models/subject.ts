import { Schema, InferSchemaType, model } from "mongoose";

const subjectSchema = new Schema(
  {
    name: { type: String, required: true }, // eg. Math/English
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        delete ret.__v;
      },
    },
  },
);

export const SubjectModel = model("Subject", subjectSchema);
export type Subject = InferSchemaType<typeof subjectSchema>;
