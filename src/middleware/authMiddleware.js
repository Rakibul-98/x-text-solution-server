import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const protectAdmin = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select("-password");
      if (!req.admin) {
        return res.status(401).json({ message: "Not authorized" });
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
