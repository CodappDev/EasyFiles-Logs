import { updatesRoutes } from "./routes/updates.routes";
import { notificationsRoutes } from "./routes/notifications.routes";
import { logsRoutes } from "./routes/logs.routes";
import express from "express";
import "dotenv/config";
import { accessRoutes } from "./routes/access.routes";
import { deletionsRoutes } from "./routes/deletions.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/logs", logsRoutes);
app.use("/access", accessRoutes);
app.use("/deletions", deletionsRoutes);
app.use("/notifications", notificationsRoutes);
app.use("/updates", updatesRoutes);

app.listen(process.env.PORT || 3334, () => {
  console.log(
    "🚀 Server Logs is running on port " + (process.env.PORT || 3334) + " 🚀"
  );
});
