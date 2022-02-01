import { TodoState, TodoActionTypes, TodoAction } from "../../types/todo"

const inittialState: TodoState = {
    todos: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 10
}


export const todoReducer = (state = inittialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, isLoading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, isLoading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}