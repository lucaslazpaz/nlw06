import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, admin, password} = request.body;

    const createUserService = new UserService();

    const user = await createUserService.create({name, email, admin, password});

    return response.json(user);
  }
}

export { UserController }