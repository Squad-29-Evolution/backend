import { Request, Response } from "express";
import { AuthenticatedUserService } from "../services/authenticatedUserService";
import { CreateUserService } from "../services/createUserService";
import { GetUniqueUserService } from "../services/getUniqueUserService";
import { GetAllUsersService } from "../services/getAllUsersService";
import { UpdateUserService } from "../services/updateUserService";
import { DeleteUserService } from "../services/deleteUserService";

const authenticatedUserService = new AuthenticatedUserService();
const createUserService = new CreateUserService();
const getUniqueUserService = new GetUniqueUserService();
const getAllUsersService = new GetAllUsersService();
const updateUserService = new UpdateUserService();
const deleteUserService = new DeleteUserService();

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await createUserService.execute({ name, email, password });

    return res.json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const message = await authenticatedUserService.execute({
        email,
        password,
      });

      return res.json(message);
    } catch (error) {
      return res
        .status(404)
        .json({ error: true, message: "Email or password incorrect." });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await getUniqueUserService.execute(id);

    return res.json(user);
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await getAllUsersService.execute();

    return res.json(users);
  }

  async updateUserById(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const { id } = req.params;
    const user = await updateUserService.execute({
      id,
      name,
      email,
      password,
    });

    return res.json(user);
  }

  async deleteUserById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await deleteUserService.execute({ id });

    return res.json(user);
  }

  async checkToken(req: Request, res: Response) {
    const { token } = req.body;

    if (!token)
      return res.status(401).json({ message: "Autorização invalida" });

    try {
      const data = await authenticatedUserService.checkTokenIsValid(token);
      console.log(data);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ message: "token invalido" });
    }
  }
}

export { UserController };
