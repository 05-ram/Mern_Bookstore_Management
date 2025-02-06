const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        roll: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        grade: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        }
    }
)
module.exports = mongoose.model('Student', studentSchema)