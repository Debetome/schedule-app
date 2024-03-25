import React from "react"
import "./style.css"

function SignIn() {
    const loginBtnStyle: React.CSSProperties = {
        background: "linear-gradient(to right, #fdbb2d, #22c1c3)"
    }

    return (
        <div className="w-full h-full flex items-center justify-center shadow-md overflow-y-auto text-gray-700">
            <form className="login-form bg-white w-1/3 h-3/4 flex items-center justify-center flex-col rounded-lg">
                <img 
                    className="login-logo w-1/4 h-1/4 mb-4"
                    src="src/assets/user.png" 
                    alt="User icon" 
                />
                <h2 className="mb-6 h-8 text-3xl">Sign in</h2>
                <input className="mb-6 w-4/5 min-w-280 h-10 p-2 border-2 rounded-md shadow-xs" type="text" placeholder="Username"/>
                <input className="mb-6 w-4/5 h-10 p-2 border-2 rounded-md shadow-xs" type="password" placeholder="Password"/>                
                <button className="w-4/5 h-10 rounded-md shadow-xs mb-4 hover:brightness-90" style={loginBtnStyle} type="submit">Sign in</button>
                <a className="text-sm text-gray-500 underline cursor-pointer">Forgot password?</a>
            </form>
        </div>        
    )
}

export default SignIn