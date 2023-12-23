// routes/authRoutes.js
import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/authController';
const authRoutes = express.Router();

// Authentication routes
authRoutes.post('/auth/register', registerUser);
authRoutes.post('/auth/login', loginUser);
authRoutes.post('/auth/logout', logoutUser);

export default authRoutes;
