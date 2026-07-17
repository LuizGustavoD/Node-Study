import { Router } from 'express';
import CrudService from '../service/CrudService.js';
const crudRouter = Router();
const crudService = new CrudService();
function parseId(idParam) {
    if (typeof idParam !== 'string') {
        return null;
    }
    const id = Number.parseInt(idParam, 10);
    return Number.isNaN(id) ? null : id;
}
function hasInvalidUserBody(body) {
    return (typeof body.name !== 'string' ||
        typeof body.email !== 'string' ||
        typeof body.password !== 'string' ||
        body.name.trim().length === 0 ||
        body.email.trim().length === 0 ||
        body.password.trim().length === 0);
}
crudRouter.get('/users', async (_req, res) => {
    try {
        const users = await crudService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
crudRouter.get('/users/:id', async (req, res) => {
    const id = parseId(req.params.id);
    if (id === null) {
        res.status(400).json({ error: 'Invalid user id' });
        return;
    }
    try {
        const user = await crudService.getUserById(id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
crudRouter.post('/users', async (req, res) => {
    const body = req.body;
    if (hasInvalidUserBody(body)) {
        res.status(400).json({ error: 'name, email and password are required' });
        return;
    }
    try {
        const result = await crudService.createUser(body.name, body.email, body.password);
        res.status(201).json(result);
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
crudRouter.put('/users/:id', async (req, res) => {
    const id = parseId(req.params.id);
    const body = req.body;
    if (id === null) {
        res.status(400).json({ error: 'Invalid user id' });
        return;
    }
    if (hasInvalidUserBody(body)) {
        res.status(400).json({ error: 'name, email and password are required' });
        return;
    }
    try {
        const result = await crudService.updateUser(id, body.name, body.email, body.password);
        if ('affectedRows' in result && result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json(result);
    }
    catch (error) {
        console.error(`Error updating user with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
crudRouter.delete('/users/:id', async (req, res) => {
    const id = parseId(req.params.id);
    if (id === null) {
        res.status(400).json({ error: 'Invalid user id' });
        return;
    }
    try {
        const result = await crudService.deleteUser(id);
        if ('affectedRows' in result && result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(204).send();
    }
    catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default crudRouter;
//# sourceMappingURL=CrudRoutes.js.map