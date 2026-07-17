import connectToDatabase from '../config/DBConnect.js';
class UserRepository {
    async getAllUsers() {
        const connection = await connectToDatabase();
        const [rows] = await connection.query('SELECT * FROM users');
        return rows;
    }
    async getUserById(id) {
        const connection = await connectToDatabase();
        const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }
    async createUser(name, email, password) {
        const connection = await connectToDatabase();
        const [result] = await connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        return result;
    }
    async updateUser(id, name, email, password) {
        const connection = await connectToDatabase();
        const [result] = await connection.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
        return result;
    }
    async deleteUser(id) {
        const connection = await connectToDatabase();
        const [result] = await connection.query('DELETE FROM users WHERE id = ?', [id]);
        return result;
    }
    async getUserByEmail(email) {
        const connection = await connectToDatabase();
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }
}
export default UserRepository;
//# sourceMappingURL=UserRepository.js.map