import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

const settingsSchema = new mongoose.Schema(
  {
    hero: {
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      backgroundImage: { type: String, default: "" },
    },
    services: [serviceSchema],
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", settingsSchema);
export default Settings;
