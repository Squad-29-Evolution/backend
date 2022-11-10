import { client } from "../../prisma/client";

interface IRequestdeleteContent {
  id: string;
}

class DeleteContentService {
  async execute({ id }: IRequestdeleteContent) {
    const content = await client.contents.delete({
      where: {
        id: Number(id),
      },
    });

    return content;
  }
}

export { DeleteContentService };
