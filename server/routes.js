import express from 'express';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/message', messageRoutes);
router.use('/users', userRoutes);

export default router;