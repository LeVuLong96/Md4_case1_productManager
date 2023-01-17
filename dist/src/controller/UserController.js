"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await this.userService.getAll();
            res.render('user/login');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (user) {
                if (user.role === 'admin') {
                    req.session.User = user;
                    res.redirect(301, '/home');
                }
                else {
                    req.session.User = user;
                    res.redirect(301, '/homeUser');
                }
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.showFormRegister = async (req, res) => {
            res.render('user/register');
        };
        this.register = async (req, res) => {
            let user = req.body;
            await UserService_1.default.saveUser(user);
            res.redirect(301, '/users/login');
        };
        this.logout = async (req, res) => {
            if (!req.session) {
                req.session.destroy(() => {
                    res.redirect('/users/login');
                });
            }
            else {
                res.redirect('/users/login');
            }
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map