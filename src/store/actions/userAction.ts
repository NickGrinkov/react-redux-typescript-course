import { Dispatch } from "redux"
import { userAction, UserActionType } from "../../types/user"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_USERS})
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await resp.json()         
            dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: json})
        } catch(e) {
            dispatch({type: UserActionType.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей'})
        }
    }
}