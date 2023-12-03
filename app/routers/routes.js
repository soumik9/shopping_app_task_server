import express from 'express';
const router = express.Router();

import authRouter from './authRouter.js'
import userRouter from './userRouter.js'
import itemRouter from './itemRouter.js'

const apiRoutes = [
    {
        path: '/auth',
        route: authRouter,
    },
    {
        path: '/user',
        route: userRouter,
    },
    {
        path: '/item',
        route: itemRouter,
    },
];

apiRoutes.forEach(route => router.use(route.path, route.route));
export default router;