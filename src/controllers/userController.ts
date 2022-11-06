import { Request, Response } from "express";
import { AuthenticatedUserService } from "../services/authenticatedUserService";
import { CreateUserService } from "../services/createUserService";

const authenticatedUserService = new AuthenticatedUserService();
const createUserService = new CreateUserService();

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await createUserService.execute({ name, email, password });

    return res.json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const message = await authenticatedUserService.execute({ email, password });

    return res.json(message);
  }
}

export { UserController };
