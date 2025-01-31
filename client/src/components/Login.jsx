import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState('student');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted successfully')
    }
    return (
        <div className="container login-page d-flex justify-content-center calc-height">
            <Form onSubmit={handleSubmit} style={{ width: "500px" }} className="mt-5">
                <h3 className="text-center mb-3">Login</h3>

                <Form.Group controlId="email" className='mb-3'>
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="psw" className='mb-3'>
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name="psw" id="psw" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Select aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                    <option>Role</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                </Form.Select>

                <Button type="submit" variant="success" className="w-100 mt-4">Login</Button>
            </Form>
        </div>
    )
}

export default Login