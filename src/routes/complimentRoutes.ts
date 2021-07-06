import { Router } from "express";
import { ComplimentController } from "../controllers/ComplimentController";

const router = Router();

const complimentController = new ComplimentController();

const complimentRouter = router.post("/compliments", complimentController.handle);

export { complimentRouter }