import { client } from "../../prisma/client";

class GetAllCategoryService {
  async execute() {
    const category = client.category.findMany();

    return category;
  }
}

export { GetAllCategoryService };
