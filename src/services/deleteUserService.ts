import { client } from "../prisma/client";

interface IRequestDeleteUser {
  id: string;
}

class DeleteUserService {
  async execute({ id }: IRequestDeleteUser) {
    const user = await client.users.delete({
      where: { id },
    });

    return user;
  }
}

export { DeleteUserService };
