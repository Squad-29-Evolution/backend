import { client } from "../../prisma/client";

interface IRequestupdateCategory {
  id: number;
  name: string;
}

class UpdateCategoryService {
  async execute({ id, name }: IRequestupdateCategory) {
    const category = await client.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return category;
  }
}

export { UpdateCategoryService };
