import { Button } from "react-bootstrap";

const BookCard = ({ book }) => {
    const { name, author, image } = book;
    return (
        <div className="book-card mb-3">
            <img src={image} alt="" />
            <div className="book-details text-center">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            <div className="book-actions align-items-center justify-content-center d-flex gap-3">
                <Button variant="success">edit</Button>
                <Button variant="danger">delete</Button>
            </div>
        </div>
    )
}

export default BookCard
