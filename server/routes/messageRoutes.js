import express from 'express';

import { getMessages, sendMessages } from '../controllers/messageController.js';
import isAuth from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/:id', isAuth, sendMessages);

router.get('/:id', isAuth, getMessages);

export default router;