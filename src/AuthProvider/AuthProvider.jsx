import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, serUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {
        user,
        loading,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;