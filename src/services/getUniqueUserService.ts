import { client } from "../prisma/client";

class GetUniqueUserService {
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
        picture: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export { GetUniqueUserService };
