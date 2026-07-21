import express from "express";
import { sendContactMessage } from "../controllers/contactController.js";

const router = express.Router();

// GET Route (Testing)
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Contact Route Working",
  });
});

// POST Route
router.post("/", sendContactMessage);

export default router;
