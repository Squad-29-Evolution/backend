import { compare } from "bcrypt";
import { sign, verify, decode } from "jsonwebtoken";
import { client } from "../prisma/client";

interface IRequestAuthenticated {
  email: string;
  password: string;
}

class AuthenticatedUserService {
  async execute({ email, password }: IRequestAuthenticated) {
    const userAlreadyExists = await client.users.findFirst({
      where: { email },
    });

    if (!userAlreadyExists) {
      throw new Error("Email or password incorrect.");
    }

    const passwordCorrect = await compare(password, userAlreadyExists.password);

    if (!passwordCorrect) {
      throw new Error("Email or password incorrect.");
    }

    const { id, name, role, xp, picture } = userAlreadyExists;

    const token = await sign(
      { id },
      process.env.SECRET || "tokensuperseguroconfia",
      {
        subject: userAlreadyExists.id,
        expiresIn: "1d",
      },
    );

    return { id, name, role, xp, picture, token };
  }

  async checkTokenIsValid(token: string) {
    //@ts-ignore
    const isValid = await verify(token, process.env.SECRET);

    return isValid;
  }
}

export { AuthenticatedUserService };
