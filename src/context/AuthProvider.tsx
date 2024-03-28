import React, { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from "react";

interface Auth {        
    user: string
    pwd: string
    accessToken: string
}

interface AuthContextType {
    auth: Auth;
    setAuth: Dispatch<SetStateAction<Auth>>;
}

const initialAuthState: Auth = {
    user: "",
    pwd: "",
    accessToken: ""
};

const AuthContext = createContext<AuthContextType>({ auth: initialAuthState, setAuth: () => {} });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<Auth>(initialAuthState);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;