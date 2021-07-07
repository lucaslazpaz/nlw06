import { Router } from "express";
import { ComplimentController } from "../controllers/ComplimentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

const complimentController = new ComplimentController();

const complimentRouter = router.post("/compliments", ensureAuthenticated, complimentController.handle);

export { complimentRouter }