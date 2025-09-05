import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "#DBconfig.js";
import authRoutes from "#routes/authRouter.js";
import groupRoutes from "#routes/groupRouter.js";
import lessonTypeRoutes from "#routes/lessonTypeRouter.js";
import subjectRoutes from "#routes/subjectRouter.js";
import teacherRoutes from "#routes/teacherRouter.js";
import workloadRoutes from "#routes/workloadRouter.js";
import { authentication } from "#middleware/authMiddleware.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/group", groupRoutes);
app.use("/lessonType/api", authentication, lessonTypeRoutes);
app.use("/subject/api", subjectRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/workload/api", workloadRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
