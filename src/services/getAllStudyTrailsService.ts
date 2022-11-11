import { client } from "../prisma/client";

class GetAllStudyTrailsService {
  async execute() {
    const studyTrails = client.trails.findMany({
      where: {},
    });

    if (!studyTrails) {
      throw new Error("Not even a single Study Trail has been found!");
    }

    return studyTrails;
  }
}

export { GetAllStudyTrailsService };
