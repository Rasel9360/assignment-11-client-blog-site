import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddBlog from "../Pages/AddBlog";
import AllBlogs from "../Pages/AllBlogs";
import ErrorPage from "../Pages/ErrorPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: ([
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/addBlog',
          element: <AddBlog></AddBlog>
        },
        {
          path: '/allBlogs',
          element: <AllBlogs></AllBlogs>,
        }
    ])
  },
]);

export default Route;