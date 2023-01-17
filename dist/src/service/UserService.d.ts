declare class UserService {
    private userRepository;
    constructor();
    checkUser: (user: any) => Promise<any>;
    saveUser: (user: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
