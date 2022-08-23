import { Request, Response } from "express";
import { LogCreateData } from "../interfaces/LogsInterfaces";
import { LogsServices } from "./../services/LogsServices";

const service = new LogsServices();

export class LogsControllers {
  async create(request: Request, response: Response) {
    const logCreate = request.body as LogCreateData;
    try {
      await service.create(logCreate);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).send(error);
    }
  }

  async delete(request: Request, response: Response) {
    const { ids } = request.body;
    try {
      await service.delete({ ids });
      return response.status(200).send();
    } catch (error) {
      return response.status(400).send(error);
    }
  }
}
