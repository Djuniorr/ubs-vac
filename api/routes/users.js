import express from "express";
import { validateLogin, createLogin } from "../controllers/users.js";

const router = express.Router()

router.post("/login", validateLogin)
router.post("/register", createLogin)

export default router;