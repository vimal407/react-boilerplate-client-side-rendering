import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = true;
  const jwt_token = 'xxxyy';

  if (!(isLoggedIn && jwt_token)) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
