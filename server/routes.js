import express from 'express';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

const router = express.Router();

router.use('/server/auth', authRoutes);
router.use('/server/messages', messageRoutes);
router.use('/server/users', userRoutes);

export default router;