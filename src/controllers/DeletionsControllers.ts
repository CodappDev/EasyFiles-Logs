import { Request, Response } from "express";
import { DeletionCreateData, DeletionDeleteData } from "../interfaces/DeletionsInterfaces";
import { DeletionsServices } from "../services/DeletionsServices";

const service = new DeletionsServices();

export class DeletionsControllers {
    async create(request: Request, response: Response){
        const deletionCreate = request.body as DeletionCreateData;
        try {
            await service.create(deletionCreate);
            response.status(201).send();
        } catch (error) {
            response.status(400).send(error);
        }
    }

    async delete(request: Request, response: Response){
        const deletionDelete = request.body as DeletionDeleteData;
        try {
            await service.delete(deletionDelete);
            response.status(200).send();
        } catch (error) {
            response.status(400).send(error);
        }
    }
}