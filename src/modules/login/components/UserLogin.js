import React from 'react';
import { useNavigate } from 'react-router';

const UserLogin = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/');
  };
  return <button onClick={onLogin}>Login</button>;
};

export default UserLogin;
