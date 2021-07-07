import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Receber o token
  const authToken = request.headers.authorization;
  //Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");
  //Validar se é válido
  try {
    //Recuperar informações do usuário
    const { sub } = verify(token, "919433862debc0a4ba439ce05fffc716") as IPayLoad;
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}