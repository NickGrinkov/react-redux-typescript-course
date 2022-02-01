import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/actions/userAction';

const  UserList: FC = () => {
  const {users, error, isLoading} = useTypedSelector(state => state.users)
  console.log(users);
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if(isLoading) {
    return <h3>Идет загрузка пользователей...</h3> 
  }

  if(error) {
    return <h3>Произошла ошибка</h3> 
  }
  
  return (
    <>
      <div>
      {
        users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      }
  </div>
    </>  
  )
}

export default UserList;
