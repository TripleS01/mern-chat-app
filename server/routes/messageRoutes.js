import express from 'express';

import { getMessages, sendMessages } from '../controllers/messageController.js';
import isAuth from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/send/:id', isAuth, sendMessages);

router.get('/get/:id', isAuth, getMessages);

router.post('/',);

export default router;