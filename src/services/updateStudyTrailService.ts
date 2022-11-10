import { client } from "../prisma/client";

interface IRequestUpdateStudyTrailer {
  id: string;
  name: string;
  description: string;
  hours: number;
}

class UpdateStudyTrailService {
  async execute({ name, description, hours, id }: IRequestUpdateStudyTrailer) {
    const studyTrail = await client.trails.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        hours,
      },
    });

    return studyTrail;
  }
}

export { UpdateStudyTrailService };
