import express from 'express';
const router = express.Router();

import authRouter from './authRouter.js'
import userRouter from './userRouter.js'

const apiRoutes = [
    {
        path: '/auth',
        route: authRouter,
    },
    {
        path: '/user',
        route: userRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;