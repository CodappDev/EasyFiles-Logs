import { Router } from "express";
import { AccessControllers } from "../controllers/AccessControllers";

export const accessRoutes = Router();

accessRoutes.post("/", new AccessControllers().create);

accessRoutes.delete("/users", new AccessControllers().deleteByUser);

accessRoutes.delete("/", new AccessControllers().deleteByIds);
