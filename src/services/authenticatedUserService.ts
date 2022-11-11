import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
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

    const token = await sign(
      { user: JSON.stringify(userAlreadyExists) },
      "2cbe207a-befb-42f9-8cd7-64a8af8f1994",
      {
        subject: userAlreadyExists.id,
        expiresIn: "30d",
      },
    );
    const { id, name, role, xp } = userAlreadyExists;
    return { id, name, role, xp, token };
  }
}

export { AuthenticatedUserService };
