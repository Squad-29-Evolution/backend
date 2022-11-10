import { userInfo } from "os";
import { client } from "../prisma/client";

interface IRequestGetUser {
  name: string;
  email: string;
  password: string;
}

class GetUserService {
  async execute(id: string) {
    const user = await client.users.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        xp: true,
        created_at: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export { GetUserService };
