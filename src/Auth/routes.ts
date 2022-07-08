import express from "express";
import { login, register } from "./services";
const route = express.Router();

route.post("/login", login);
route.post("/register", register);
route.get("/", login);

export default route;
