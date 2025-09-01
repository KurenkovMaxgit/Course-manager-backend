import { Schema, InferSchemaType, model } from "mongoose";

const workloadSchema = new Schema(
  {
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher", required: true },
    group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    type: { type: Schema.Types.ObjectId, ref: "LessonType", required: true },
    hours: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        delete ret.__v;
      },
    },
  },
);

export const WorkloadModel = model("Workload", workloadSchema);
export type Workload = InferSchemaType<typeof workloadSchema>;
