import { NotificationPopCreateData } from "../interfaces/NotificationsPopInterfaces";
import {
    UpdateGetUserData,
  UpdatesCreateData,
  UpdatesDeleteData,
} from "../interfaces/UpdatesInterfaces";
import { prisma } from "../prisma";

export class UpdatesServices {
  async create(data: UpdatesCreateData) {
    const update = await prisma.updates.create({
      data,
    });
    let arrayNotification: NotificationPopCreateData[] = [];
    if (data.users) {
      data.users.map((userId) => {
        arrayNotification.push({
          type: "UPDATE",
          userId,
          updateId: update.id,
        });
      });
    }
    await prisma.notificationsPop.createMany({
      data: arrayNotification,
    });
  }

  async delete({ ids }: UpdatesDeleteData) {
    await prisma.notificationsPop.deleteMany({
      where: { updateId: { in: ids } },
    });
    await prisma.updates.deleteMany({
      where: { id: { in: ids } },
    });
  }

  async getAllUser({ userId, fileIds }: UpdateGetUserData) {
    const updates = await prisma.updates.findMany({
      where: { users: { hasSome: userId } },
      include: {NotificationsPop: true},
      take: 10
    });
    const notifications = await prisma.notificationsPop.findMany({
      where: {
        fileId:{in: fileIds}
      }
    })
    return {updates, notifications}
  }
}
