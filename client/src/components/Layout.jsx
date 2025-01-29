import { Outlet } from "react-router-dom";
import NavbarComp from "./Navbar";

const Layout = () => {
    return (
        <>
            <NavbarComp />
            <main className="pt-big">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;