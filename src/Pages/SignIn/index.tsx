import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/authService"; 

import "./style.css";

function SignIn() {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()    

    const userRef = useRef<HTMLInputElement>(null)
    const errorRef = useRef<HTMLParagraphElement>(null)

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errorMsg, setErrMsg] = useState('')  

    const loginBtnStyle: React.CSSProperties = {
        background: "linear-gradient(to right, #fdbb2d, #22c1c3)"
    };    

    useEffect(() => {
        if (userRef.current)
            userRef.current.focus()
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await axios.post("/login",
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )

            if (!response.data.success) {
                setErrMsg(response.data.message);
                return;
            }

            const accessToken = response?.data?.accessToken;
            const authData = { accessToken, isAuthenticated: true }

            setAuth(authData)
            setUser('')
            setPwd('')

            localStorage.setItem("auth", JSON.stringify(authData))
            navigate("/app");

        } catch (error: any) {
            setErrMsg(error.response?.data?.message || error.message); // Handling error messages gracefully
            errorRef.current?.focus();
        }
    };

    return (
        auth.isAuthenticated ? <Navigate to="/app"/> :
        <section className="w-full h-full flex items-center justify-center shadow-md overflow-y-auto text-gray-700">
            <form
                className="login-form bg-white w-1/3 h-3/4 flex items-center justify-center flex-col rounded-lg"
                onSubmit={handleSubmit}>
                <img
                    className="login-logo w-1/4 h-1/4 mb-4"                    
                    src="src/assets/user.png" // Double check the path to your image
                    alt="User icon"
                />
                <h2 className="mb-6 h-8 text-3xl">Sign in</h2>
                <input
                    className="mb-6 w-4/5 min-w-280 h-10 p-2 border-2 rounded-md shadow-xs"
                    ref={userRef}
                    type="text"
                    placeholder="Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    className="mb-6 w-4/5 h-10 p-2 border-2 rounded-md shadow-xs"
                    type="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <button className="w-4/5 h-10 rounded-md shadow-xs mb-4 hover:brightness-90" style={loginBtnStyle} type="submit">Sign in</button>
                <a className="text-sm text-gray-500 underline cursor-pointer">Forgot password?</a>
                <p ref={errorRef} className={`text-red-500 mt-4 ${errorMsg ? "errmsg" : "offscreen"}`} aria-live="assertive">{errorMsg}</p>
            </form>
        </section>
    );
}

export default SignIn;
