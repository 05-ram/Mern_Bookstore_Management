import { Button } from "react-bootstrap";
import defaultImg from "../assets/images/image.jpeg"

const BookCard = ({ book }) => {
    const { name, author, image } = book;

    return (
        <div className="book-card mb-3">
            <img src={defaultImg} alt="" />
            <div className="book-details text-center mt-2">
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
