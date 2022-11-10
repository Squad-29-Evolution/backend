import { Request, Response } from "express";
import { AuthenticatedUserService } from "../services/authenticatedUserService";
import { CreateUserService } from "../services/createUserService";
import { GetUserService } from "../services/getUserService";

const authenticatedUserService = new AuthenticatedUserService();
const createUserService = new CreateUserService();
const getUserService = new GetUserService();

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

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await getUserService.execute(id);

    return res.json(user);
  }
}

export { UserController };
