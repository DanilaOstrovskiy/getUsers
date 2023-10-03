import {Dispatch} from "redux";
import {UserActionsType} from "../../types/todo";
import axios from "axios";

export const fetchUsersTC = () => {
    return async (dispatch: Dispatch<UserActionsType>) => {
        dispatch({type: "FETCH_USERS"})
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response)
            dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data})
        } catch (e) {
            console.log(e)
            dispatch({type: "FETCH_USERS_ERROR",
                payload: "Ошибка при загрузке пользователей"})
        }
    }
}