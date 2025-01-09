import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext.jsx";

const PrivateRoute = ({ component: Component }) => {
  const  {isAuthenticated}  = useAuth 
console.log(isAuthenticated)
  return (isAuthenticated ? (<Component />) : (<Navigate to="/login" replace />));
};

export default PrivateRoute;
