import { LogCreateData, LogDeleteData } from "../interfaces/LogsInterfaces";
import { prisma } from "../prisma";

export class LogsServices {
  async create(data: LogCreateData) {
    data.createdAt = new Date();
    await prisma.log.create({
      data: data,
    });
  }

  async delete({ ids }: LogDeleteData) {
    await prisma.log.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
