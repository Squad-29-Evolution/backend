import { client } from "../../prisma/client";

class GetAllContentService {
  async execute() {
    const content = client.contents.findMany({
      select: {
        id: true,
        link: true,
        title: true,
        trail_id: true,
        type: true,
        description: true,
        trail: {
          select: {
            name: true,
            icon: true,
          },
        },
      },
    });

    return content;
  }
}

export { GetAllContentService };
