import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { refreshAcccessToken, authenticate } from "../../ApiService";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
    const storedUser = localStorage.getItem("user");
    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

    // El token se actualiza luego de 15 minutos
    useEffect(() => {
        const interval = setInterval(async () => {
            if (refreshToken) {
                try {
                    const newAccessToken = await refreshAcccessToken();
                    setAccessToken(newAccessToken);
                    localStorage.setItem("accessToken", newAccessToken);
                } catch (error) {
                    console.error("Error refreshing token: ", error);
                }
            }
        }, 15 * 60 * 1000);

        return () => clearInterval(interval);
    }, [refreshToken]);

    // LOGIN
    const login = async (credentials) => {
        try {
            const result = await authenticate(credentials);

            
            setAccessToken(result.access);
            setRefreshToken(result.refresh);
            setUser({ username: credentials.username });

            localStorage.setItem("access", result.access);
            localStorage.setItem("refreshToken", result.refresh);
            localStorage.setItem("user", JSON.stringify({username: credentials.username}));

            console.log("RESULT - AUTHPROVIDER: ", result);
            console.log("RESULT - AUTHPROVIDER: ", result.access);
            console.log("RESULT - AUTHPROVIDER: ", result.refresh);
            
            navigate("/");
        } catch (error) {
            throw new Error(error.message || "Error during login");
        } 

    }

    // LOGOUT
    const logout = () => {
        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (

        <AuthContext.Provider value={{ accessToken, refreshToken, user, login, logout }}> 
             {children}
        </AuthContext.Provider>
    );
};