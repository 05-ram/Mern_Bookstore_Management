import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:6003/auth/addbook', { name, author, image })
            .then(res => {
                if (res.data.added) {
                    navigate('/books')
                }
                else if (res.data.message) {
                    alert(res.data.message)
                }
                else {
                    console.log('Error....')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container d-flex justify-content-center calc-height">
            <Form onSubmit={handleSubmit} style={{ width: "500px" }} className="mt-5">
                <h3 className="text-center mb-3">Add Book</h3>

                <Form.Group className='mb-3'>
                    <Form.Label><b>Book Name:</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="username" id="username" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label><b>Author Name:</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter author" name="username" id="username" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label><b>Imge URL:</b></Form.Label>
                    <Form.Control type="text" placeholder="Image url" name="username" id="username" value={image} onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="success" className="w-100 mt-4">Add</Button>
            </Form>
        </div>
    )
}

export default AddBook
