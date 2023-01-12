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
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map