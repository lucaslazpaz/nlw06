import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

class AuthController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authService = new AuthService();

    const token = await authService.execute({
      email,
      password
    });
    return response.json(token);
  }
}

export { AuthController }