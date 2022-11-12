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

    try {
      const user = await createUserService.execute({
        name,
        email,
        password,
      });

      return res.json(user);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
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

    try {
      const user = await getUniqueUserService.execute(id);

      return res.json(user);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await getAllUsersService.execute();

      return res.json(users);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async updateUserById(req: Request, res: Response) {
    const { name, email, password, picture } = req.body;
    const { id } = req.params;

    try {
      const user = await updateUserService.execute({
        id,
        name,
        email,
        password,
        picture,
      });

      return res.json(user);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async deleteUserById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await deleteUserService.execute({ id });

      return res.json(user);
    } catch (error) {
      res.status(500).json({ error: "true", message: error });
    }
  }

  async checkToken(req: Request, res: Response) {
    const { token } = req.body;

    if (!token)
      return res.status(401).json({ message: "Autorização invalida" });

    try {
      const data = await authenticatedUserService.checkTokenIsValid(token);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ message: "token invalido" });
    }
  }
}

export { UserController };
