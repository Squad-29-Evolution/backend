import { hash } from "bcrypt";
import { client } from "../prisma/client";
import { randomBytes } from "crypto";

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

    const randomSeed = randomBytes(6).toString("base64url");
    const randomPicture = `https://avatars.dicebear.com/api/micah/${randomSeed}.svg`;

    const user = await client.users.create({
      data: {
        name,
        email,
        password: passwordHash,
        picture: randomPicture,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      role: user.role,
    };
  }
}

export { CreateUserService };
