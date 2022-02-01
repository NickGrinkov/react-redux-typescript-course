import React, {FC, useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTodos } from '../store/actions/todoAction';
import { useDispatch } from 'react-redux';
import { setTodoPage } from '../store/actions/todoAction';

const TodoList: FC = () =>  {
  const {todos, isLoading, error, page, limit} = useTypedSelector(state => state.todos)
  const dispatch = useDispatch()

  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    dispatch(fetchTodos(page, limit))
  }, [page])
  
  if(isLoading) {
    return <h3>Идет загрузка списка...</h3>
  }

  if(error) {
    return <h3>{error}</h3>
  }
  
  return (
    <div>
        {
          todos.map(todo => (
            <li style={{marginBottom: '10px'}} key={todo.id}>{todo.id} - {todo.title}</li>
          ))
        }
        {
          pages.map(p => (
            <span onClick={() => dispatch(setTodoPage(p))} style={{border: page === p ? '2px solid green' : '2px solid black', margin: '10px', padding: '5px', cursor: 'pointer'}}>{p}</span>
          ))
        }
    </div>
  )
}

export default TodoList;
