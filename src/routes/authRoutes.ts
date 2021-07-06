import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

const authController = new AuthController();

const authRouter = router.post("/auth", authController.handle);

export { authRouter }
