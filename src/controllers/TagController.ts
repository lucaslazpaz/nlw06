import { Request, Response } from "express";
import { TagService } from "../services/TagService";

class TagController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new TagService();

    const tag = await createTagService.create({name});
    return response.json(tag);
  }
}

export { TagController };
