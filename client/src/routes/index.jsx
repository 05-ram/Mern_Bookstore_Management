import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ErrorElement from "../components/ErrorElement";
import Login from "../components/Login";
import Books from "../components/Books";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import AddStudent from "../components/AddStudent";
import LogOut from "../components/LogOut";
import AddBook from "../components/AddBook";

const RouterData = () => {
    const strictRoute = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorElement />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/addstudent',
                    element: <AddStudent />
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/books',
                    element: <Books />,
                },
                {
                    path: '/logout',
                    element: <LogOut />,
                },
                {
                    path: '/addbook',
                    element: <AddBook />
                }
            ]
        },
    ])
    return strictRoute;
}
export default RouterData;