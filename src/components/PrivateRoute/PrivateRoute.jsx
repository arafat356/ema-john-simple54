import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user.email ? children : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
