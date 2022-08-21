import {
  AccessCreateData,
  AccessDeleteByIdsData,
  AccessDeleteByUserData,
} from "../interfaces/AccessInterfaces";
import { prisma } from "../prisma";

export class AccessServices {
  async create(data: AccessCreateData) {
    data.createdAt = new Date();
    await prisma.access.create({
      data: data,
    });
  }

  async deleteByUser({ userId }: AccessDeleteByUserData) {
    await prisma.access.deleteMany({
      where: {
        userId,
      },
    });
  }

  async deleteByIds({ ids }: AccessDeleteByIdsData) {
    await prisma.access.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
