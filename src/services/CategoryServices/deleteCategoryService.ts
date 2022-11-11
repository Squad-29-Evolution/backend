import { client } from "../../prisma/client";

interface IRequestcategoryService {
  id: number;
}

class DeleteCategoryService {
  async execute({ id }: IRequestcategoryService) {
    const category = await client.category.delete({
      where: {
        id,
      },
    });

    return category;
  }
}

export { DeleteCategoryService };
