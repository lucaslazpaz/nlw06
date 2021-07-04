import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

const userRouter = router.post("/users", createUserController.handle);

export { userRouter }