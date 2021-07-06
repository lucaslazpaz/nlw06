import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthRequest {
  email: string;
  password: string;
}
class AuthService {
  async execute({email, password}: IAuthRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    //Verificar se email existe
    const user = await usersRepositories.findOne({
      email
    });
    if(!user) {
      throw new Error("Email or Password incorrect");
    }
    //Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email or Password incorrect");
    }
    //Gerar o token
    const token = sign({
      email: user.email
    }, "919433862debc0a4ba439ce05fffc716", {
      subject: user.id,
      expiresIn: "1d"
    });
    return token;
  }
}

export { AuthService }