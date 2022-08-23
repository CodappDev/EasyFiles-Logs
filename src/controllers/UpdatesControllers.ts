import { UpdatesCreateData } from "./../interfaces/UpdatesInterfaces";
import { Request, Response } from "express";
import { UpdatesServices } from "./../services/UpdatesServices";

const service = new UpdatesServices();

export class UpdatesControllers {
  async create(request: Request, response: Response) {
    const updateData = request.body as UpdatesCreateData;
    try {
      await service.create(updateData);
      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Erro ao criar atualização" });
    }
  }

  async delete(request: Request, response: Response) {
    const { ids } = request.body;
    try {
      await service.delete({ ids });
      return response.status(200).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Erro ao deletar atualizações" });
    }
  }

  async getAllUser(request: Request, response: Response){
    const {userId, fileIds} = request.body
    console.log(3)
    try {
      const updates = await service.getAllUser({ fileIds, userId });
      return response.status(200).send(updates);
    } catch (error) {
      console.log(error)
      return response
        .status(400)
        .json({ message: "Erro ao deletar atualizações" });
    }
  }
}
