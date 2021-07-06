import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { TagController } from "../controllers/TagController";

const router = Router();

const tagController = new TagController();

const tagRouter = router.post("/tags", ensureAdmin, tagController.create);

export { tagRouter }
