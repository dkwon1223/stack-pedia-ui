import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useFavoriteStack = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const favoriteStack = async (stack, userId) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`https://stack-pedia-api.adaptable.app/api/v1/user/add/favstack/${userId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(stack)
        })
        const json = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            // update auth context
            dispatch({ type: "FAVSTACK", payload: JSON.stringify(stack) })
            setIsLoading(false)
        }
    }
    
    return { favoriteStack, isLoading, error }
}