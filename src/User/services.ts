import { UserModel } from "./entities/User";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response): Promise<any> => {
  const userCreated = await UserModel.create({
    password: req.body.password,
    email: req.body.email,
    username: req.body.username,
  });
  res.json(userCreated);
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  const user = await UserModel.findByIdAndUpdate(req.body.id, {
    password: req.body.password || undefined,
    email: req.body.email || undefined,
    username: req.body.username || undefined,
  }).exec();

  res.json(user);
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  const users = await UserModel.findByIdAndDelete(req.body.id);
  res.json(users);
};

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  const users = await UserModel.find().skip(0).limit(1000).exec();
  res.json(users);
};

export const getUser = async (req: Request, res: Response): Promise<any> => {
  res.json(await UserModel.findById(req.params.id));
};
