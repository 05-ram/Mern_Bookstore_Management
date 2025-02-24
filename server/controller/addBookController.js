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

const getBook = asyncHandler(async (req, res) => {
    const books = await AddBook.find()
    return res.json({ books })
})

module.exports = { addBook, getBook };