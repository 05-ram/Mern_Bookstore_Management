const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginUser = asyncHandler(async (req, res) => {
    const { username, password, role } = req.body;
    if (role === 'admin') {
        const admin = await Admin.findOne({ username });
        console.log("admin details", admin)
        if (!admin) {
            return res.json({ message: "Admin Not Registered!", status: false })
        }
        const validPassword = await bcrypt.compare(password, admin.password)

        if (!validPassword) {
            return res.json({ message: "password is not valid" })
        }
        const token = jwt.sign(
            {
                username: admin.name,
                role: 'admin'
            },
            process.env.ACESS_TOKEN,
            {
                expiresIn: "1hr"
            }
        )
        res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600 })
        return res.json({ login: true, role: 'admin' })
    } else if (role === 'student') {

    } else {

    }
})

module.exports = { loginUser }