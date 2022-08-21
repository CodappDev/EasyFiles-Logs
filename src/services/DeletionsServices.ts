import { prisma } from "../prisma";
import { DeletionCreateData, DeletionDeleteData } from "../interfaces/DeletionsInterfaces";
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

  async delete({ids}: DeletionDeleteData){
    await prisma.deletions.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    });
  }
}
