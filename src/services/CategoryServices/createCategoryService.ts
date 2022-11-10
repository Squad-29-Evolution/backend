import { client } from "../../prisma/client";

interface IRequestCreateCategory {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: IRequestCreateCategory) {
    const category = await client.category.create({
      data: {
        name,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
