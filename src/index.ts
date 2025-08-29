import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "#DBconfig.js";
import groupRoutes from "#routes/groupRouter.js";
import lessonTypeRoutes from "#routes/lessonTypeRouter.js";
import subjectRoutes from "#routes/subjectRouter.js";
import teacherRoutes from "#routes/teacherRouter.js";
import workloadRoutes from "#routes/workloadRouter.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", groupRoutes);
app.use("/api", lessonTypeRoutes);
app.use("/api", subjectRoutes);
app.use("/api", teacherRoutes);
app.use("/api", workloadRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
