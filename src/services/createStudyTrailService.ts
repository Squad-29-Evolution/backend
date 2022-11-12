import { client } from "../prisma/client";

interface IRequestCreateTrail {
  name: string;
  description: string;
  hours: number;
  icon: string;
}

class CreateStudyTrailService {
  async execute({ name, description, hours, icon }: IRequestCreateTrail) {
    const studyTrail = await client.trails.create({
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

export { CreateStudyTrailService };
