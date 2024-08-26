import express from 'express';

import isAuth from '../middlewares/isAuth.js';
import { getUsersSidebar } from '../controllers/userController.js';

const router = express.Router();

router.post('/', isAuth, getUsersSidebar);

export default router;