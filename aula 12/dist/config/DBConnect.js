import mysql2 from 'mysql2/promise';
const connection = mysql2.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'node_study',
    port: parseInt(`${process.env.DB_PORT || 3306}`, 10)
});
async function connectToDatabase() {
    try {
        await connection.getConnection();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
    catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
    return connection;
}
export default connectToDatabase;
//# sourceMappingURL=DBConnect.js.map