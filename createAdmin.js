import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./src/models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await Admin.findOne({ email: "admin@xtech.com" });
    if (existing) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const admin = new Admin({
      email: "admin@xtech.com",
      password: "password123",
    });
    await admin.save();
    console.log("Admin created");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createAdmin();
