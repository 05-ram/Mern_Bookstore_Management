const express = require('express');
const { loginUser, logoutUser, sessionCheck } = require('../controller/userController');
const studentRegister = require('../controller/studentController');
const verifyToken = require('../middleware/verifyToken');
const verifyUser = require('../middleware/verifyUser');
const { addBook, getBook } = require('../controller/addBookController');

const router = express.Router();

router.post('/login', loginUser)
router.post('/register', verifyToken, studentRegister)
router.get('/logout', logoutUser)
router.get('/verify', verifyUser, sessionCheck)
router.post('/addbook', verifyUser, addBook)
router.get('/getbook', getBook)

module.exports = router;