import {
  LogCreateData,
  LogDeleteData,
  LogGetData,
} from "../interfaces/LogsInterfaces";
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

  async get({
    organizationId,
    createdAt,
    fileId,
    groupId,
    repositoryId,
    teamId,
    text,
    type,
    userId,
  }: LogGetData) {
    return await prisma.log.findMany({
      where: {
        organizationId,
        fileId: fileId ?? null,
        groupId: groupId ?? null,
        repositoryId: repositoryId ?? null,
        teamId: teamId ?? null,
        text: { contains: text ?? "" },
        type: { contains: type ?? "" },
        userId: userId ?? null,
      },
    });
  }
}
