import express from "express";
import { validateLogin, createLogin, getUbs } from "../controllers/users.js";

const router = express.Router()

router.post("/login", validateLogin)
router.post("/register", createLogin)
router.get("/ubs", getUbs)

export default router;