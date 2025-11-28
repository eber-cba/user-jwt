import express from "express";
import * as controller from "../controllers/auth.controllers.js";
const router = express.Router();

// POST /login -> controller
router.post("/login", controller.login);

export default router;