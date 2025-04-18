import { createBrowserRouter } from "react-router-dom";
import Login from "../AuthComponents/Login";
import Layout from "../Layout/Layout";
import Signup from "../AuthComponents/Signup";

let myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"*",
        element:<h1>404 page not found in ur routes</h1>
    }

])
export default myRoutes