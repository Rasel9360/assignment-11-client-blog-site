import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        }
    ])
  },
]);

export default Route;