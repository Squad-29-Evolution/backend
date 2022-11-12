import { Role } from "@prisma/client";
import { hash } from "bcrypt";
import { client } from "../prisma/client";

interface IRequestCreateAdmin {
  name: string;
  email: string;
  password: string;
  picture: string;
}

class CreateAdminService {
  async execute({ name, email, password, picture }: IRequestCreateAdmin) {
    const adminAlreadyExists = await client.users.findFirst({
      where: { email },
    });

    if (adminAlreadyExists) {
      throw new Error("Admin already exists!");
    }

    const passwordHash = await hash(password, 8);

    const admin = await client.users.create({
      data: {
        name,
        email,
        password: passwordHash,
        picture,
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
