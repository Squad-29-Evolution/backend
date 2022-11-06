import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";

const createUserService = new CreateUserService();

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await createUserService.execute({ name, email, password });

    return res.json(user);
  }
}

export { UserController };
