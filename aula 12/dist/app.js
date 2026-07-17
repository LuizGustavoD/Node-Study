import express from 'express';
import dotenv from 'dotenv';
import statusRouter from './routes/statusRoutes.js';
import crudRouter from './routes/CrudRoutes.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(statusRouter);
app.use(crudRouter);
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});
export default app;
//# sourceMappingURL=app.js.map