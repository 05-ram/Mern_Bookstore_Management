const mongoose = require('mongoose');

const addBookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        author: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Book', addBookSchema)