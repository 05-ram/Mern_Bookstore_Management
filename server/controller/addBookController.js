const asyncHandler = require('express-async-handler');
const AddBook = require('../models/addBook');

const addBook = asyncHandler(async (req, res) => {
    const { name, author, image } = req.body;
    if (!name || !author || !image) {
        res.json({ message: "All Fields are mandatory" });
    }
    const newBook = new AddBook(
        {
            name,
            author,
            image
        }
    )
    await newBook.save();
    return res.json({ added: true })
})
module.exports = addBook;