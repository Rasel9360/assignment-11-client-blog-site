import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (loading) {
        return <div className="min-h-[calc(100vh-325px)]"><p>Loading</p></div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};

export default PrivateRoute;