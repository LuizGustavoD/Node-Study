import UserRepository from "../repository/UserRepository.js";
class CrudService {
    userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    async getAllUsers() {
        return this.userRepository.getAllUsers();
    }
    async getUserById(id) {
        return this.userRepository.getUserById(id);
    }
    async createUser(name, email, password) {
        console.log('Creating user with name:', name, 'email:', email);
        return this.userRepository.createUser(name, email, password);
    }
    async updateUser(id, name, email, password) {
        return this.userRepository.updateUser(id, name, email, password);
    }
    async deleteUser(id) {
        return this.userRepository.deleteUser(id);
    }
    async getUserByEmail(email) {
        return this.userRepository.getUserByEmail(email);
    }
}
export default CrudService;
//# sourceMappingURL=CrudService.js.map