import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';
import { userReducer } from './reducers/userReducer';


const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootReducer = ReturnType<typeof rootReducer>