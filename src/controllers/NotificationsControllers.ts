import { NotificationPopCreateData } from "./../interfaces/NotificationsPopInterfaces";
import { Request, Response } from "express";
import { NotificationsPopServices } from "./../services/NotificationsPopServices";

const service = new NotificationsPopServices();

export class NotificationsControllers {
  async create(request: Request, response: Response) {
    const notificationData = request.body as NotificationPopCreateData;
    try {
      await service.create(notificationData);
      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Erro ao criar notificações" });
    }
  }

  async createMany(request: Request, response: Response) {
    const notificationData = request.body as NotificationPopCreateData[];
    try {
      await service.createMany(notificationData);
      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Erro ao criar notificações" });
    }
  }

  async delete(request: Request, response: Response) {
    const { ids } = request.body;
    try {
      await service.deleteMany({ ids });
      return response.status(200).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Erro ao deletar notificações" });
    }
  }

  async getByUser(request: Request, response: Response){
    const {userId} = request.params;
    try {
        const notification = await service.getByUser({userId});
        return response.status(200).json(notification);
    } catch (error) {
        return response
        .status(400)
        .json({ message: "Erro ao buscar notificações" });
    }
  }
}
