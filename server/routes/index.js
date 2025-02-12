const express = require('express');
const { loginUser } = require('../controller/userController');
const studentRegister = require('../controller/studentController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/login', loginUser)
router.post('/register', verifyToken, studentRegister)

module.exports = router;