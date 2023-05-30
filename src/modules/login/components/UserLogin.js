import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { validateUserLogin } from '../slice/loginSlice';

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(validateUserLogin());
    navigate('/');
  };
  return <button onClick={onLogin}>Login</button>;
};

export default UserLogin;
