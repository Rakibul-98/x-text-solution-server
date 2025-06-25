import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import adminAuthRoutes from "./routes/adminAuth.js";
import settingsRoutes from "./routes/settings.js";
import messageRoutes from "./routes/message.js";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to XTech Solution API");
});

app.use("/api/admin", adminAuthRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/messages", messageRoutes);

export default app;
