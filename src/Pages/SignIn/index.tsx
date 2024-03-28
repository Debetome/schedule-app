import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios"

import "./style.css";

function SignIn() {
    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const userRef = useRef<HTMLImageElement>(null)
    const errorRef = useRef<HTMLDivElement>(null)

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errorMsg, setErrMsg] = useState('');

    const from = location.state?.from?.pathname || "/sign-in";
    const loginBtnStyle: React.CSSProperties = {
        background: "linear-gradient(to right, #fdbb2d, #22c1c3)"
    };

    useEffect(() => {
        userRef.current!.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => { // Correcting event type
        e.preventDefault();

        try {
            const response = await axios.post("/login",
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            const accessToken = response?.data?.accessToken;            

            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });

        } catch(error: any) {
            setErrMsg(error.message)            
            errorRef.current!.focus();
        }
    };

    return (
        <section className="w-full h-full flex items-center justify-center shadow-md overflow-y-auto text-gray-700">            
            <form className="login-form bg-white w-1/3 h-3/4 flex items-center justify-center flex-col rounded-lg" onSubmit={handleSubmit}>
                <img 
                    className="login-logo w-1/4 h-1/4 mb-4"
                    ref={userRef}
                    src="src/assets/user.png" 
                    alt="User icon" 
                />
                <h2 className="mb-6 h-8 text-3xl">Sign in</h2>
                <input 
                    className="mb-6 w-4/5 min-w-280 h-10 p-2 border-2 rounded-md shadow-xs" 
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
