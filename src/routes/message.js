import express from "express";
import {
  createMessage,
  getMessages,
} from "../controllers/messageController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", protectAdmin, getMessages);

export default router;
