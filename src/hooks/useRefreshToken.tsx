import { axiosAuth } from "../services/authService"
import useAuth from "./useAuth"

const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async() => {
        try {
            const { data } = await axiosAuth.post("/refresh")
            setAuth(prev => {
                console.log({...prev, accessToken: data.accessToken })
                return {...prev, accessToken: data.accessToken }
            })

            return data.accessToken
            
        } catch(error) {
            return Promise.reject(error)          
        }
    }

    return refresh
}

export default useRefreshToken