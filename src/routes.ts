import express from "express";
import userRoutes from "./User/routes";

const Routes = (app: express.Application) => {
  app.use("/login", () => {});
  app.use("/users", userRoutes);
  app.use("/", (req: express.Request, res: express.Response) => {
    res.json({ hello: "Home" });
  });
};

export default Routes;
