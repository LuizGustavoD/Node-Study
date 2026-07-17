import type { RowDataPacket, QueryResult } from 'mysql2';
declare class UserRepository {
    getAllUsers(): Promise<RowDataPacket[]>;
    getUserById(id: number): Promise<RowDataPacket | undefined>;
    createUser(name: string, email: string, password: string): Promise<QueryResult>;
    updateUser(id: number, name: string, email: string, password: string): Promise<QueryResult>;
    deleteUser(id: number): Promise<QueryResult>;
    getUserByEmail(email: string): Promise<RowDataPacket | undefined>;
}
export default UserRepository;
//# sourceMappingURL=UserRepository.d.ts.map