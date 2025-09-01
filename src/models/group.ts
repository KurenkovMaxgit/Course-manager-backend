import { Schema, InferSchemaType, model } from "mongoose";

const groupSchema = new Schema(
  {
    specialty: { type: String, required: true },
    faculty: { type: String, required: true },
    studentCount: { type: Number, required: true },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        delete ret.__v;
      },
    },
  },
);

export const GroupModel = model("Group", groupSchema);
export type Group = InferSchemaType<typeof groupSchema>;
