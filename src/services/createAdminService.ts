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
    });

    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      picture: admin.picture,
      role: admin.role,
    };
  }
}

export { CreateAdminService };
