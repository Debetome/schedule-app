import React, { 
    createContext, 
    useState, 
    useEffect, 
    useContext, 
    Dispatch, 
    SetStateAction, 
    ReactNode 
} from "react";

import { axiosAuth } from "../services/authService"

interface Auth {
    accessToken: string       
    isAuthenticated: boolean
}

interface AuthContextType {
    auth: Auth;
    setAuth: Dispatch<SetStateAction<Auth>>;
}

const initialAuthState: Auth = {
    accessToken: "",
    isAuthenticated: false,
};

const AuthContext = createContext<AuthContextType>({ auth: initialAuthState, setAuth: () => {} });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<Auth>(initialAuthState);

    useEffect(() => {
        const checkAuth = async() => {
            const response = await axiosAuth.post("/refresh")
            if (response.status !== 200) {
                setAuth({ accessToken: "", isAuthenticated: false })
                await axiosAuth.post("/logout")
            }
            
            setAuth({ 
                accessToken: response.data.accessToken,
                isAuthenticated: true 
            })
        }

        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
