import UserRepository from "../repository/UserRepository.js";
import type { RowDataPacket, QueryResult } from 'mysql2';

class CrudService {

  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(): Promise<RowDataPacket[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<RowDataPacket | undefined> {
    return this.userRepository.getUserById(id);
  }

  async createUser(name: string, email: string, password: string): Promise<QueryResult> {
    console.log('Creating user with name:', name, 'email:', email);
    return this.userRepository.createUser(name, email, password);
  }

  async updateUser(id: number, name: string, email: string, password: string): Promise<QueryResult> {
    return this.userRepository.updateUser(id, name, email, password);
  }

  async deleteUser(id: number): Promise<QueryResult> {
    return this.userRepository.deleteUser(id);
  }

  async getUserByEmail(email: string): Promise<RowDataPacket | undefined> {
    return this.userRepository.getUserByEmail(email);
  }

}

export default CrudService;