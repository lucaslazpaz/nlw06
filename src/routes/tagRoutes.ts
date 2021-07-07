import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { TagController } from "../controllers/TagController";

const router = Router();

const tagController = new TagController();

const tagRouter = router.post("/tags", ensureAuthenticated, ensureAdmin, tagController.create);

export { tagRouter }
