import connectToDatabase from '../config/DBConnect.js';
import type { RowDataPacket, QueryResult } from 'mysql2';

class UserRepository {


  async getAllUsers() : Promise<RowDataPacket[]> {
    const connection = await connectToDatabase();
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM users');
    return rows;
  }

  async getUserById(id: number) : Promise<RowDataPacket | undefined> {
    const connection = await connectToDatabase();
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  async createUser(name: string, email: string, password: string) : Promise<QueryResult> {
    const connection = await connectToDatabase();
    const [result] = await connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return result;
  }

  async updateUser(id: number, name: string, email: string, password: string) : Promise<QueryResult> {
    const connection = await connectToDatabase();
    const [result] = await connection.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
    return result;
  }

  async deleteUser(id: number) : Promise<QueryResult> {
    const connection = await connectToDatabase();
    const [result] = await connection.query('DELETE FROM users WHERE id = ?', [id]);
    return result;
  }

  async getUserByEmail(email: string) : Promise<RowDataPacket | undefined> {
    const connection = await connectToDatabase();
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }
}

export default UserRepository;