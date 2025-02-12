const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Student = require('../models/studentModel')

const loginUser = asyncHandler(async (req, res) => {
    const { username, password, role } = req.body;
    if (role === 'admin') {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.json({ message: "Admin Not Registered!", status: false })
        }
        const validPassword = await bcrypt.compare(password, admin.password)

        if (!validPassword) {
            return res.json({ message: "password is not valid" })
        }
        const token = jwt.sign(
            {
                username: admin.username,
                role: 'admin'
            },
            process.env.ACESS_TOKEN,
            {
                expiresIn: "1hr"
            }
        )
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 360000 })
        return res.json({ login: true, role: 'admin' })
    }
    else if (role === 'student') {
        const student = await Student.findOne({ username })
        if (student) {
            return res.json({ message: "Student is already registered" })
        }
        const validPassword = await bcrypt.compare(password, student.password)
        if (!validPassword) {
            return res.json({ message: "Wrong password" })
        }
        const token = jwt.sign({
            username: student.username,
            role: 'student'
        },
            process.env.STUDENT_KEY
        )
        res.cookie('token', token, { httpOnly: true, secure: true })
        return res.json({ login: true, role: 'student' })
    } else {

    }
})

module.exports = { loginUser }