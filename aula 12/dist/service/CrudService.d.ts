import type { RowDataPacket, QueryResult } from 'mysql2';
declare class CrudService {
    private userRepository;
    constructor();
    getAllUsers(): Promise<RowDataPacket[]>;
    getUserById(id: number): Promise<RowDataPacket | undefined>;
    createUser(name: string, email: string, password: string): Promise<QueryResult>;
    updateUser(id: number, name: string, email: string, password: string): Promise<QueryResult>;
    deleteUser(id: number): Promise<QueryResult>;
    getUserByEmail(email: string): Promise<RowDataPacket | undefined>;
}
export default CrudService;
//# sourceMappingURL=CrudService.d.ts.map