import { client } from "../prisma/client";

interface IRequestUpdateUser {
  id: string;
  name: string;
  password: string;
  email: string;
  picture: string;
}

class UpdateUserService {
  async execute({ id, name, email, password, picture }: IRequestUpdateUser) {
    const user = await client.users.update({
      where: { id },
      data: {
        name,
        email,
        password,
        picture,
      },
    });

    return user;
  }
}

export { UpdateUserService };
