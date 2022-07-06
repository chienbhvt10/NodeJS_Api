import express from "express";
const router = express.Router();
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "./services";

router.post("/create-user", createUser);
router.put("/update-user", updateUser);
router.delete("/delete-user", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

export default router;
