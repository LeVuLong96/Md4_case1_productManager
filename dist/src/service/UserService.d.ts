declare class UserService {
    constructor();
    getAll: () => Promise<(import("mongoose").Document<unknown, any, import("../model/user").IUser> & import("../model/user").IUser & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    checkUser: (user: any) => Promise<import("mongoose").Document<unknown, any, import("../model/user").IUser> & import("../model/user").IUser & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
declare const _default: UserService;
export default _default;
