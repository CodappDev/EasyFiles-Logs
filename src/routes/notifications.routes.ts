import { NotificationsControllers } from "./../controllers/NotificationsControllers";
import { Router } from "express";

export const notificationsRoutes = Router();

notificationsRoutes.post("/", new NotificationsControllers().create);

notificationsRoutes.post("/many", new NotificationsControllers().createMany);

notificationsRoutes.delete("/", new NotificationsControllers().delete);
