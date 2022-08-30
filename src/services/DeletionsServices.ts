import { prisma } from "../prisma";
import {
  DeletionCreateData,
  DeletionDeleteData,
  DeletionGetData,
} from "../interfaces/DeletionsInterfaces";
export class DeletionsServices {
  async create(data: DeletionCreateData) {
    data.createdAt = new Date();
    data.expiration = new Date(
      data.createdAt.getTime() + 1000 * 60 * 60 * 24 * 7
    );
    await prisma.deletions.create({
      data: data,
    });
  }

  async delete({ ids }: DeletionDeleteData) {
    await prisma.deletions.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  async get({
    organizationId,
    fileId,
    groupId,
    repositoryId,
    teamId,
    type,
    userId,
  }: DeletionGetData) {
    return await prisma.deletions.findMany({
      where: {
        organizationId,
        fileId: { contains: fileId ?? "" },
        groupId: { contains: groupId ?? "" },
        repositoryId: { contains: repositoryId ?? "" },
        teamId: { contains: teamId ?? "" },
        type: { contains: type ?? "" },
        userId: { contains: userId ?? "" },
      },
    });
  }
}
