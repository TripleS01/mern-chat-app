import express from 'express';

import isAuth from '../middlewares/isAuth.js';
import { getUsersSidebar } from '../controllers/userController.js';

const router = express.Router();

router.get('/', isAuth, getUsersSidebar);

// router.get('/search', isAuth, getUsersSearch);

export default router;