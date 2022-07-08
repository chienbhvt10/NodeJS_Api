import { Request, Response } from "express";

export const login = async (req: Request, res: Response): Promise<any> => {
  res.json({ key: "login" });
};
export const register = async (req: Request, res: Response): Promise<any> => {
  res.json({ key: "register" });
};
