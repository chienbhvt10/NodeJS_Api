import express from "express";
const router = express.Router();
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "./services";

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

export default router;
