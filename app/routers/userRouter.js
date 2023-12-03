import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import GetUsers from '../controllers/users/GetUsers.js';
import GetUser from '../controllers/users/GetUser.js';
import UpdateUser from '../controllers/users/UpdateUser.js';
import DeleteUser from '../controllers/users/DeleteUser.js';

//routes
router.get('/', auth(), GetUsers);
router.get('/:userId', auth(), GetUser);
router.patch('/:userId', auth(), UpdateUser);
router.delete('/:userId', auth(), DeleteUser);

export default router;