import express from "express";
import { createUser } from "../controllers/authController.js";
const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from API route!" });
});
// User APIs
router.post("/auth/phone-send-otp", createUser);

export default router;
