import { hash } from "bcrypt";
import { client } from "../prisma/client";

interface IRequestCreateUser {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IRequestCreateUser) {
    const userAlreadyExists = await client.users.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await client.users.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });

    return user;
  }
}

export { CreateUserService };
