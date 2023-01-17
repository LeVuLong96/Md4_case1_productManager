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
        if(user) {
            if (user.role === 'admin') {
                // @ts-ignore
                req.session.User = user;
                res.redirect(301, '/home');
            } else {
                // @ts-ignore
                req.session.User = user;
                res.redirect(301, '/homeUser');
            }
        } else {
            res.redirect(301, '/users/login');
        }
    }

    showFormRegister = async (req: Request, res: Response) => {
        res.render('user/register' );
    }

    register = async (req: Request, res: Response) => {
        let user = req.body;
        await UserService.saveUser(user);
        res.redirect(301, '/users/login');
    }

    logout = async (req: Request, res: Response) => {
        if (!req.session) {
            req.session.destroy(() => {
                res.redirect('/users/login');
            });
        }
        else {
            res.redirect('/users/login');
        }
    }


}

export default new UserController();