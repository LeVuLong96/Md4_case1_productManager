import {User} from "../model/user";


class UserService {
    constructor() {
    }

    getAll = async () => {
        let user = await User.find();
        return user;
    }

checkUser = async (user) => {
        let userCheck = await User.findOne({ username: user.user.name, password: user.password });
        if(!userCheck) {
            return null
        }
        return userCheck
}
}

export default new UserService();