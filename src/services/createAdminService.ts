import { Role } from "@prisma/client";
import { hash } from "bcrypt";
import { client } from "../prisma/client";

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

    const admin = await client.users.create({
      data: {
        name,
        email,
        password: passwordHash,
        role: Role.ADMIN,
      },
    });

    return {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    };
  }
}

export { CreateAdminService };
