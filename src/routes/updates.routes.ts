import { UpdatesControllers } from "./../controllers/UpdatesControllers";
import { Router } from "express";

export const updatesRoutes = Router();

updatesRoutes.post("/", new UpdatesControllers().create);

updatesRoutes.delete("/", new UpdatesControllers().delete);

updatesRoutes.post("/getUser", new UpdatesControllers().getAllUser)