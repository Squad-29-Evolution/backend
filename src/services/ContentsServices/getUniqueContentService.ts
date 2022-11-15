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
      select: {
        id: true,
        description: true,
        category_id: true,
        link: true,
        title: true,
        type: true,
        trail_id: true,
        trail: {
          select: {
            icon: true,
          },
        },
      },
    });

    return content;
  }
}

export { GetUniqueContentService };
