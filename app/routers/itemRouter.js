import express from 'express'
const router = express.Router();

import auth from '../middleware/auth.js';
import CreateItem from '../controllers/items/CreateItem.js';
import GetItems from '../controllers/items/GetItems.js';
import GetItem from '../controllers/items/GetItem.js';
import UpdateItem from '../controllers/items/UpdateItem.js';
import DeleteItem from '../controllers/items/DeleteItem.js';

//routes
router.post('/', auth(), CreateItem);
router.get('/', auth(), GetItems);
router.get('/:itemId', auth(), GetItem);
router.patch('/:itemId', auth(), UpdateItem);
router.delete('/:itemId', auth(), DeleteItem);

export default router;