import { client } from "../prisma/client";

interface IRequestGetUniqueStudyTrail {
  id: string;
}

class GetUniqueStudyTrailService {
  async execute({ id }: IRequestGetUniqueStudyTrail) {
    const studyTrail = client.trails.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!studyTrail) {
      throw new Error("Not even a single Study Trail has been found!");
    }

    return studyTrail;
  }
}

export { GetUniqueStudyTrailService };
