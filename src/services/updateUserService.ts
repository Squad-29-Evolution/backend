import { Role } from "@prisma/client";
import { client } from "../prisma/client";

interface IRequestUpdateUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  xp: number;
}

class UpdateUserService {
  async execute({ id, name, email, role, xp }: IRequestUpdateUser) {
    const user = await client.users.update({
      where: { id },
      data: {
        name,
        email,
        role,
        xp,
      },
    });

    return user;
  }
}

export { UpdateUserService };
