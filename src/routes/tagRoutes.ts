import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { CreateTagController } from "../controllers/CreateTagController";

const router = Router();

const createTagController = new CreateTagController();

const tagRouter = router.post("/tags", ensureAdmin, createTagController.handle);

export { tagRouter }
