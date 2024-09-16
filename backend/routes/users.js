// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, assignRole } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Assign Role (Admin Only)
router.put('/role/:id', authMiddleware(['admin']), assignRole);

module.exports = router;
