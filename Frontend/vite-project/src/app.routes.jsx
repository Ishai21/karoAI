import  {createBrowserRouter} from 'react-router-dom';
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register"

export const router = createBrowserRouter([
    {
        path : "/login",
        element : <Login/>
    },
    {
        path : "/register",
        element : <Register/>
    },
    {
        path: "/",
        element: <h1>Home Page</h1>
    }
])

