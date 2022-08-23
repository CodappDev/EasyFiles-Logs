import { prisma } from "../prisma";
import {
  NotificationDeleteData,
  NotificationDeleteManyData,
  NotificationGetData,
  NotificationPopCreateData,
} from "./../interfaces/NotificationsPopInterfaces";

export class NotificationsPopServices {
  async create(data: NotificationPopCreateData) {
    await prisma.notificationsPop.create({
      data,
    });
  }

  async createMany(data: NotificationPopCreateData[]) {
    await prisma.notificationsPop.createMany({
      data,
    });
  }

  async deleteMany({ ids }: NotificationDeleteManyData) {
    await prisma.notificationsPop.deleteMany({
      where: {
        id: { in: ids },
      },
    });
  }

  async getByUser({ userId }: NotificationGetData) {
    const files = await prisma.notificationsPop.findMany({
      where: {
        NOT: { fileId: null },
      },
    });
    const updates = await prisma.notificationsPop.findMany({
      where: {
        NOT: {
          updateId: null,
        },
      },
    });

    return { files, updates };
  }
}
