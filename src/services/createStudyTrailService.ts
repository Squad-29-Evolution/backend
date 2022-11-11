import { client } from "../prisma/client";

interface IRequestCreateTrail {
  name: string;
  description: string;
  hours: number;
}

class CreateStudyTrailService {
  async execute({ name, description, hours }: IRequestCreateTrail) {
    const studyTrail = await client.trails.create({
      data: {
        name,
        description,
        hours,
      },
    });

    return studyTrail;
  }
}

export { CreateStudyTrailService };
