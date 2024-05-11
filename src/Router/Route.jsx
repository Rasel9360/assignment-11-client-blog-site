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
import BlogDetails from "../Pages/BlogDetails";

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
        },
        {
          path: '/blog/:id',
          element: <BlogDetails></BlogDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`)
        }
    ])
  },
]);

export default Route;