import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  let location = useLocation();
  if(loading){
    return <p>Loading...</p>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
