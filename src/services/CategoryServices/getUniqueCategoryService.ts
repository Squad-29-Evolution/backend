import { client } from "../../prisma/client";

interface IRequestgetuniqueService {
  id: number;
}

class GetUniqueCategoryService {
  async execute({ id }: IRequestgetuniqueService) {
    const category = await client.category.findUnique({
      where: {
        id,
      },
    });

    return category;
  }
}

export { GetUniqueCategoryService };
