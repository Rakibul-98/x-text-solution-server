import Settings from "../models/Settings.js";

export const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne().lean();

    if (!settings) {
      settings = {
        hero: { title: "", subtitle: "", backgroundImage: "" },
        services: [
          { title: "", description: "" },
          { title: "", description: "" },
          { title: "", description: "" },
        ],
      };
      await Settings.create(settings);
    }

    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = new Settings(req.body);
    } else {
      settings.hero = req.body.hero;
      settings.services = req.body.services;
    }

    const updatedSettings = await settings.save();
    res.json(updatedSettings.toObject());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
