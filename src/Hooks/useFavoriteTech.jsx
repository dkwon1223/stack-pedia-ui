import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useFavoriteTech = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const favoriteTech = async (tech, userId) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:8080/api/v1/user/add/favtech/${userId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tech)
        })
        const json = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            // update auth context
            dispatch({ type: "FAVTECH", payload: JSON.stringify(tech) })
            setIsLoading(false)
        }
    }
    
    return { favoriteTech, isLoading, error }
}