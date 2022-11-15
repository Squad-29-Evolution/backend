import { Status } from "@prisma/client";
import { client } from "../prisma/client";

class AttendanceService {
  static async salveTraill(user_id: string, trail_id: number) {
    const findUserTrail = await client.userTrails.findMany({
      where: {
        trail_id: trail_id,
        AND: {
          user_id: user_id,
        },
      },
    });

    if (findUserTrail.length > 0) {
      return { message: "this trail already exist" };
    }

    const currentXP = await client.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        xp: true,
      },
    });

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

  static async getSalvedTrails(user_id: string) {
    const findUserTrail = await client.userTrails.findMany({
      where: {
        user_id: user_id,
      },
    });

    return findUserTrail;
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
    const alreadyExist = await client.userContents.findMany({
      where: {
        contentsId: content_id,
        user_trail_user_id: user_id,
        user_trail_id: trail_id,
      },
    });

    if (alreadyExist.length > 0) {
      return { message: "this course already salve" };
    }

    const currentXP = await client.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        xp: true,
      },
    });

    const salved = await client.userContents.create({
      data: {
        status: Status.FINISHED,
        contentsId: content_id,
        user_trail_id: trail_id,
        user_trail_user_id: user_id,
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

      return { ...salved, ...userXP };
    }

    return salved;
  }

  static async getPercentConcludedCourse(
    user_id: string,
    trail_id: number,
    category_id: number,
  ) {
    let concluded = 0;

    const contentsTotal = await client.contents.findMany({
      where: {
        trail_id,
        category_id,
      },
    });

    const contentsConcluded = await client.userContents.findMany({
      where: {
        user_trail_user_id: user_id,
        user_trail_id: trail_id,
      },
    });

    await Promise.all(
      contentsConcluded.map(async (item) => {
        const content = await client.contents.findFirst({
          where: {
            id: item.contentsId!,
          },
        });

        if (content?.category_id == category_id) {
          concluded += 1;
        }
      }),
    );

    const percent = (concluded * 100) / contentsTotal.length;

    return percent;
  }

  static async getPercentConcludedTrail(user_id: string, trail_id: number) {
    const contentsTotal = await client.contents.findMany({
      where: {
        trail_id,
      },
    });

    const contentsConcluded = await client.userContents.findMany({
      where: {
        user_trail_user_id: user_id,
        user_trail_id: trail_id,
      },
    });

    const percent = (contentsConcluded.length * 100) / contentsTotal.length;

    return percent;
  }

  static async getAllConcludedCourseInTrail(user_id: string, trail_id: number) {
    const courses = await client.userContents.findMany({
      where: {
        user_trail_user_id: user_id,
        user_trail_id: trail_id,
      },
    });

    return courses;
  }

  static async getUniqueConcludedCourseInTrail(
    user_id: string,
    trail_id: number,
    content_id: number,
  ) {
    const courses = await client.userContents.findMany({
      where: {
        contentsId: content_id,
        user_trail_user_id: user_id,
        user_trail_id: trail_id,
      },
    });

    return courses;
  }
}

export default AttendanceService;
