import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();

const userRouter = router.post("/users", userController.create);

export { userRouter }