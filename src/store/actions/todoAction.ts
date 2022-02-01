import { Dispatch } from "redux";
import { TodoActionTypes, TodoAction } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const resp = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`,)
            const json = await resp.json()
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: json})
        } catch(e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке списка'})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}