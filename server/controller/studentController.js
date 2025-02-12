const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');
const bcrypt = require('bcrypt');

const studentRegister = asyncHandler(async (req, res) => {
    const { username, roll, password, grade } = req.body
    if (!username || !roll || !password || !grade) {
        return res.json({ message: "All fields are mandatory!" })
    }
    const student = await Student.findOne({ username })
    if (student) {
        return res.json({ message: "Student is Already Registered" })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student(
        {
            username,
            roll: roll,
            password: hashPassword,
            grade
        }
    )
    await newStudent.save();
    return res.json({ registered: true })
})

module.exports = studentRegister;