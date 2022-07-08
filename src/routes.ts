import express from "express";
import userRoutes from "./User/routes";
import authRoutes from "./Auth/routes";

const Routes = (app: express.Application) => {
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/", (req: express.Request, res: express.Response) => {
    res.json({ message: "Welcome to Project Support" });
  });
};

export default Routes;
