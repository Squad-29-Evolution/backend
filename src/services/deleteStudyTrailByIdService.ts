import { client } from "../prisma/client";

interface IRequestDeleteStudyTrail {
  id: string;
}

class DeleteStudyTrail {
  async execute({ id }: IRequestDeleteStudyTrail) {
    const studyTrail = await client.trails.delete({
      where: { id: Number(id) },
    });

    return studyTrail;
  }
}

export { DeleteStudyTrail };
