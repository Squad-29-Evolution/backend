import { client } from "../prisma/client";

interface IRequestUpdateStudyTrailer {
  id: string;
  name: string;
  description: string;
  hours: number;
  icon: string;
}

class UpdateStudyTrailService {
  async execute({
    name,
    description,
    hours,
    id,
    icon,
  }: IRequestUpdateStudyTrailer) {
    const studyTrail = await client.trails.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
        hours,
        icon,
      },
    });

    return studyTrail;
  }
}

export { UpdateStudyTrailService };
