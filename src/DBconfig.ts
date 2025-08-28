import mongoose from "mongoose";

export const DB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
};
