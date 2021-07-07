import { Request, Response } from "express";
import { ComplimentService } from "../services/ComplimentService"

class ComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_sender, message } = request.body;
    const { user_id } = request;
    const complimentService = new ComplimentService();

    const compliment = await complimentService.execute({
      tag_id,
      user_receiver: user_id,
      user_sender,
      message
    });

    return response.json(compliment);
  }
}

export { ComplimentController }