import { Role } from "@prisma/client";
import { client } from "../prisma/client";
import { thisDatesAlreadyExist } from "../util/dates";

class ProgressService {
  static async salveLastLogin(uuid: string) {
    const user = await client.users.findFirst({
      where: {
        id: uuid,
        Dates: {
          every: {
            user_id: uuid,
          },
        },
      },
      select: {
        xp: true,
        Dates: {
          select: {
            date: true,
          },
        },
      },
    });

    if (user?.Dates) {
      const isToday = thisDatesAlreadyExist(user.Dates);
      if (isToday) {
        return { xp: user.xp };
      }
    }

    const date = await client.dates.create({
      data: {
        date: new Date(),
        count: 1,
        level: 1,
        user_id: uuid,
      },
      select: {
        date: true,
        count: true,
        level: true,
      },
    });

    if (user?.xp) {
      const userXP = await client.users.update({
        data: {
          xp: user?.xp + 5,
        },
        where: {
          id: uuid,
        },
        select: {
          xp: true,
        },
      });
      return { ...date, ...userXP };
    }
  }

  static async getAllLogins(uuid: string) {
    const dates = await client.dates.findMany({
      where: {
        user_id: uuid,
      },
      select: {
        date: true,
        count: true,
        level: true,
      },
    });

    return dates;
  }
}

export default ProgressService;
