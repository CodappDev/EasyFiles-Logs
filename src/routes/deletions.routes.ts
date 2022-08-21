import { DeletionsControllers } from "./../controllers/DeletionsControllers";
import { Router } from "express";

export const deletionsRoutes = Router();

deletionsRoutes.post("/", new DeletionsControllers().create);

deletionsRoutes.delete("/", new DeletionsControllers().delete);
