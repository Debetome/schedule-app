import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAuth: React.FC = () => {
    const { auth } = useAuth()        

    console.log(auth)

    return (
        auth.isAuthenticated
            ? <Outlet/>
            : <Navigate to="/sign-in"/>
    )
}

export default RequireAuth