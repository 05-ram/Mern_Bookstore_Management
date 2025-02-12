const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const verifyToken = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.json({ message: "Invalid Token" })
    }
    else {
        jwt.verify(token, process.env.ACESS_TOKEN, (err, decoded) => {
            if (err) {
                return res.json({ message: "Invalid Token" })
            }
            else {
                console.log(decoded);
                req.username = decoded.username;
                req.role = decoded.role;
                next();
            }
        })
    }
})

module.exports = verifyToken;