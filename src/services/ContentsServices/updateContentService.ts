import { client } from "../../prisma/client";

interface IRequestupdateContent {
  id: string;
  title: string;
  description: string;
  link: string;
  type: string;
  trail_id: number;
  category_id: number;
}

class UpdateContentService {
  async execute({
    id,
    description,
    link,
    title,
    type,
    trail_id,
    category_id,
  }: IRequestupdateContent) {
    const content = await client.contents.update({
      where: {
        id: Number(id),
      },
      data: {
        description,
        link,
        title,
        type,
        trail_id,
        category_id,
      },
    });

    return content;
  }
}

export { UpdateContentService };
