const express = require('express');
const { loginUser } = require('../controller/userController');
const studentRegister = require('../controller/studentController');

const router = express.Router();

router.post('/login', loginUser)
router.post('/register', studentRegister)

module.exports = router;
