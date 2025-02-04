import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
const NavbarComp = () => {
    return (
        <Navbar fixed="top" className='bg-dark justify-content-between'>
            <Navbar.Brand >
                <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
                    Book Store
                </Link>
            </Navbar.Brand>
            <div className="d-flex justify-content-between gap-3 navbar-right">
                <NavLink to='/books' activeclassname="active">Books</NavLink>
                <NavLink to='/addbook' activeclassname="active">Add Book</NavLink>
                <NavLink to='/addstudent' activeclassname="active">Add Student</NavLink>
                <NavLink to='/dashboard' activeclassname="active">Dashboard</NavLink>
                <NavLink to='/login' activeclassname="active">Login</NavLink>
            </div>
        </Navbar>
    )
}

export default NavbarComp;