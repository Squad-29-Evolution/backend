import { client } from "../../prisma/client";

interface IRequestgetuniqueService {
  id: string;
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
