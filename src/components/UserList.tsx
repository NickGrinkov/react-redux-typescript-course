import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const  UserList: FC = () => {
  const {users, error, isLoading} = useTypedSelector(state => state.users)
  
  const dispatch = useDispatch()
  return (
      <div>
          
      </div>
  )
}

export default UserList;
