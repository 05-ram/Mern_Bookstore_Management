import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:6003/auth/getBook')
            .then(res => {
                setBooks(res.data.books);
            })
    }, []);

    return (
        <div className="book-list vh-100 d-flex gap-3 p-3 align-items-center justify-content-center">
            {books.length > 0 ? (
                books.map((book) => (
                    <BookCard book={book} key={book._id} />
                ))
            ) : (
                <>
                    <div className="d-flex gap-2 flex-column align-items-center">
                        <h3>No books available in the database.</h3>
                        <p>Please add the books to show</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Books;
