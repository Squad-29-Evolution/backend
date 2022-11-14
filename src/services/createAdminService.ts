import { Role } from "@prisma/client";
import { hash } from "bcrypt";
import { client } from "../prisma/client";
import { randomBytes } from "crypto";

interface IRequestCreateAdmin {
  name: string;
  email: string;
  password: string;
}

class CreateAdminService {
  async execute({ name, email, password }: IRequestCreateAdmin) {
    const adminAlreadyExists = await client.users.findFirst({
      where: { email },
    });

    if (adminAlreadyExists) {
      throw new Error("Admin already exists!");
    }

    const passwordHash = await hash(password, 8);

    const randomSeed = randomBytes(6).toString("base64url");
    const randomPicture = `https://avatars.dicebear.com/api/micah/${randomSeed}.svg`;

    const admin = await client.users.create({
      data: {
        name,
        email,
        password: passwordHash,
        picture: randomPicture,
        role: Role.ADMIN,
      },
      select: {
        id: true,
        name: true,
        email: true,
        picture: true,
        role: true,
        Dates: {
          take: 1,
          orderBy: {
            date: "desc",
          },
          select: {
            date: true,
          },
        },
      },
    });

    return admin;
  }
}

export { CreateAdminService };
