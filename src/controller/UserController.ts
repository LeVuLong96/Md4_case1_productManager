import {Request, Response} from "express";
import UserService from "../service/UserService";

class UserController {
    private userService;
    constructor() {
        this.userService = UserService
    }
    showFormLogin = async (req: Request, res: Response) => {
        await this.userService.getAll();
        res.render('user/login' )
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkUser(req.body);
    }
}

export default new UserController();