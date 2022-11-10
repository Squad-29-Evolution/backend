import { client } from "../../prisma/client";

interface IRequestGetUniqueContent {
  id: string;
}

class GetUniqueContentService {
  async execute({ id }: IRequestGetUniqueContent) {
    const content = await client.contents.findUnique({
      where: {
        id: Number(id),
      },
    });

    return content;
  }
}

export { GetUniqueContentService };
