import { Schema, InferSchemaType, model } from "mongoose";

export type UserRole = "admin";

const userSchema = new Schema(
  {
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ["admin"], required: true, default: "admin" },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        delete ret.__v;
        delete ret.password;
      },
    },
  },
);

export const UserModel = model("User", userSchema);
export type User = InferSchemaType<typeof userSchema>;
