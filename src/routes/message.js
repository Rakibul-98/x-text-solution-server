import express from "express";
import {
  createMessage,
  deleteMessage,
  getMessages,
} from "../controllers/messageController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", protectAdmin, getMessages);
router.delete("/:id", protectAdmin, deleteMessage);

export default router;
