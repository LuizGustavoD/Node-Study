import { Router } from 'express';
const statusRouter = Router();
statusRouter.get('/status', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});
export default statusRouter;
//# sourceMappingURL=statusRoutes.js.map