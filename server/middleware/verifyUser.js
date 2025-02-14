const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const verifyUser = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.json({ message: "Invalid Token" })
    }
    else {
        jwt.verify(token, process.env.ACESS_TOKEN, (err, decoded) => {
            if (err) {
                jwt.verify(token, process.env.STUDENT_KEY, (err, decoded) => {
                    if (err) {
                        return res.json({ message: "Invalid Token" })
                    }
                    else {
                        req.username = decoded.username;
                        req.role = decoded.role;
                        next();
                    }
                })
            }
            else {
                req.username = decoded.username;
                req.role = decoded.role;
                next();
            }
        })
    }
})

module.exports = verifyUser;