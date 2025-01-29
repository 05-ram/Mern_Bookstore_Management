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
                <NavLink to='/books' activeClassName="active">Books</NavLink>
                <NavLink to='/login' activeClassName="active">Login</NavLink>
            </div>
        </Navbar>
    )
}

export default NavbarComp;