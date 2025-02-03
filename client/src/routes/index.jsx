import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ErrorElement from "../components/ErrorElement";
import Login from "../components/Login";
import Books from "../components/Books";
import Layout from "../components/Layout";

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
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/books',
                    element: <Books />,
                },
            ]
        },
    ])
    return strictRoute;
}
export default RouterData;