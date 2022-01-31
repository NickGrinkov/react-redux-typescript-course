import {UserState, UserActionType, userAction} from '../../types/user';


const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: userAction): UserState => {
    switch(action.type) {
        case UserActionType.FETCH_USERS:
            return {users: [], isLoading: true, error: null}
        case UserActionType.FETCH_USERS_SUCCESS:
            return {users: action.payload, isLoading: false, error: null}
        case UserActionType.FETCH_USERS_ERROR:
            return {users: [], isLoading: false, error: action.payload}
        default:
            return state
    }
}