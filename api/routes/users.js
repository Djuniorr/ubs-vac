import express from "express";
import { validateLogin, createLogin, getUbs, getUbsWithVacinas } from "../controllers/users.js";

const router = express.Router();

router.post("/login", validateLogin);
router.post("/register", createLogin);
router.get("/ubs", getUbs);
router.get("/ubsWithVacinas", getUbsWithVacinas);

export default router;