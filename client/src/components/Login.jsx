import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import UseContext from '../context/UseContext';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const { setSelectedRole } = useContext(UseContext);

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:6003/auth/login", { username, password, role })
            .then(res => {
                if (res.data.login && role === 'admin') {
                    setSelectedRole('admin')
                    navigate('/dashboard')
                }
                else if (res.data.login && role === 'student') {
                    setSelectedRole('student')
                    navigate('/')
                }
                else {
                    alert(`${res.data.message}`);
                }
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <div className="container login-page d-flex justify-content-center calc-height">
            <Form onSubmit={handleSubmit} style={{ width: "500px" }} className="mt-5">
                <h3 className="text-center mb-3">Login</h3>

                <Form.Group className='mb-3'>
                    <Form.Label><b>Username</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className='mb-3'>
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

export default Login;