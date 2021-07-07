import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

const userController = new UserController();

const userRouter = router.post("/users", ensureAuthenticated, userController.create);

export { userRouter }