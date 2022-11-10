import { client } from "../../prisma/client";

class GetAllContentService {
  async execute() {
    const content = client.contents.findMany();

    return content;
  }
}

export { GetAllContentService };
