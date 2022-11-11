import { Status } from "@prisma/client";
import { client } from "../prisma/client";

class AttendanceService {
  static async salveTraill(user_id: string, trail_id: number) {
    const currentXP = await client.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        xp: true,
      },
    });

    const findUserTrail = await client.userTrails.findMany({
      where: {
        trail_id: trail_id,
        AND: {
          user_id: user_id,
        },
      },
    });

    if (findUserTrail.length > 0) {
      return { message: "this trail aleady exist" };
    }

    const userTraill = await client.userTrails.create({
      data: {
        trail_id: trail_id,
        user_id: user_id,
      },
    });

    if (currentXP?.xp || currentXP?.xp == 0) {
      const userXP = await client.users.update({
        data: {
          xp: currentXP?.xp + 5,
        },
        where: {
          id: user_id,
        },
        select: {
          xp: true,
        },
      });

      return { ...userTraill, ...userXP };
    }

    return { ...userTraill, xp: currentXP?.xp };
  }

  static async removeTrail(user_id: string, trail_id: number) {
    const trail = await client.userTrails.delete({
      where: {
        user_id_trail_id: {
          trail_id: trail_id,
          user_id: user_id,
        },
      },
    });

    return { trail };
  }

  static async salveConcludedCourse(
    user_id: string,
    trail_id: number,
    content_id: number,
  ) {
    const salved = await client.userContents.create({
      data: {
        status: Status.FINISHED,
        contentsId: content_id,
        user_trail_id: trail_id,
        user_trail_user_id: user_id,
      },
    });

    return salved;
  }
}

export default AttendanceService;
