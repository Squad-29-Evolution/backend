import { client } from "../prisma/client";

interface IRequestUpdateUser {
  id: string;
  name: string;
  password: string;
  email: string;
}

class UpdateUserService {
  async execute({ id, name, email, password }: IRequestUpdateUser) {
    const user = await client.users.update({
      where: { id },
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
}

export { UpdateUserService };
