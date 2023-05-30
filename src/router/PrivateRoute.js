import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'services/utils';
import { selectUserLoggedIn } from 'modules/login/slice/loginSlice';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectUserLoggedIn);
  const jwt_token = getToken();

  if (!(isLoggedIn && jwt_token)) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
