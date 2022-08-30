import { Router } from "express";
import { LogsControllers } from "../controllers/LogsControllers";

export const logsRoutes = Router();

logsRoutes.post("/", new LogsControllers().create);

logsRoutes.delete("/", new LogsControllers().delete);