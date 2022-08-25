import { NotificationsPopServices } from './../services/NotificationsPopServices';
import { AccessCreateData } from './../interfaces/AccessInterfaces';
import { Request, Response } from "express";
import { AccessServices } from '../services/AccessServices';

const service = new AccessServices();

const testeS = new NotificationsPopServices()

export class AccessControllers {
    async create(request: Request, response: Response){
        const accessData = request.body as AccessCreateData;
        
        try {
            await service.create(accessData);
            response.status(200).send();
        } catch (error) {
            response.status(400).json({message: 'Error creating access'});
        }
    }

    async deleteByUser(request: Request, response: Response){
        const { userId } = request.body;
        try {
            await service.deleteByUser({ userId });
            response.status(200).send();
        } catch (error) {
            response.status(400).send(error);
        }
    }

    async deleteByIds(request: Request, response: Response){
        const { ids } = request.body;
        try {
            await service.deleteByIds({ ids });
            response.status(200).send();
        } catch (error) {
            response.status(400).send(error);
        }
    }
}