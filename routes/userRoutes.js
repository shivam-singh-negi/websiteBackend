// routes/userRoutes.js
import express from 'express';
import { createUser, getAllUsers, updateUser } from '../controllers/userController';
const router = express.Router();
import { authenticateUser } from '../middlewares/authMiddleware';

// User routes
router.get('/users', authenticateUser, getAllUsers); // Protected route, requires authentication
router.post('/users', authenticateUser, createUser); // Protected route, requires authentication
router.put('/users/:id', authenticateUser, updateUser); // Protected route, requires authentication

export default router;
