import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap"

const AddStudent = () => {
    const [roll, setRoll] = useState('');
    const [username, setUsername] = useState("");
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:6003/auth', { roll, username, grade, password })
    }
    return (
        <div className="container d-flex justify-content-center calc-height">
            <Form onSubmit={handleSubmit} style={{ width: "500px" }} className="mt-5">
                <h3 className="text-center mb-3">Login</h3>

                <Form.Group className='mb-3'>
                    <Form.Label><b>Roll No</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" id="username" value={roll} onChange={(e) => setRoll(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label><b>Grade</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" id="username" value={grade} onChange={(e) => setGrade(e.target.value)} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="psw" id="psw" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>


                <Button type="submit" variant="success" className="w-100 mt-4">Register</Button>
            </Form>
        </div>
    )
}

export default AddStudent